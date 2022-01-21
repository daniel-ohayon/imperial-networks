const DEFAULT_EDGE_COLOR = '#8a8a8a';
const HIGHLIGHTED_EDGE_COLOR = '#ff6a0d';

function renderTropesNetwork(entries) {
    const data = prepare(entries);
    const sigmaInstance = new sigma({
        graph: {
            nodes: data.nodes,
            edges: data.edges,
        },
        settings: {
            autoRescale: false,
            // enableCamera: false,
            zoomingRatio: 1,
            enableHovering: false,
            mouseEnabled: false,
            // defaultEdgeColor: '#C55A11',
            // edgeColor: 'default',
            // defaultLabelSize: 15
        },
        renderer: {
            container: document.getElementById('container'),
            type: sigma.renderers.canvas
        }
    });
    CustomShapes.init(sigmaInstance);
    addHoverInteraction(sigmaInstance);
    enableModalOnNodeClick(sigmaInstance);
    // sigmaInstance.startForceAtlas2();
    sigmaInstance.refresh();
}

function addHoverInteraction(sigmaInstance) {
    const graph = sigmaInstance.graph;
    sigmaInstance.bind("overNode", event => {
        const hoverNode = event.data.node;
        const isTropeNode = hoverNode.kind == "TROPE";
        // edges go: author -> trope, so if we're hovering a trope, we filter edge targets
        // and if we're hovering an author, we filter edge sources
        for (edge of graph.edges()) {
            if ((isTropeNode ? edge.target : edge.source) !== hoverNode.id) {
                continue;
            }
            graph.edges(edge.id).color = HIGHLIGHTED_EDGE_COLOR;
            graph.edges(edge.id).size = 2;
        }
        sigmaInstance.refresh();
    });

    sigmaInstance.bind("outNode", event => {
        for (edge of graph.edges()) {
            if (edge.color !== DEFAULT_EDGE_COLOR) {
                graph.edges(edge.id).color = DEFAULT_EDGE_COLOR;
                graph.edges(edge.id).size = 1;
            }
        }
        sigmaInstance.refresh();
    });
}

VERTICAL_OFFSET = -1400;
HORIZONTAL_OFFSET = -180;

function prepare(entries) {
    const tropeNodes = uniqueBy(entries, e => e.Trope).map((entry, i) => ({
        id: entry.Trope,
        label: entry.Trope,
        x: HORIZONTAL_OFFSET,
        y: VERTICAL_OFFSET + i * 60,
        type: 'rectangle',
        color: '#fff599',
        kind: 'TROPE',
        labelSize: 'fixed',
        defaultLabelSize: 14,
        size: 1
    }));

    const authorNodes = [];
    let iLeft = 0;
    let iRight = 0;
    for (entry of uniqueBy(entries, e => e.Author)) {
        const isLeft = entry.Place == "Atlantic";
        if (isLeft) {
            iLeft++;
        } else {
            iRight++;
        }
        authorNodes.push({
            id: entry.Author,
            label: entry.Author,
            x: isLeft ? -650 : 400,
            y: VERTICAL_OFFSET + (isLeft ? iLeft : iRight) * 50,
            color: '#c00000',
            kind: 'AUTHOR',
            size: 10,
            type: 'def',
        });
    }
    const edges = entries.map((entry, i) => ({
        id: i,
        source: entry.Author,
        target: entry.Trope,
        quote: entry.Citation,
        book: entry.Title,
        type: 'toRectangleNode',
        color: DEFAULT_EDGE_COLOR,
        size: 1
    }));
    return {
        nodes: tropeNodes.concat(authorNodes),
        edges: edges
    };
}

function uniqueBy(arr, keyGetter) {
    let result = [];
    let seenKeys = new Set();
    for (elem of arr) {
        const key = keyGetter(elem);
        if (seenKeys.has(key)) {
            continue;
        }
        seenKeys.add(key);
        result.push(elem);
    }
    return result;
}

function enableModalOnNodeClick(sigmaInstance) {
    sigmaInstance.bind("clickNode", event => {
        const node = event.data.node;
        const modal = document.querySelector(".modal");
        sigmaInstance.isModalOpen = true;
        modal.classList.toggle("show-modal");
        const modalText = document.querySelector(".modal-text");

        const relevantEdges = Object.values(sigmaInstance.graph.edges()).filter(e => (node.kind == 'AUTHOR' ? e.source : e.target) == node.id);
        const listHtml = relevantEdges
            .sort((e1, e2) => e1.quote < e2.quote ? 1 : -1)
            .map(e => `<li>[${e.target}] ${e.quote} – ${e.book}</li>`).join('\n');
        modalText.innerHTML = `<ul>${listHtml}</ul>`;
    });

    // Enable close button for modal
    const modal = document.querySelector(".modal");
    const modalCloseButton = document.querySelector(".close-button");
    modalCloseButton.addEventListener("click", e => {
        modal.classList.toggle("show-modal");
        sigmaInstance.isModalOpen = false;
    });

    document.addEventListener('keydown', function(event) {
        if (sigmaInstance.isModalOpen && event.keyCode == 27) { // ESC key
            modal.classList.toggle("show-modal");
        }
    });
}