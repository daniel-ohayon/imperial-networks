const OFFICIALS_CONFIG = {
    links: OFFICIALS_LINKS,
    use_anmiation: false,
    use_simplified_edges: false,
    arrow_scaling_factor: 1.2,
    edge_size: 0.8,
    arrow_head_size: 5,
    undirected: true,
    use_tags: true,
    tag_to_color: {
        before_1763: {
            label: 'before 1763',
            color: 'black'
        },
        before_1763_maybe: {
            label: 'before 1763 maybe',
            color: 'black'
        },
        after_1763: {
            label: 'after_1763',
            color: '#C5C5C5'
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