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
            clearInterval(state.timer);
            document.querySelector('.play-button').innerHTML = "Start";
            return;
        }

        document.getElementById('year').innerHTML = state.currentDate.toString();
        slider.value++;
        options.links.forEach((link, index) => {
            if (link.to_date != state.currentDate) {
                return;
            }
            state.sigmaInstance.graph.addEdge(makeEdgeFromLink(link, index, options));
        });
        state.sigmaInstance.refresh();
    }

    slider.oninput = function () {
        const year = Number(this.value);
        state.currentDate = year;
        document.getElementById('year').innerHTML = year.toString();
        updateGraphForYear(options, state);
    }


    document.querySelector('.play-button').addEventListener('click', function () {
        if (this.innerHTML == "Start") {
            state.timer = setInterval(refreshGraph, REFRESH_RATE_MILLISECONDS);
            this.innerHTML = "Pause";
        } else {
            clearInterval(state.timer);
            this.innerHTML = "Start";
        }
    });
}