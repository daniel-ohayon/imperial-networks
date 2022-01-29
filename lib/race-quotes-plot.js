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
        nodeDiv.classList.add('region-stats');
        nodeDiv.dataset.regionName = node.label;
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

    // enable click interaction
    liveBindClick('region-stats', function(elem) {
        addModal(quotes, elem.dataset.regionName);
    }, false);

    // enable modal closing
    const modal = document.querySelector(".modal");
    const modalCloseButton = document.querySelector(".close-button");
    modalCloseButton.addEventListener("click", e => {
        modal.classList.toggle("show-modal");
        // network.isModalOpen = false;
    });

    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 27) { // ESC key
            modal.classList.toggle("show-modal");
        }
    });
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

// Because our divs are created dynamically in JS, we can't
// bind event listeners to them directly. Instead, we bind the
// listener to the whole doc, and figure out whether the click came from
// a child of the element we wanted.
function liveBindClick(targetClass, callback) {
    document.addEventListener('click', function(event) {
        var el = event.target,
            found;

        while (el && !(found = el.classList.contains(targetClass))) {
            el = el.parentElement;
        }
        if (found) {
            callback(el);
        }
    });
}

function addModal(allQuotes, region) {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
    const modalText = document.querySelector(".modal-text");
    // network.isModalOpen = true;

    const listHtml = allQuotes.filter(e => e.Region == region)
        .sort((e1, e2) => e1.Quote < e2.Quote ? 1 : -1)
        .map(e => `<li>${e.Quote} – <span class="citation">${e.Source}</span></li>`).join('\n');
    modalText.innerHTML = `<ul>${listHtml}</ul>`;

}