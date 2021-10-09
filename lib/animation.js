function addHistogram(options) {
    const nameToDate = new Map();
    for (link of options.links) {
        nameToDate.set(link.name, link.to_date);
    }
    const dates = Array.from(nameToDate.values());

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 40 },
        width = 400 - margin.left - margin.right,
        height = 150 - margin.top - margin.bottom;

    var svg = d3.select("#dates-histogram")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear()
        .domain([1660, Math.max(...dates)])
        .range([0, width]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        // "d" = decimal format (to prevent comma separator between thousands)
        .call(d3.axisBottom(x).ticks(5, "d"));

    // set the parameters for the histogram
    var histogram = d3.histogram()
        // .value(function (d) { return d.price; })
        .domain(x.domain())
        .thresholds(x.ticks(30));

    // And apply this function to data to get the bins
    var bins = histogram(dates);

    var y = d3.scaleLinear()
        .range([height, 0]);
    y.domain([0, d3.max(bins, function (d) { return d.length; })]);
    svg.append("g")
        .call(d3.axisLeft(y).ticks(3));

    // append the bar rectangles to the svg element
    svg.selectAll("rect")
        .data(bins)
        .enter()
        .append("rect")
        .attr("x", 1)
        .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
        .attr("height", function (d) { return height - y(d.length); })
        .style("fill", "#69b3a2");

    // add a line indicating the current year
    svg
        .append("line")
        .attr("id", "histogram-current-year-indicator")
        .attr("x1", x(1660))
        .attr("x2", x(1660))
        .attr("y1", y(0))
        .attr("y2", y(25))
        .attr("stroke", "red");

    // return the x-axis range function so we can use it to
    // map a year to an x coordinate later on when updating the year.
    return x;
}

function updateHistogram(xVal) {
    d3.select("#histogram-current-year-indicator")
        .attr("x1", Math.max(xVal, 0))
        .attr("x2", Math.max(xVal, 0));
}

function updateWarLabel(year) {
    const warLabel = document.getElementById('seven-years-war-label');
    if (warLabel) {
        warLabel.style.visibility = year >= 1756 && year <= 1763 ? "visible" : "hidden";
    }
}

function addAnimation(options, state) {
    const REFRESH_RATE_MILLISECONDS = 150;

    const startDate = options.links.reduce(
        function (currentMin, link) {
            return Math.min(currentMin, link.to_date);
        }, 2000
    );

    const endDate = options.links.reduce(
        function (currentMin, link) {
            return Math.max(currentMin, link.to_date);
        }, -1
    );

    state.currentDate = startDate - 1;

    // set year in HTML
    document.getElementById('year').innerHTML = state.currentDate.toString();

    // initialize slider
    const slider = document.getElementById('time-slider');
    slider.min = state.currentDate;
    slider.value = state.currentDate;
    slider.max = endDate;

    function refreshGraph() {
        state.currentDate++;

        if (state.currentDate > endDate) {
            state.isAnimationActive = false;
            clearInterval(state.timer);
            document.querySelector('.play-button').innerHTML = '<i class="material-icons">play</i>';
            return;
        }

        document.getElementById('year').innerHTML = state.currentDate.toString();
        slider.value++;
        slider.oninput(slider.value);
    }

    var xMap = null;
    if (options.use_histogram) {
        xMap = addHistogram(options);
    }

    slider.oninput = function () {
        const year = Number(this.value);
        state.currentDate = year;
        document.getElementById('year').innerHTML = year.toString();
        updateGraphForYear(options, state);
        if (options.use_histogram) {
            updateHistogram(xMap(year));
        }
        updateWarLabel(year);
    }


    document.querySelector('.play-button').addEventListener('click', function () {
        if (state.isAnimationActive === false && slider.value < slider.max) {
            state.timer = setInterval(refreshGraph, REFRESH_RATE_MILLISECONDS);
            state.isAnimationActive = true;
            this.innerHTML = '<i class="material-icons">pause</i>';
        } else {
            clearInterval(state.timer);
            state.isAnimationActive = false;
            this.innerHTML = '<i class="material-icons">play_arrow</i>';
        }
    });

    document.querySelector('.goto-start-button').addEventListener('click', function () {
        slider.value = slider.min;
        state.currentDate = slider.min;
        slider.oninput(slider.value);
    });

    document.querySelector('.goto-end-button').addEventListener('click', function () {
        if (state.isAnimationActive) {
            document.querySelector('.play-button').click();
        }
        slider.value = slider.max;
        state.currentDate = slider.max;
        slider.oninput(slider.value);
    });

    // update slider to default year if provided
    if (options.default_year) {
        state.currentDate = options.default_year;
        slider.value = options.default_year;
        slider.oninput(options.default_year);
    }


}