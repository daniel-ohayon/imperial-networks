const DEBUG_MODE = false;

const urlParams = new URLSearchParams(window.location.search);
const __DEBUG_SHOW_CONTROL_POINTS = urlParams.get('trace') == '1';

const canvas = document.getElementById('map-canvas');
const slider = document.getElementById("animation-speed-slider");
const sliderLabel = document.getElementById("animation-speed-slider-label");
const ctx = canvas.getContext('2d');
const IMG_HEIGHT = 577;
const IMG_WIDTH = 1041;
const MIN_YEAR = 1713;
const MAX_YEAR = 1791;
const PALETTE = ['black', '#C03221', '#285345', '#28112b', '#5d2e46'];
const REFRESH_RATE_MS = 50;
let monthsPerSeconds = slider.value;
sliderLabel.innerHTML = `${slider.value} months/second`;
let currentTime = 1719;

const shipSprite = new Image();
shipSprite.src = '../style/ship-sprite.png';

// Randomness setup
function seededRand(a) {
    return function() {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}
const getRand = seededRand(150);
// assign a fixed perturbation to each ship so they don't fully cover each other
const PERTURBATIONS = [...Array(SHIP_JOURNEYS.length).keys()].map(
    i => ({
        dx: 50 * (getRand() - 0.5),
        dy: 50 * (getRand() - 0.5),
    }));

const TRACE_COLORS = {};
for (key in CONTROL_POINTS) {
    TRACE_COLORS[key] = '#' + (getRand() * 0xFFFFFF << 0).toString(16);
}

// Functions
function drawPlaceAt(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#c00000";
    ctx.fill();
    ctx.closePath();
}

function drawPointAt(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawShipAt(x, y, shipId) {
    ctx.font = "10px Times";
    ctx.fillStyle = "black";
    // ctx.fillText(shipId, x, y)
    ctx.drawImage(shipSprite, x, y);
    // ctx.beginPath();
    // ctx.arc(x, y, 8, 0, Math.PI * 2);
    // ctx.fillStyle = PALETTE[shipId % PALETTE.length];
    // ctx.fill();
    // ctx.closePath();
}

function drawAllPlaces() {
    for (const place of PLACES) {
        drawPlaceAt(IMG_WIDTH / 2 + place.x, IMG_HEIGHT / 2 + place.y);
    }
}

function drawControlPoints() {
    for (key in CONTROL_POINTS) {
        const points = CONTROL_POINTS[key];
        for (point of points) {
            drawPointAt(point.x, point.y, TRACE_COLORS[key]);
        }
    }
}

// returns the index of the starting point of the leg of the curve that the ship is on
function findStartingPointIndex(points, progress) {
    for (let i = 0; i < points.length - 1; i++) {
        if (progress >= points[i].progress && progress <= points[i + 1].progress) {
            return i;
        }
    }
}



function drawShipAlongPath(points, progress, shipId) {
    const i = findStartingPointIndex(points, progress);
    if (i == null) {
        return;
    }
    const p0 = points[i]; // start point of the leg
    const p1 = points[i + 1]; // end point of the leg
    const t = (progress - p0.progress) / (p1.progress - p0.progress);
    const resX = p0.x + t * (p1.x - p0.x) + PERTURBATIONS[shipId].dx;
    const resY = p0.y + t * (p1.y - p0.y) + PERTURBATIONS[shipId].dy;
    drawShipAt(resX, resY, shipId);
}

function drawAllShips() {
    for (let i = 0; i < SHIP_JOURNEYS.length; i++) {
        const journey = SHIP_JOURNEYS[i];
        if (journey.from_date <= currentTime && currentTime <= journey.to_date) {
            const points = CONTROL_POINTS[`${journey.from}:${journey.to}`]
            const progress = (currentTime - journey.from_date) / (journey.to_date - journey.from_date);
            drawShipAlongPath(points, progress, i);
        }
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "50px Times black bold";
    ctx.fillText(Math.round(currentTime), canvas.width / 2 - 50, 60);
    drawAllPlaces();
    drawAllShips();
    if (__DEBUG_SHOW_CONTROL_POINTS) {
        drawControlPoints();
    }
    const dt = monthsPerSeconds * REFRESH_RATE_MS / (1000 * 12);
    currentTime += dt;
    if (currentTime >= 1791) {
        clearInterval(timer);
    }
}

shipSprite.addEventListener('load', function() {
    const timer = setInterval(draw, REFRESH_RATE_MS);
})


slider.oninput = function() {
    monthsPerSeconds = this.value;
    sliderLabel.innerHTML = `${this.value} months/second`;
}


// For debugging:
if (DEBUG_MODE === true) {
    drawAllPlaces();
    // ctx.font = "16px Arial";
    let points = [];
    let done = false;

    canvas.addEventListener("mousemove", function(e) {
        // show canvas coordinates of mouse pointer
        var cRect = canvas.getBoundingClientRect();
        var canvasX = Math.round(e.clientX - cRect.left);
        var canvasY = Math.round(e.clientY - cRect.top);
        ctx.clearRect(0, 0, 150, 50);
        ctx.fillText("X: " + canvasX + ", Y: " + canvasY, 10, 20);
    });

    canvas.addEventListener("click", function(e) {
        var cRect = canvas.getBoundingClientRect();
        var canvasX = Math.round(e.clientX - cRect.left);
        var canvasY = Math.round(e.clientY - cRect.top);
        points.push({ x: canvasX, y: canvasY });
        if (done) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAllPlaces();
            done = false;
        }
        drawShipAt(canvasX, canvasY);
    })

    document.addEventListener('keydown', function(e) {
        console.log(points);
        if (points.length == 0) {
            return;
        }
        ctx.moveTo(points[0].x, points[0].y);
        // from https://stackoverflow.com/questions/7054272/how-to-draw-smooth-curve-through-n-points-using-javascript-html5-canvas
        for (i = 1; i < points.length - 2; i++) {
            var xc = (points[i].x + points[i + 1].x) / 2;
            var yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        // curve through the last two points
        ctx.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
        ctx.stroke();
        navigator.clipboard.writeText(JSON.stringify(points));
        done = true;
        points = [];
    })
}