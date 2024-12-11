function renderNetwork(options) {
  // main entrypoint method, called directly from the HTML files

  options = overrideOptionsFromURL(options);

  var state = {
    currentDate: null,
    timer: null,
    sigmaInstance: null,
    showingSearchResult: false,
    isModalOpen: false,
    isAnimationActive: false,
  };

  // If debugCoordinates=1 is passed via the URL params, show a div
  // with the mouse's coordinates relative to the center of the canvas.
  // This is helpful to tweak the position of nodes in the graph.
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("debugCoordinates")) {
    const coordDiv = document.createElement("div");
    coordDiv.style =
      "position: fixed; bottom: 10px; left: 10px; backgroundColor: rgba(255,255,255,0.8); padding: 5px; font-family: monospace; font-size: 20px;";
    document.body.appendChild(coordDiv);

    const container = document.getElementById("container");

    document.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const relativeX = e.clientX - centerX;
      const relativeY = e.clientY - centerY;
      coordDiv.textContent = `x: ${Math.round(relativeX)}, y: ${Math.round(
        relativeY
      )}`;
    });
  }

  // update links to simplify tags if needed
  if (options.use_simplified_tags) {
    options.links = options.links_with_simplified_tags;
    // remove now-unused tags from legend
    const distinctTags = new Set(options.links.map((link) => link.tag));
    options.tag_to_color = Object.fromEntries(
      Object.entries(options.tag_to_color).filter((entry) =>
        distinctTags.has(entry[0])
      )
    );
  }

  // update links to filter on dates if needed
  if (
    !options.use_animation &&
    options.start_year != null &&
    options.end_year != null
  ) {
    options.links = options.links.filter(
      (link) =>
        parseInt(link.to_date) >= options.start_year &&
        parseInt(link.to_date) <= options.end_year
    );
  }

  let allEdges = options.links.map((link, i) =>
    makeEdgeFromLink(link, i, options)
  );

  state.sigmaInstance = new sigma({
    graph: {
      nodes: PLACES.filter(
        (p) => !(options.hidden_locations || []).includes(p.id)
      ),
      edges: options.use_animation
        ? []
        : options.use_simplified_edges
        ? makeSimplifiedEdges(options)
        : allEdges,
    },
    settings: {
      autoRescale: false,
      enableCamera: false,
      zoomingRatio: 1,

      minArrowSize: options.arrow_head_size,
      defaultEdgeType: "curvedArrowRandom",
      defaultEdgeColor: "#C55A11",
      edgeColor: "default",
      defaultLabelSize: 20,
    },
    renderer: {
      container: document.getElementById("container"),
      type: sigma.renderers.canvas,
    },
  });

  state.sigmaInstance.refresh();

  makeLegend(options);
  if (options.title != null) {
    document.getElementById("title").innerText = options.title;
  }

  state.sigmaInstance.bind("overNode", (event) => {
    if (state.showingSearchResult) {
      return;
    }
    if (options.use_simplified_edges) {
      return;
    }
    const visibleEdges = getVisibleEdges(state.sigmaInstance.graph);
    const nodeId = event.data.node.id;
    options.links.forEach((link, index) => {
      const edgeId = getEdgeForIndex(index);
      if (
        link.from != nodeId &&
        link.to != nodeId &&
        visibleEdges.has(edgeId)
      ) {
        state.sigmaInstance.graph.dropEdge(edgeId);
      }
    });
    state.sigmaInstance.refresh();
  });

  if (!options.use_simplified_edges) {
    state.sigmaInstance.bind("outNode", () => {
      if (state.showingSearchResult) {
        return;
      }
      updateGraphForYear(options, state);
    });
  }

  addModals(options, state);

  if (options.use_animation) {
    addAnimation(options, state);
  } else {
    // hide animation-related UI elements
    document.getElementById("controls-div").style.display = "none";
    document.getElementById("year").style.display = "none";
    document.getElementById("seven-years-war-label").style.display = "none";

    if (options.use_histogram) {
      // otherwise the histogram is set up inside addAnimation
      addHistogram(options);
    }
  }

  if (options.use_search) {
    addSearchBar(options, state, allEdges);
  } else {
    document.getElementById("search-box").style.display = "none";
  }

  activateCheckbox(state);
}

function overrideOptionsFromURL(options) {
  const newOptions = { ...options };
  const params = new URLSearchParams(window.location.search);
  for (const key of params.keys()) {
    let val;
    try {
      val = JSON.parse(params.get(key));
    } catch (Exception) {
      // string
      val = params.get(key);
    }
    newOptions[key] = val;
  }
  return newOptions;
}

function activateCheckbox(state) {
  const checkbox = document.getElementById("checkbox-syw");
  if (!checkbox) {
    return;
  }

  // Redraw network when clicking the 1763 filter checkbox
  checkbox.addEventListener("change", (e) => {
    // Remove histogram and legend
    document.getElementById("dates-histogram").innerHTML = "";
    document.getElementById("legend").innerHTML = "";
    // Clear network
    state.sigmaInstance.kill();

    if (e.currentTarget.checked) {
      renderNetwork({ ...OFFICIALS_CONFIG, default_year: 1785 });
    } else {
      renderNetwork({
        ...OFFICIALS_CONFIG,
        links: OFFICIALS_CONFIG.links.filter((e) => e.to_date <= 1763),
      });
    }
  });
}

