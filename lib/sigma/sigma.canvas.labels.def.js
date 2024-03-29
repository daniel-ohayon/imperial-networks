// FORKED FROM SIGMA SOURCE CODE:
// Add xlabel and ylabel arguments to customize placement of node labels 

;
(function(undefined) {
    'use strict';

    // Initialize packages:
    // sigma.utils.pkg('sigma.canvas.labels');

    /**
     *
     * @param  {object}                   node     The node object.
     * @param  {CanvasRenderingContext2D} context  The canvas context.
     * @param  {configurable}             settings The settings function.
     */
    sigma.canvas.labels.def = function(node, context, settings) {
        var fontSize,
            prefix = settings('prefix') || '',
            size = node[prefix + 'size'];

        if (size < settings('labelThreshold'))
            return;

        if (!node.label || typeof node.label !== 'string')
            return;

        fontSize = (settings('labelSize') === 'fixed') ?
            settings('defaultLabelSize') :
            settings('labelSizeRatio') * size;

        context.font = (settings('fontStyle') ? settings('fontStyle') + ' ' : '') +
            fontSize + 'px ' + settings('font');
        context.fillStyle = (settings('labelColor') === 'node') ?
            (node.color || settings('defaultNodeColor')) :
            settings('defaultLabelColor');

        const xDiff = node.xlabel ? node.xlabel : size + 3;
        const yDiff = node.ylabel ? node.ylabel : fontSize / 3;

        context.fillText(
            node.label,
            Math.round(node[prefix + 'x'] + xDiff),
            Math.round(node[prefix + 'y'] + yDiff)
        );
    };
}).call(this);