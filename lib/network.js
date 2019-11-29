var state = {
  currentDate: null,
  timer: null,
  sigmaInstance: null
};

state.sigmaInstance = new sigma({
  graph: {
    nodes: PLACES,
    edges: USE_ANIMATION ? [] : USE_SIMPLIFIED_EDGES ? getSimplifiedEdges() : LINKS.map(makeEdgeFromLink),
  },
  settings: {
    autoRescale: false,
    enableCamera: false,
    zoomingRatio: 1,

    minArrowSize: ARROW_HEAD_SIZE,
    defaultEdgeType: 'curvedArrowRandom',
    defaultEdgeColor: '#C55A11',
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
  div = document.getElementById("legend");
  Object.values(TAG_TO_COLOR).forEach(entry => {
    div.innerHTML += `<span style='color: ${entry.color}'> ― </span> ${entry.label} <br/>`;
  });
}

function makeEdgeFromLink(link, index) {
  return {
    id: 'e' + index,
    source: link.from,
    target: link.to,
    size: EDGE_SIZE,
    dottedLine: link.partial_match,
    color: link.tag in TAG_TO_COLOR ? TAG_TO_COLOR[link.tag].color : 'black'
  };
}

makeLegend();

function getVisibleEdges(graph) {
  return new Set(graph.edges().map(e => e.id));
}

function getEdgeForIndex(index) {
  return `e${index}`;
}

state.sigmaInstance.bind("overNode", event => {
  if (USE_SIMPLIFIED_EDGES) {
    return;
  }
  const visibleEdges = getVisibleEdges(state.sigmaInstance.graph);
  const nodeId = event.data.node.id;
  LINKS.forEach((link, index) => {
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

function updateGraphForYear(year, sigmaInstance) {
  const visibleEdges = new Set(sigmaInstance.graph.edges().map(e => e.id));
  LINKS.forEach((link, index) => {
    if ((year == null || link.to_date <= year) && !visibleEdges.has(`e${index}`)) {
      sigmaInstance.graph.addEdge(makeEdgeFromLink(link, index));
    }
    if (year != null && link.to_date > year && visibleEdges.has(`e${index}`)) {
      sigmaInstance.graph.dropEdge(`e${index}`);
    }
  });
  sigmaInstance.refresh();
}

if (!USE_SIMPLIFIED_EDGES) {
  state.sigmaInstance.bind("outNode", () => updateGraphForYear(state.currentDate, state.sigmaInstance));
}