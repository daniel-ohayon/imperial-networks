function renderRaceQuotesPlot(places, quotes) {
    // World map image size in pixels
    const IMG_WIDTH = 1041;
    const IMG_HEIGHT = 577;
    const WORD_COLORS = {
        'Mélange': 'blue', //'#1E88E5',
        Nature: '#004D40',
        Race: '#FFC107',
        Sang: '#D81B60'
    };
    const nodes = prepareData(places, quotes);

    const container = document.getElementById('container');
    for (node of nodes) {
        const nodeDiv = document.createElement("div");
        nodeDiv.style.position = 'absolute';
        nodeDiv.style['font-family'] = 'Verdana';
        nodeDiv.style['background-color'] = 'white';
        nodeDiv.style.padding = '5px';
        nodeDiv.style.border = '1px solid black';
        nodeDiv.style.left = (IMG_WIDTH / 2 + node.x - 30) + 'px';
        nodeDiv.style.top = (IMG_HEIGHT / 2 + node.y - 30) + 'px';
        nodeDiv.innerHTML = `
            <div class="region">${node.label}</div>
        `;
        for ([word, count] of Object.entries(node.counts).sort()) {
            nodeDiv.innerHTML += `<div><div class="keyword-bullet" style="background-color: ${WORD_COLORS[word]}"></div> <span>${word}: ${count}</span></div>`;
        }
        container.appendChild(nodeDiv);
    }

    // enableModalOnNodeClick(network, quotes);
}

function prepareData(places, quotes) {

    countsByRegionAndKeyword = {};
    for (quote of quotes) {
        const reg = quote.Region;
        const keyword = quote.Keyword;
        if (['Generation', 'Extraction', 'Espèce', 'Origine'].includes(keyword)) {
            // skip these ones as they only occur once
            continue;
        }
        if (!(reg in countsByRegionAndKeyword)) {
            countsByRegionAndKeyword[reg] = {};
        }
        if (!(keyword in countsByRegionAndKeyword[reg])) {
            countsByRegionAndKeyword[reg][keyword] = 0;
        }
        countsByRegionAndKeyword[reg][keyword] += 1;
    }

    return places.filter(p => p.label !== 'Guyana').map(p => {

        if (p.label == "Isle of France & Bourbon") {
            p.label = "Isle Bourbon";
            p.id = "Isle Bourbon";
        }
        if (p.label == "Madagascar") {
            // Move label up so it doesn't overlap with that of Isle Bourbon
            p.y -= 62;
        };
        if (p.label == "New France") {
            // Move label up so it doesn't overlap with that of Isle Bourbon
            p.x += 120;
            p.y += 20;
        };
        if (p.label == "Caribbean") {
            p.x += 10;
        }
        const counts = countsByRegionAndKeyword[p.label];
        return {
            ...p,
            counts: counts
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