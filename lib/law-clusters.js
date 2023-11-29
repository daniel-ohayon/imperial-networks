const PLAY_ICON_HTML = '<i class="material-icons">play_arrow</i>';
const PAUSE_ICON_HTML = '<i class="material-icons">pause</i>';

const GLOBAL_STATE = {
    isAnimationActive: false,
};
const REFRESH_RATE_MILLISECONDS = 100;

function addSpan(text, parent, className) {
    const res = document.createElement('span');
    res.classList.add(className);
    res.innerHTML = text;
    if (parent !== null) {
        parent.appendChild(res);
    }
    return res;
}

const CLUSTER_TO_LAWS = {};
for (const law of LAWS_IN_CLUSTERS) {
    if (!(law.cluster_header in CLUSTER_TO_LAWS)) {
        CLUSTER_TO_LAWS[law.cluster_header] = [];
    }
    CLUSTER_TO_LAWS[law.cluster_header].push(law);
}

function makeHeader(itemsWithWidth) {
    const tr = document.createElement("tr");
    for (const item of itemsWithWidth) {
        const th = document.createElement("th");
        th.textContent = item.text;
        if (item.width != null) {
            th.style.width = item.width;
        }
        tr.appendChild(th)
    }
    return tr;
}

function makeRow(items) {
    const tr = document.createElement("tr");
    for (const item of items) {
        const td = document.createElement("td");
        td.innerHTML = item;
        tr.appendChild(td);
    }
    return tr;
}

function makeTable(laws) {
    const tbl = document.createElement("table");
    tbl.appendChild(makeHeader([
        { text: 'Name', width: '17%' },
        { text: 'Excerpt' },
        { text: 'Location', width: '10%' },
        { text: 'Date', width: '5%' },
        { text: 'Author', width: '10%' }
    ]));
    laws.sort((a, b) => a.date - b.date);
    for (const law of laws) {
        const dotClass = law.ocean == "ATLANTIC" ? 'atlanticDot' : 'indianDot';
        const row = makeRow([
            law.name,
            `<span style="font-style: italic;">${law.quote}</span>`,
            `<span class="${dotClass}">● </span>` + law.location,
            law.date,
            law.author
        ]);
        row.classList.add('rowForLaw');
        row.dataset.year = Number(law.date);
        tbl.appendChild(row);
    }
    return tbl;
}

function dots(count, total = 0) {
    if (count == 0 && total == 0) {
        return '&nbsp;' // non-breaking space to preserve element dimensions
    }
    return '●'.repeat(count) + '○'.repeat(Math.max(total - count, 0));
}

function toggle(currentVal, option1, option2) {
    if (currentVal == option1) {
        return option2;
    }
    if (currentVal == option2) {
        return option1;
    }
    throw `Unexpected value: '${currentVal}' (expected '${option1}' or '${option2}')`;
}

const container = document.getElementById('clusters');
for (const clusterName in CLUSTER_TO_LAWS) {
    const laws = CLUSTER_TO_LAWS[clusterName]
    const clusterDiv = document.createElement('div');
    clusterDiv.classList.add('clusterBox');
    const flexDiv = document.createElement('div');
    flexDiv.classList.add('clusterFlex');

    // fill in the cluster flex
    const nIndian = laws.filter(law => law.ocean == 'INDIAN_OCEAN').length;
    const nAtlantic = laws.filter(law => law.ocean == 'ATLANTIC').length;
    const chevron = addSpan('expand_circle_down', flexDiv, 'material-symbols-outlined');
    addSpan(clusterName, flexDiv, 'cluster_name');

    const dotsAtlantic = addSpan(dots(nAtlantic), flexDiv, 'cluster_atlanticCount');
    const dotsIndian = addSpan(dots(nIndian), flexDiv, 'cluster_indianCount');
    // store the date of the laws in the objects' HTML data attribute so we can retrieve them when refreshing the DOM for the animation
    dotsAtlantic.dataset.years = JSON.stringify(laws.filter(law => law.ocean == 'ATLANTIC').map(law => Number(law.date)));
    dotsAtlantic.dataset.finalLawCount = nAtlantic;
    dotsIndian.dataset.years = JSON.stringify(laws.filter(law => law.ocean == 'INDIAN_OCEAN').map(law => Number(law.date)));
    dotsIndian.dataset.finalLawCount = nIndian;

    clusterDiv.appendChild(flexDiv);

    // add laws table with expand-on-click behavior
    const lawsTable = makeTable(laws);
    lawsTable.style.display = "none";
    clusterDiv.appendChild(lawsTable);
    clusterDiv.addEventListener("click", () => {
        lawsTable.style.display = toggle(lawsTable.style.display, 'block', 'none');
        chevron.innerHTML = toggle(chevron.innerHTML, 'expand_circle_down', 'expand_less');
    });
    // do not capture clicks inside the table
    lawsTable.addEventListener("click", e => e.stopPropagation());

    container.appendChild(clusterDiv);
}
addAnimation();

