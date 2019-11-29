const OFFICIALS_CONFIG = {
    links: OFFICIALS_LINKS,
    use_anmiation: false,
    use_simplified_edges: false,
    simplified_edges: OFFICIALS_SIMPLIFIED_EDGES,
    edge_size: 0.5,
    arrow_head_size: 5,
    tag_to_color: OFFICIALS_TAGS_TO_COLORS,
    makeModalContent: function (node, sigmaInstance, links) {
        let output = '';
        links.filter(e => e.from == node.id || e.to == node.id)
            .sort()
            .forEach(e => {
                output += `<li>${e.bio}</li>`;
            });
        return `<ul>${output}</ul>`;
    }
};