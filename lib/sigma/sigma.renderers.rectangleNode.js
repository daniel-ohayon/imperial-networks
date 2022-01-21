// Custom plugin


sigma.utils.pkg('sigma.canvas.nodes');

function getNodeGeometry(context, node, prefix) {
    const textInfo = context.measureText(node.label); // sweet!
    const xRect = node[prefix + 'x'] + 4;
    const yRect = node[prefix + 'y'] - 10;
    const width = textInfo.width + 10;
    const height = textInfo.fontBoundingBoxAscent + 10;
    return {
        topLeftCorner: {
            x: xRect,
            y: yRect
        },
        width,
        height,
        midpointLeft: {
            x: xRect,
            y: yRect + height / 2
        },
        midpointRight: {
            x: xRect + width,
            y: yRect + height / 2
        }
    }
}

sigma.canvas.nodes.rectangle = function(node, context, settings) {
    geo = getNodeGeometry(context, node, settings('prefix') || '');
    context.fillStyle = node.color || 'white';
    context.fillRect(geo.topLeftCorner.x, geo.topLeftCorner.y, geo.width, geo.height);

    // used by the event dispatcher to determine if the mouse is inside the rectangle
    node.geometry = geo;
}