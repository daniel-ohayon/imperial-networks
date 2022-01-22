const DEFAULT_EDGE_COLOR = '#8a8a8a';
const HIGHLIGHTED_EDGE_COLOR = '#ff6a0d';

function renderTropesNetwork(entries) {
    const data = prepare(entries);
    const dataById = keyById(data);

    var network = new vis.Network(document.getElementById('container'), {
        nodes: new vis.DataSet(data.nodes),
        edges: new vis.DataSet(data.edges)
    }, {
        interaction: { hover: true, selectable: false, zoomView: false },
        physics: { enabled: false }
    });

    // addHoverInteraction(sigmaInstance);
    enableModalOnNodeClick(network, dataById);
    // sigmaInstance.startForceAtlas2();
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
            font: { color: 'white' },
            type: 'def',
        });
    }
    const edges = entries.map((entry, i) => ({
        id: i,
        from: entry.Author,
        to: entry.Trope,
        quote: entry.Citation,
        book: entry.Title,
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

function keyById(data) {
    res = {};
    for (node of data.nodes) {
        res[node.id] = node;
    }
    for (edge of data.edges) {
        res[edge.id] = edge;
    }
    return res;
}

function enableModalOnNodeClick(network, dataById) {
    network.on("click", function(params) {
        nodeId = this.getNodeAt(params.pointer.DOM);
        const modal = document.querySelector(".modal");
        modal.classList.toggle("show-modal");
        const modalText = document.querySelector(".modal-text");
        network.isModalOpen = true;
        const connectedEdges = this.getConnectedEdges(nodeId).map(edgeId => dataById[edgeId]);
        const listHtml = connectedEdges
            .sort((e1, e2) => e1.quote < e2.quote ? 1 : -1)
            .map(e => `<li>[${e.to}] ${e.quote} – ${e.book}</li>`).join('\n');
        modalText.innerHTML = `<ul>${listHtml}</ul>`;

    });

    // Enable close button for modal
    const modal = document.querySelector(".modal");
    const modalCloseButton = document.querySelector(".close-button");
    modalCloseButton.addEventListener("click", e => {
        modal.classList.toggle("show-modal");
        network.isModalOpen = false;
    });

    document.addEventListener('keydown', function(event) {
        if (network.isModalOpen && event.keyCode == 27) { // ESC key
            modal.classList.toggle("show-modal");
        }
    });
}