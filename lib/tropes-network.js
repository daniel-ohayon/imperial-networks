const DEFAULT_EDGE_COLOR = '#8a8a8a';
const HIGHLIGHTED_EDGE_COLOR = '#ff6a0d';

function renderTropesNetwork(entries) {
    const data = prepare(entries);
    const dataById = keyById(data);
    var network = new vis.Network(document.getElementById('container'), {
        nodes: new vis.DataSet(data.nodes),
        edges: new vis.DataSet(data.edges)
    }, {
        interaction: {
            hover: true,
            zoomView: false,
            selectable: false,
            dragNodes: false,
            dragView: false
        },
        physics: { enabled: false },
    });

    enableModalOnNodeClick(network, dataById);

    network.moveTo({
        scale: 1,
    });
}

COLUMN_SPACING = 550;

function prepare(entries) {
    const tropeNodes = distinctOrderedByCount(entries, e => e.Trope)
        .map((entry, i) => ({
            id: entry.Trope,
            label: entry.Trope,
            x: 0,
            y: i * 60,
            type: 'rectangle',
            color: '#fff599',
            kind: 'TROPE',
            labelSize: 'fixed',
            defaultLabelSize: 14,
            size: 10,
        }));

    const authorNodes = [];
    let iLeft = 0;
    let iRight = 0;
    for (entry of distinctOrderedByCount(entries, e => e.Author)) {
        const isLeft = entry.Place == "Atlantic";
        if (isLeft) {
            iLeft++;
        } else {
            iRight++;
        }
        authorNodes.push({
            id: entry.Author,
            label: entry.Author,
            x: (isLeft ? -1 : 1) * COLUMN_SPACING,
            y: (isLeft ? iLeft : iRight) * 50,
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
        chosen: {
            edge: function(values, id, selected, hovering) {
                const isNodeHovered = Object.values(this.body.nodes).some(node => node.hover);
                if (!isNodeHovered) {
                    // Only style edge when a node touching it is hovered, 
                    // but not when the edge itself is hovered
                    return;
                }
                values.width = 3;
                values.color = '#c00000';
            }
        },
        size: 1
    }));
    return {
        nodes: tropeNodes.concat(authorNodes),
        edges: edges
    };
}

function distinctOrderedByCount(arr, keyGetter) {
    let keyToElem = {};
    for (elem of arr) {
        const key = keyGetter(elem);
        if (!(key in keyToElem)) {
            keyToElem[key] = {...elem, count: 0 };
        }
        keyToElem[key].count++;
    }
    return Object.values(keyToElem).sort((e1, e2) => e2.count - e1.count);
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
        if (nodeId == null) {
            return;
        }
        const modal = document.querySelector(".modal");
        modal.classList.toggle("show-modal");
        const modalText = document.querySelector(".modal-text");
        network.isModalOpen = true;
        const connectedEdges = this.getConnectedEdges(nodeId).map(edgeId => dataById[edgeId]);
        const listHtml = connectedEdges
            .sort((e1, e2) => e1.quote < e2.quote ? 1 : -1)
            .map(e => `<li><span class="trope">[${e.to.trim()}]</span> ${e.quote} <span class="citation">– ${e.book}</citation></li>`).join('\n');
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
            network.isModalOpen = false;
        }
    });
}