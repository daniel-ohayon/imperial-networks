const LAWS_CONFIG = {
    links: LAWS_LINKS,
    use_animation: true,
    use_simplified_edges: false,
    edge_size: 2,
    arrow_head_size: 10,
    tag_to_color: {
        Religion: {
            label: 'Culture and Religion',
            color: '#1b9e77'
        },
        Intermarriage: {
            label: 'Intermarriage',
            color: '#d95f02'
        },
        'Free People of Color': {
            label: 'Free People of Color',
            color: '#7570b3'
        },
    },
    makeModalContent: makeModalContent
};

function getLinkForEdge(links, edgeId) {
    const filtered = links.filter((_, index) => edgeId === `e${index}`);
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

function makeModalContent(node, sigmaInstance, links) {
    var output = '';
    const fromLinks = [];
    const toLinks = [];
    sigmaInstance.graph.edges().forEach(edge => {
        if (edge.source == node.id) {
            fromLinks.push(getLinkForEdge(links, edge.id));
        }
        if (edge.target == node.id) {
            toLinks.push(getLinkForEdge(links, edge.id));
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