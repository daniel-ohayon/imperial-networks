function getLinkForEdge(edgeId) {
    const filtered = LINKS.filter((_, index) => edgeId === `e${index}`);
    if (filtered.length > 0) {
        return filtered[0];
    }
    return null;
}

function linksToList(links) {
    var output = '';
    links.forEach(link => {
        output += `<li> 
      ${link.from} (${link.from_date}) → ${link.to} (${link.to_date}): ${link.preview} 
    </li>`;
    });
    return output;
}

function makeModalContent(node) {
    var output = '';
    const fromLinks = [];
    const toLinks = [];
    state.sigmaInstance.graph.edges().forEach(edge => {
        if (edge.source == node.id) {
            fromLinks.push(getLinkForEdge(edge.id));
        }
        if (edge.target == node.id) {
            toLinks.push(getLinkForEdge(edge.id));
        }
    });

    if (toLinks.length > 0) {
        output += `
    <p> Laws <b>passed</b> in ${node.label}: </p>
    <ul>
      ${linksToList(toLinks)}
    </ul>
    `;
    }

    if (fromLinks.length > 0) {
        output += `
    <p> Laws <b>originated</b> in ${node.label}: </p>
    <ul>
      ${linksToList(fromLinks)}
    </ul>
    `;
    }

    return output;
}