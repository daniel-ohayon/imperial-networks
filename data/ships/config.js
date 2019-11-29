const SHIPS_CONFIG = {
    links: SHIPS_LINKS,
    use_animation: true,
    use_simplified_edges: false,
    edge_size: 0.2,
    arrow_head_size: 5,
    tag_to_color: {},
    makeModalContent: function (node, sigmaInstance, links) {
        let output = '';
        links.filter(e => e.from == node.id || e.to == node.id)
            .sort()
            .forEach(link => {
                output += `<li>${link.preview}</li>`;
            });
        return `<ul>${output}</ul>`;
    }
};