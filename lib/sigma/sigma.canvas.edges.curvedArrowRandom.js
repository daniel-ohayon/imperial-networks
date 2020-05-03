function mulberry32(a) {
  // a seeded RNG (as Javascript doesn't have a built-in one). See:
  // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/47593316#47593316
  return function () {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function xfnv1a(str) {
  // a seed hasher for the RNG
  for (var i = 0, h = 2166136261 >>> 0; i < str.length; i++)
    h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return function () {
    h += h << 13; h ^= h >>> 7;
    h += h << 3; h ^= h >>> 17;
    return (h += h << 5) >>> 0;
  }
}


getRandomQuadraticControlPoint = function (seed, x1, y1, x2, y2) {
  numericSeed = xfnv1a(seed)();
  seededRNG = mulberry32(numericSeed);
  p = seededRNG() + 0.5;
  sgn = seededRNG() > 0.5 ? 1 : -1;

  return {
    x: (x1 + x2) / 2 + p * (y2 - y1) / 4,
    y: (y1 + y2) / 2 + p * sgn * (x1 - x2) / 4
  };
};

(function () {
  'use strict';

  sigma.utils.pkg('sigma.canvas.edges');

  /**
   * This edge renderer will display edges as curves with arrow heading.
   * This is a fork of sigma.canvas.edges.curvedArrow.js
   * which introduces seeded randomness in the Bezier curve control point
   * so that multiple arrows with the same source and target can be distinguishable.
   *
   * @param  {object}                   edge         The edge object.
   * @param  {object}                   source node  The edge source node.
   * @param  {object}                   target node  The edge target node.
   * @param  {CanvasRenderingContext2D} context      The canvas context.
   * @param  {configurable}             settings     The settings function.
   */
  sigma.canvas.edges.curvedArrowRandom =
    function (edge, source, target, context, settings) {
      var color = edge.color,
        prefix = settings('prefix') || '',
        edgeColor = settings('edgeColor'),
        defaultNodeColor = settings('defaultNodeColor'),
        defaultEdgeColor = settings('defaultEdgeColor'),
        cp = {},
        size = edge[prefix + 'size'] || 1,
        tSize = target[prefix + 'size'],
        sX = source[prefix + 'x'],
        sY = source[prefix + 'y'],
        tX = target[prefix + 'x'],
        tY = target[prefix + 'y'],
        aSize = settings('hideArrows') ? 0 : Math.max(size * 2.5, settings('minArrowSize')),
        d,
        aX,
        aY,
        vX,
        vY;



      cp = (source.id === target.id) ?
        sigma.utils.getSelfLoopControlPoints(sX, sY, tSize) :
        getRandomQuadraticControlPoint(edge.id, sX, sY, tX, tY);

      if (source.id === target.id) {
        d = Math.sqrt(Math.pow(tX - cp.x1, 2) + Math.pow(tY - cp.y1, 2));
        aX = cp.x1 + (tX - cp.x1) * (d - aSize - tSize) / d;
        aY = cp.y1 + (tY - cp.y1) * (d - aSize - tSize) / d;
        vX = (tX - cp.x1) * aSize / d;
        vY = (tY - cp.y1) * aSize / d;
      }
      else {
        d = Math.sqrt(Math.pow(tX - cp.x, 2) + Math.pow(tY - cp.y, 2));
        aX = cp.x + (tX - cp.x) * (d - aSize - tSize) / d;
        aY = cp.y + (tY - cp.y) * (d - aSize - tSize) / d;
        vX = (tX - cp.x) * aSize / d;
        vY = (tY - cp.y) * aSize / d;
      }

      if (!color)
        switch (edgeColor) {
          case 'source':
            color = source.color || defaultNodeColor;
            break;
          case 'target':
            color = target.color || defaultNodeColor;
            break;
          default:
            color = defaultEdgeColor;
            break;
        }

      context.strokeStyle = color;
      context.lineWidth = size;
      if (edge.dottedLine === true) {
        context.setLineDash([8, 3]);
      } else {
        context.setLineDash([]);
      }
      context.beginPath();
      context.moveTo(sX, sY);
      if (source.id === target.id) {
        context.bezierCurveTo(cp.x2, cp.y2, cp.x1, cp.y1, aX, aY);
      } else {
        context.quadraticCurveTo(cp.x, cp.y, aX, aY);
      }
      context.stroke();

      context.fillStyle = color;
      context.beginPath();
      context.moveTo(aX + vX, aY + vY);
      context.lineTo(aX + vY * 0.6, aY - vX * 0.6);
      context.lineTo(aX - vY * 0.6, aY + vX * 0.6);
      context.lineTo(aX + vX, aY + vY);
      context.closePath();
      context.fill();

    };
})();
