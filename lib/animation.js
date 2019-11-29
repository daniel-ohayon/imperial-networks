if (USE_ANIMATION) {
    const START_DATE = LINKS.reduce(
        function (currentMin, link) {
            return Math.min(currentMin, link.to_date);
        }, 2000
    );

    const END_DATE = LINKS.reduce(
        function (currentMin, link) {
            return Math.max(currentMin, link.to_date);
        }, -1
    );

    state.currentDate = START_DATE - 1;

    const REFRESH_RATE_MILLISECONDS = 150;

    // set year in HTML
    document.getElementById('year').innerHTML = state.currentDate.toString();

    // initialize slider
    const slider = document.getElementById('time-slider');
    slider.min = state.currentDate;
    slider.value = state.currentDate;
    slider.max = END_DATE;

    function refreshGraph() {
        state.currentDate++;

        if (state.currentDate > END_DATE) {
            clearInterval(state.timer);
            document.querySelector('.play-button').innerHTML = "Start";
            return;
        }

        document.getElementById('year').innerHTML = state.currentDate.toString();
        slider.value++;
        LINKS.forEach((link, index) => {
            if (link.to_date != state.currentDate) {
                return;
            }
            state.sigmaInstance.graph.addEdge(makeEdgeFromLink(link, index));
        });
        state.sigmaInstance.refresh();
    }

    slider.oninput = function () {
        const year = Number(this.value);
        state.currentDate = year;
        document.getElementById('year').innerHTML = year.toString();
        updateGraphForYear(state.currentDate, state.sigmaInstance);
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