function makeLegend(options) {
  div = document.getElementById("legend");
  if (!options.use_tags && !options.use_dotted_lines) {
    div.style.display = "none";
    return;
  }
  Object.values(options.tag_to_color).forEach((entry) => {
    div.innerHTML += `<span style='color: ${entry.color}'> ― </span> ${entry.label} <br/>`;
  });
}

function getVisibleEdges(graph) {
  return new Set(graph.edges().map((e) => e.id));
}

function getEdgeForIndex(index) {
  return `e${index}`;
}

function updateGraphForYear(options, state) {
  const sigmaInstance = state.sigmaInstance;
  const visibleEdges = new Set(sigmaInstance.graph.edges().map((e) => e.id));
  const year = state.currentDate;
  options.links.forEach((link, index) => {
    if (
      (year == null || link.to_date <= year) &&
      !visibleEdges.has(`e${index}`)
    ) {
      sigmaInstance.graph.addEdge(makeEdgeFromLink(link, index, options));
    }
    if (year != null && link.to_date > year && visibleEdges.has(`e${index}`)) {
      sigmaInstance.graph.dropEdge(`e${index}`);
    }
  });
  sigmaInstance.refresh();
}

function makeEdgeFromLink(link, index, options) {
  let source = link.from;
  let target = link.to;

  return {
    id: "e" + index,
    source,
    target,
    name: link.name,
    bio: link.annotated_bio,
    size: link.size || options.edge_size,
    dottedLine: false,
    hideArrow: options.undirected,
    // The coordinates below are roughly the coordinates of France
    // in the Canvas X/Y basis (which is different from the Sigma X/Y basis).
    middlePoint:
      options.bend_edges_via_metropole && link.via_metropole
        ? { x: 610, y: 170 }
        : null,
    color:
      options.use_tags && link.tag in options.tag_to_color
        ? options.tag_to_color[link.tag].color
        : options.edge_color ?? "#009292",
  };
}

class Counter {
  constructor() {
    this.counter = {};
  }

  count(key) {
    if (!(key in this.counter)) {
      this.counter[key] = 0;
    }
    this.counter[key] += 1;
  }

  get_ratio(key) {
    if (!(key in this.counter)) {
      return 0;
    }
    const total = Object.values(this.counter).reduce((acc, v) => acc + v, 0);
    return this.counter[key] / total;
  }

  get_ratios() {
    let entries = [];
    for (let key in this.counter) {
      entries.push([key, this.get_ratio(key)]);
    }
    return entries;
  }

  get_counts() {
    return Object.entries(this.counter);
  }
}

function addSearchBar(options, state, allEdges) {
  const nameToEdges = {};
  const searchInput = document.getElementById("edge-search");
  const clearButton = document.getElementById("clear-edge-search");
  const bioDiv = document.getElementById("search-bio");

  allEdges.forEach((edge) => {
    if (!(edge.name in nameToEdges)) {
      nameToEdges[edge.name] = [];
    }
    nameToEdges[edge.name].push(edge);
  });

  const onAccept = function (name) {
    // FIXME Guilloulet bugs
    // FIXME input shows above popup

    const matchingEdges = nameToEdges[name];
    const sigmaInstance = state.sigmaInstance;
    const visibleEdges = new Set(sigmaInstance.graph.edges().map((e) => e.id));
    // clear all edges
    visibleEdges.forEach((edgeId) => {
      sigmaInstance.graph.dropEdge(edgeId);
    });
    // draw only the matching edges
    matchingEdges.forEach((edge) => {
      // make the edge bigger than in regular mode, and show arrow
      sigmaInstance.graph.addEdge({ ...edge, size: 1, hideArrow: false });
    });
    sigmaInstance.refresh();

    // Add biography
    bioDiv.innerHTML = `<p>${matchingEdges[0].bio}</p>`;

    // Update state (to disable edge filtering on hover)
    state.showingSearchResult = true;

    // Show "clear" button
    clearButton.style.display = "inline-block";

    // Scroll to bottom of page to see the biography
    window.scrollTo(0, document.body.scrollHeight);
  };

  // enable autocompletion interactivity on the search bar
  autocomplete(searchInput, Object.keys(nameToEdges), onAccept);

  clearButton.addEventListener("click", function () {
    bioDiv.innerHTML = "";
    clearButton.style.display = "none";
    searchInput.value = "";
    state.showingSearchResult = false;
    // redraw graph
    updateGraphForYear(options, state);
  });
}

// draw only one edge linking each pair of nodes, scaled by volume
function makeSimplifiedEdges(options) {
  const output = [];
  const counts = new Counter();
  options.links.forEach((e) => {
    let from = e.from;
    let to = e.to;
    let tag = options.use_tags ? e.tag : null;
    if (options.undirected) {
      [from, to] = [e.from, e.to].sort();
    }
    const key = `${tag || "default"}:${from}:${to}`;
    counts.count(key);
  });

  counts.get_counts().forEach(([key, count], index) => {
    const keyParts = key.split(":");
    output.push({
      id: `e${index}`,
      source: keyParts[1],
      target: keyParts[2],
      tag: keyParts[0],
      color:
        keyParts[0] in options.tag_to_color
          ? options.tag_to_color[keyParts[0]].color
          : "grey",
      size: Math.log2(count) * options.arrow_scaling_factor,
    });
  });
  console.log(output);
  return output;
}
