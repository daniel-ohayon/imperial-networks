function renderRaceQuotesPlot(places, quotes) {
    // World map image size in pixels
    const width = 1041;
    const height = 577;
    const nodes = prepareData(places, quotes);
    var network = new vis.Network(document.getElementById('container'), {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet([])
    }, {
        interaction: {
            hover: true,
            zoomView: false,
            selectable: false,
            dragNodes: false,
            dragView: false
        },
        physics: { enabled: false },
        nodes: { shape: 'dot' }
    });

    // align the network coordinates with the HTML canvas coordinates
    network.moveTo({
        position: { x: -width / 2, y: -height / 2 },
        offset: { x: -width / 2, y: -height / 2 },
        scale: 1,
    });
    enableModalOnNodeClick(network, quotes);
}

function prepareData(places, quotes) {

    countsByRegion = {};
    for (quote of quotes) {
        const reg = quote.Region;
        if (!(reg in countsByRegion)) {
            countsByRegion[reg] = 0;
        }
        countsByRegion[reg] += 1;
    }

    return places.map(p => {
        if (p.label == "Isle of France & Bourbon") {
            p.label = "Isle Bourbon";
            p.id = "Isle Bourbon";
        }
        if (p.label == "Madagascar") {
            // Move label up so it doesn't overlap with that of Isle Bourbon
            p.font = { vadjust: -62 }
        };
        return {
            ...p,
            size: countsByRegion[p.label] * 2,
            label: `${p.label} (${countsByRegion[p.label]}) `,
            opacity: 0.6
        }
    });
}

function enableModalOnNodeClick(network, quotes) {
    network.on("click", function(params) {
        nodeId = this.getNodeAt(params.pointer.DOM);
        if (nodeId == null) {
            return;
        }
        const modal = document.querySelector(".modal");
        modal.classList.toggle("show-modal");
        const modalText = document.querySelector(".modal-text");
        network.isModalOpen = true;

        const listHtml = quotes.filter(e => e.Region == nodeId)
            .sort((e1, e2) => e1.Quote < e2.Quote ? 1 : -1)
            .map(e => `<li>${e.Quote} – <span class="citation">${e.Source}</span></li>`).join('\n');
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