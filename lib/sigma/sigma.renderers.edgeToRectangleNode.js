// Custom plugin

sigma.utils.pkg('sigma.canvas.edges');

sigma.canvas.edges.toRectangleNode = function(edge, source, target, context, settings) {
    const prefix = settings('prefix') || '';
    const targetGeo = getNodeGeometry(context, target, prefix);
    let targetPoint;
    if (source.x > target.x) {
        // author is on the right => edge should hit the rectangle from the right
        targetPoint = targetGeo.midpointRight;
    } else {
        // author is on the left => edge should hit the rectangle from the left
        targetPoint = targetGeo.midpointLeft;
    }
    context.strokeStyle = edge.color || 'black';
    context.lineWidth = edge.size || 1;
    context.beginPath();
    context.moveTo(
        source[prefix + 'x'],
        source[prefix + 'y']
    );
    context.lineTo(
        targetPoint.x,
        targetPoint.y
    );
    context.stroke();
}