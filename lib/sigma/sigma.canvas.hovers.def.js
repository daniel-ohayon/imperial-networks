// FORKED FROM SIGMA SOURCE CODE
// Remove hover logic for node labels so that it doesn't conflict
// with customized label placement code from sigma.canvas.labels.def.js
;
(function(undefined) {
    'use strict';

    if (typeof sigma === 'undefined')
        throw 'sigma is not declared';

    // Initialize packages:
    sigma.utils.pkg('sigma.canvas.hovers');

    /**
     *
     * @param  {object}                   node     The node object.
     * @param  {CanvasRenderingContext2D} context  The canvas context.
     * @param  {configurable}             settings The settings function.
     */
    sigma.canvas.hovers.def = function(node, context, settings) {
        var x,
            y,
            w,
            h,
            e,
            fontStyle = settings('hoverFontStyle') || settings('fontStyle'),
            prefix = settings('prefix') || '',
            size = node[prefix + 'size'],
            fontSize = (settings('labelSize') === 'fixed') ?
            settings('defaultLabelSize') :
            settings('labelSizeRatio') * size;

        // Label background:
        context.font = (fontStyle ? fontStyle + ' ' : '') +
            fontSize + 'px ' + (settings('hoverFont') || settings('font'));

        context.beginPath();
        context.fillStyle = settings('labelHoverBGColor') === 'node' ?
            (node.color || settings('defaultNodeColor')) :
            settings('defaultHoverLabelBGColor');

        if (node.label && settings('labelHoverShadow')) {
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.shadowBlur = 8;
            context.shadowColor = settings('labelHoverShadowColor');
        }

        // Node border:
        // if (settings('borderSize') > 0) {
        //     context.beginPath();
        //     context.fillStyle = settings('nodeBorderColor') === 'node' ?
        //         (node.color || settings('defaultNodeColor')) :
        //         settings('defaultNodeBorderColor');
        //     context.arc(
        //         node[prefix + 'x'],
        //         node[prefix + 'y'],
        //         size + settings('borderSize'),
        //         0,
        //         Math.PI * 2,
        //         true
        //     );
        //     context.closePath();
        //     context.fill();
        // }

        // Node:
        var nodeRenderer = sigma.canvas.nodes[node.type] || sigma.canvas.nodes.def;
        nodeRenderer(node, context, settings);
    };
}).call(this);