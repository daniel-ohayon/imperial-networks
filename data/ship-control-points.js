let CONTROL_POINTS = {
    'Caribbean:France': [{ "x": 290, "y": 309 }, { "x": 335, "y": 297 }, { "x": 410, "y": 261 }, { "x": 499, "y": 197 }, { "x": 557, "y": 160 }, { "x": 594, "y": 158 }],
    'Caribbean:Guyana': [{ "x": 293, "y": 312 }, { "x": 332, "y": 328 }, { "x": 371, "y": 383 }],
    'Caribbean:India': [{ "x": 294, "y": 311 }, { "x": 363, "y": 332 }, { "x": 419, "y": 364 }, { "x": 497, "y": 399 }, { "x": 589, "y": 472 }, { "x": 637, "y": 526 }, { "x": 690, "y": 568 }, { "x": 754, "y": 568 }, { "x": 818, "y": 559 }, { "x": 860, "y": 533 }, { "x": 881, "y": 482 }, { "x": 902, "y": 410 }, { "x": 939, "y": 341 }],
    'Caribbean:Isle Bourbon & Isle of France': [{ "x": 295, "y": 311 }, { "x": 320, "y": 313 }, { "x": 363, "y": 320 }, { "x": 429, "y": 338 }, { "x": 493, "y": 379 }, { "x": 566, "y": 422 }, { "x": 597, "y": 480 }, { "x": 636, "y": 545 }, { "x": 681, "y": 576 }, { "x": 732, "y": 573 }, { "x": 783, "y": 552 }, { "x": 818, "y": 529 }, { "x": 838, "y": 512 }],
    'Caribbean:Louisiana': [{ "x": 291, "y": 310 }, { "x": 297, "y": 280 }, { "x": 286, "y": 253 }, { "x": 263, "y": 233 }],
    'Caribbean:Madagascar': [{ "x": 291, "y": 311 }, { "x": 353, "y": 321 }, { "x": 413, "y": 344 }, { "x": 490, "y": 391 }, { "x": 560, "y": 440 }, { "x": 601, "y": 511 }, { "x": 658, "y": 565 }, { "x": 712, "y": 574 }, { "x": 783, "y": 557 }, { "x": 805, "y": 510 }],
    'Caribbean:New France': [{ "x": 290, "y": 312 }, { "x": 308, "y": 286 }, { "x": 313, "y": 244 }, { "x": 305, "y": 219 }, { "x": 302, "y": 180 }],
    'Caribbean:Senegal': [{ "x": 289, "y": 310 }, { "x": 325, "y": 308 }, { "x": 368, "y": 311 }, { "x": 406, "y": 320 }, { "x": 475, "y": 334 }, { "x": 535, "y": 332 }],
    'France:Guyana': [{ "x": 595, "y": 158 }, { "x": 545, "y": 173 }, { "x": 506, "y": 218 }, { "x": 468, "y": 285 }, { "x": 431, "y": 343 }, { "x": 367, "y": 380 }],
    'France:India': [{ "x": 592, "y": 159 }, { "x": 484, "y": 246 }, { "x": 479, "y": 415 }, { "x": 538, "y": 505 }, { "x": 655, "y": 568 }, { "x": 746, "y": 568 }, { "x": 878, "y": 521 }, { "x": 912, "y": 400 }, { "x": 941, "y": 344 }],
    'France:Isle Bourbon & Isle of France': [{ "x": 594, "y": 161 }, { "x": 555, "y": 168 }, { "x": 528, "y": 199 }, { "x": 507, "y": 256 }, { "x": 508, "y": 312 }, { "x": 509, "y": 384 }, { "x": 541, "y": 433 }, { "x": 589, "y": 514 }, { "x": 640, "y": 557 }, { "x": 702, "y": 574 }, { "x": 770, "y": 563 }, { "x": 842, "y": 513 }],
    'France:Louisiana': [{ "x": 597, "y": 159 }, { "x": 529, "y": 166 }, { "x": 480, "y": 198 }, { "x": 406, "y": 226 }, { "x": 344, "y": 239 }, { "x": 265, "y": 232 }],
    'France:Madagascar': [{ "x": 596, "y": 158 }, { "x": 526, "y": 176 }, { "x": 504, "y": 240 }, { "x": 485, "y": 322 }, { "x": 499, "y": 383 }, { "x": 547, "y": 463 }, { "x": 598, "y": 516 }, { "x": 646, "y": 558 }, { "x": 703, "y": 573 }, { "x": 762, "y": 549 }, { "x": 803, "y": 503 }],
    'France:New France': [{ "x": 599, "y": 158 }, { "x": 532, "y": 166 }, { "x": 474, "y": 187 }, { "x": 390, "y": 186 }, { "x": 307, "y": 175 }],
    'France:Senegal': [{ "x": 600, "y": 163 }, { "x": 560, "y": 166 }, { "x": 533, "y": 191 }, { "x": 509, "y": 226 }, { "x": 477, "y": 298 }, { "x": 536, "y": 338 }],
    'Guyana:Senegal': [{ "x": 373, "y": 382 }, { "x": 438, "y": 363 }, { "x": 536, "y": 334 }],
    'India:Isle Bourbon & Isle of France': [{ "x": 943, "y": 334 }, { "x": 909, "y": 403 }, { "x": 870, "y": 470 }, { "x": 838, "y": 516 }],
    'India:Louisiana': [{ "x": 945, "y": 336 }, { "x": 915, "y": 382 }, { "x": 861, "y": 491 }, { "x": 811, "y": 558 }, { "x": 700, "y": 576 }, { "x": 635, "y": 556 }, { "x": 553, "y": 498 }, { "x": 470, "y": 401 }, { "x": 402, "y": 299 }, { "x": 342, "y": 251 }, { "x": 268, "y": 226 }],
    'India:Madagascar': [{ "x": 941, "y": 332 }, { "x": 891, "y": 384 }, { "x": 866, "y": 421 }, { "x": 828, "y": 474 }],
    'India:Senegal': [{ "x": 943, "y": 336 }, { "x": 923, "y": 403 }, { "x": 888, "y": 477 }, { "x": 837, "y": 544 }, { "x": 777, "y": 568 }, { "x": 716, "y": 572 }, { "x": 661, "y": 563 }, { "x": 602, "y": 507 }, { "x": 567, "y": 465 }, { "x": 529, "y": 412 }, { "x": 536, "y": 337 }],
    'Isle Bourbon & Isle of France:Louisiana': [{ "x": 843, "y": 512 }, { "x": 783, "y": 555 }, { "x": 729, "y": 573 }, { "x": 645, "y": 567 }, { "x": 570, "y": 504 }, { "x": 493, "y": 458 }, { "x": 456, "y": 373 }, { "x": 394, "y": 314 }, { "x": 327, "y": 274 }, { "x": 264, "y": 236 }],
    'Isle Bourbon & Isle of France:Madagascar': [{ "x": 845, "y": 513 }, { "x": 828, "y": 506 }, { "x": 817, "y": 506 }],
    'Isle Bourbon & Isle of France:New France': [{ "x": 841, "y": 513 }, { "x": 780, "y": 549 }, { "x": 708, "y": 571 }, { "x": 630, "y": 561 }, { "x": 592, "y": 544 }, { "x": 517, "y": 472 }, { "x": 459, "y": 400 }, { "x": 381, "y": 303 }, { "x": 294, "y": 232 }, { "x": 292, "y": 186 }],
    'Isle Bourbon & Isle of France:Senegal': [{ "x": 840, "y": 511 }, { "x": 795, "y": 552 }, { "x": 743, "y": 572 }, { "x": 681, "y": 568 }, { "x": 627, "y": 529 }, { "x": 589, "y": 468 }, { "x": 546, "y": 424 }, { "x": 516, "y": 380 }, { "x": 533, "y": 336 }],
    'Louisiana:Madagascar': [{ x: 261, y: 230 }, { x: 771, y: 791 }, { x: 820, y: 492 }],
    'Louisiana:New France': [{ "x": 259, "y": 237 }, { "x": 274, "y": 228 }, { "x": 287, "y": 214 }, { "x": 304, "y": 179 }],
    'Louisiana:Senegal': [{ "x": 259, "y": 229 }, { "x": 296, "y": 254 }, { "x": 366, "y": 287 }, { "x": 450, "y": 312 }, { "x": 535, "y": 331 }],
    'Madagascar:New France': [{ "x": 802, "y": 504 }, { "x": 760, "y": 555 }, { "x": 720, "y": 573 }, { "x": 658, "y": 565 }, { "x": 598, "y": 509 }, { "x": 542, "y": 462 }, { "x": 494, "y": 394 }, { "x": 452, "y": 305 }, { "x": 395, "y": 245 }, { "x": 346, "y": 193 }, { "x": 310, "y": 178 }],
    'Madagascar:Senegal': [{ "x": 804, "y": 513 }, { "x": 768, "y": 558 }, { "x": 726, "y": 570 }, { "x": 669, "y": 567 }, { "x": 641, "y": 516 }, { "x": 602, "y": 464 }, { "x": 568, "y": 421 }, { "x": 533, "y": 372 }, { "x": 534, "y": 335 }],
};
// add the reverse journeys
const swapped = {};
for (key in CONTROL_POINTS) {
    let elems = key.split(':');
    let path = CONTROL_POINTS[key].slice();
    path.reverse();
    swappedKey = [elems[1], elems[0]].join(':');
    swapped[swappedKey] = path;
}
CONTROL_POINTS = {...CONTROL_POINTS, ...swapped };

// add cumulative progress of each segment
// this adds an attribute `.d` to each point which is a number between 0 and 1
// indicating what % of the way has been covered so far (approximating each leg of the path by a straight line)
const withProgress = {};
let debug = {};
for (key in CONTROL_POINTS) {
    const elems = CONTROL_POINTS[key];
    let distances = [0];
    for (let i = 1; i < elems.length; i++) {
        const d = Math.sqrt((elems[i].x - elems[i - 1].x) ** 2 + (elems[i].y - elems[i - 1].y) ** 2);
        distances.push(d);
    }
    const total = distances.reduce((a, b) => a + b, 0);
    debug[key] = Math.round(total);
    let cumul = 0;
    let res = []
    for (let i = 0; i < elems.length; i++) {
        cumul += distances[i];
        res.push({ x: elems[i].x, y: elems[i].y, progress: cumul / total });
    }
    withProgress[key] = res;
}
navigator.clipboard.writeText(JSON.stringify(debug));


CONTROL_POINTS = withProgress;