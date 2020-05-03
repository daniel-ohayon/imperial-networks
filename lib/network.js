function renderNetwork(options) {
  var state = {
    currentDate: null,
    timer: null,
    sigmaInstance: null
  };

  state.sigmaInstance = new sigma({
    graph: {
      nodes: PLACES.filter(p => !options.skip_france || p.id != 'France'),
      edges: options.use_animation ? [] : options.use_simplified_edges ? makeSimplifiedEdges(options) : options.links.map((link, i) => makeEdgeFromLink(link, i, options)),
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

  function makeLegend() {
    if (!options.use_tags) {
      return;
    }
    div = document.getElementById("legend");
    Object.values(options.tag_to_color).forEach(entry => {
      div.innerHTML += `<span style='color: ${entry.color}'> ― </span> ${entry.label} <br/>`;
    });
  }

  makeLegend();

  function getVisibleEdges(graph) {
    return new Set(graph.edges().map(e => e.id));
  }

  function getEdgeForIndex(index) {
    return `e${index}`;
  }

  state.sigmaInstance.bind("overNode", event => {
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
    state.sigmaInstance.bind("outNode", () => updateGraphForYear(options, state));
  }

  addModals(options, state);

  if (options.use_animation) {
    addAnimation(options, state);
  }
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
    size: link.size || options.edge_size,
    dottedLine: link.partial_match,
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