function addAnimation() {
    const minDate = LAWS_IN_CLUSTERS.reduce((curr, law) => Math.min(curr, law.date), 2000);
    const maxDate = LAWS_IN_CLUSTERS.reduce((curr, law) => Math.max(curr, law.date), 0);

    const slider = document.getElementById('time-slider');
    const year = document.getElementById('year');
    slider.min = minDate;
    slider.max = maxDate;
    slider.value = maxDate;
    year.innerHTML = `Year: ${maxDate}`;

    // update view when dragging the slider
    slider.oninput = function () {
        const currentYear = Number(this.value);
        updateView(currentYear);
    }

    document.querySelector('.play-button').addEventListener('click', function () {
        if (GLOBAL_STATE.isAnimationActive === false && slider.value < slider.max) {
            // Pressing PLAY
            GLOBAL_STATE.timer = setInterval(function () {
                slider.value++;
                slider.oninput(slider.value);
                if (slider.value >= slider.max) {
                    GLOBAL_STATE.isAnimationActive = false;
                    clearInterval(GLOBAL_STATE.timer);
                    document.querySelector('.play-button').innerHTML = PLAY_ICON_HTML;
                    return;
                }
            }, REFRESH_RATE_MILLISECONDS);
            GLOBAL_STATE.isAnimationActive = true;
            this.innerHTML = PAUSE_ICON_HTML;
        } else {
            // Pressing PAUSE
            clearInterval(GLOBAL_STATE.timer);
            GLOBAL_STATE.isAnimationActive = false;
            this.innerHTML = PLAY_ICON_HTML;
        }
    });

    document.querySelector('.goto-start-button').addEventListener('click', function () {
        slider.value = slider.min;
        slider.oninput(slider.value);
    });

    document.querySelector('.goto-end-button').addEventListener('click', function () {
        slider.value = slider.max;
        slider.oninput(slider.value);
    });
}


function updateView(currentYear) {
    const yearElem = document.getElementById('year');
    yearElem.innerHTML = `Year: ${currentYear}`;

    document.querySelectorAll('.rowForLaw').forEach(row => {
        if (Number(row.dataset.year) > currentYear) {
            row.style.color = "gray";
        } else {
            row.style.color = "black";
        }
    });

    document.querySelectorAll('.cluster_atlanticCount, .cluster_indianCount').forEach(elem => {
        const count = JSON.parse(elem.dataset.years).filter(yr => yr <= currentYear).length;
        const total = Number(elem.dataset.finalLawCount);
        elem.innerHTML = dots(count, total);
    });
}

// Modal setup
document.getElementById('modal-link').addEventListener('click', (_e) => {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
});

const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".close-button");
modalCloseButton.addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});
document.addEventListener('keydown', function (event) {
    if (modal.classList.contains("show-modal") && event.code == "Escape") {
        modal.classList.toggle("show-modal");
    }
});