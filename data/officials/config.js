const OFFICIALS_CONFIG = {
    links: OFFICIALS_LINKS,
    use_anmiation: false,
    use_simplified_edges: true,
    arrow_scaling_factor: 3,
    edge_size: 0.5,
    arrow_head_size: 5,
    tag_to_color: {
        officials: {
            label: 'Officials',
            color: '#009292'
        },
        military: {
            label: 'Military',
            color: '#db6d00'
        },
        other: {
            label: 'Other',
            color: '#490092'
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