const OFFICIALS_CONFIG = {
    links: OFFICIALS_LINKS,
    use_anmiation: false,
    use_simplified_edges: false,
    arrow_scaling_factor: 1.2,
    edge_size: 0.5,
    arrow_head_size: 5,
    undirected: true,
    skip_france: true,
    use_tags: true,
    hidden_locations: ['France', 'Madagascar'],
    tag_to_color: {
        before_1763: {
            label: 'Before 1763',
            color: '#610b0b'
        },
        after_1763: {
            label: 'After 1763',
            color: '#d6c5c5'
        },
    },
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