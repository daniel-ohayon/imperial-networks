
function renderNetwork(options) {
  var state = {
    currentDate: null,
    timer: null,
    sigmaInstance: null,
    showingSearchResult: false,
    isModalOpen: false,
  };

  const allEdges = options.links.map((link, i) => makeEdgeFromLink(link, i, options));

  state.sigmaInstance = new sigma({
    graph: {
      nodes: PLACES.filter(p => !(options.hidden_locations || []).includes(p.id)),
      edges: options.use_animation ? [] : options.use_simplified_edges ? makeSimplifiedEdges(options) : allEdges,
    },
    settings: {
      autoRescale: false,
      enableCamera: false,
      zoomingRatio: 1,

      minArrowSize: options.arrow_head_size,
      defaultEdgeType: 'curvedArrowRandom',
      defaultEdgeColor: '#C55A11',
      hideArrows: options.undirected,
      edgeColor: 'default',
      defaultLabelSize: 20
    },
    renderer: {
      container: document.getElementById('container'),
      type: sigma.renderers.canvas
    }
  });

  state.sigmaInstance.refresh();

  makeLegend(options);

  state.sigmaInstance.bind("overNode", event => {
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
        link.from != nodeId && link.to != nodeId &&
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
  }

  if (true) { // TODO
    addSearchBar(options, state, allEdges);
  }
}


function makeLegend(options) {
  if (!options.use_tags && !options.use_dotted_lines) {
    return;
  }
  div = document.getElementById("legend");
  Object.values(options.tag_to_color).forEach(entry => {
    div.innerHTML += `<span style='color: ${entry.color}'> ― </span> ${entry.label} <br/>`;
  });
}

function getVisibleEdges(graph) {
  return new Set(graph.edges().map(e => e.id));
}

function getEdgeForIndex(index) {
  return `e${index}`;
}

function updateGraphForYear(options, state) {
  const sigmaInstance = state.sigmaInstance;
  const visibleEdges = new Set(sigmaInstance.graph.edges().map(e => e.id));
  const year = state.currentDate;
  options.links.forEach((link, index) => {
    if ((year == null || link.to_date <= year) && !visibleEdges.has(`e${index}`)) {
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
  if (options.undirected) {
    [source, target] = [link.from, link.to].sort();
  }

  return {
    id: 'e' + index,
    source,
    target,
    name: link.name,
    bio: link.annotated_bio,
    size: link.size || options.edge_size,
    dottedLine: false,
    // The coordinates below are roughly the coordinates of France
    // in the Canvas X/Y basis (which is different from the Sigma X/Y basis).
    middlePoint: false ? { x: 610, y: 170 } : null,
    color: (options.use_tags && link.tag in options.tag_to_color) ? options.tag_to_color[link.tag].color : '#009292'
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
  const clearButton = document.getElementById("clear-edge-search")
  const bioDiv = document.getElementById("search-bio");

  allEdges.forEach(edge => {
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
    const visibleEdges = new Set(sigmaInstance.graph.edges().map(e => e.id));
    // clear all edges
    visibleEdges.forEach((edgeId) => {
      sigmaInstance.graph.dropEdge(edgeId);
    });
    // draw only the matching edges
    matchingEdges.forEach(edge => {
      sigmaInstance.graph.addEdge(edge);
    });
    sigmaInstance.refresh();

    // Add biography
    bioDiv.innerHTML = `<p>${matchingEdges[0].bio}</p>`

    // Update state (to disable edge filtering on hover)
    state.showingSearchResult = true;

    // Show "clear" button
    clearButton.style.display = "inline-block"
  };

  // enable autocompletion interactivity on the search bar
  autocomplete(
    searchInput,
    Object.keys(nameToEdges),
    onAccept
  );

  clearButton.addEventListener("click", function () {
    bioDiv.innerHTML = '';
    clearButton.style.display = "none";
    searchInput.value = '';
    state.showingSearchResult = false;
    // redraw graph
    updateGraphForYear(options, state);
  });
}

// draw only one edge linking each pair of nodes, scaled by volume
function makeSimplifiedEdges(options) {
  const output = [];
  const counts = new Counter();
  options.links.forEach(e => {
    let from = e.from;
    let to = e.to;
    let tag = options.use_tags ? e.tag : null;
    if (options.undirected) {
      [from, to] = [e.from, e.to].sort();
    }
    const key = `${tag || 'default'}:${from}:${to}`;
    counts.count(key);
  });

  counts.get_counts().forEach(([key, count], index) => {
    const keyParts = key.split(':');
    output.push({
      id: `e${index}`,
      source: keyParts[1],
      target: keyParts[2],
      tag: keyParts[0],
      color: keyParts[0] in options.tag_to_color ? options.tag_to_color[keyParts[0]].color : 'grey',
      size: Math.log2(count) * options.arrow_scaling_factor,
    });
  });
  console.log(output);
  return output;
}
