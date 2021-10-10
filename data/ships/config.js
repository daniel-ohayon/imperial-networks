const SHIPS_CONFIG = {
    links: SHIPS_LINKS,
    use_animation: true,
    use_simplified_edges: false,
    arrow_scaling_factor: 20,
    edge_size: 0.2,
    arrow_head_size: 5,
    use_tags: true,
    default_year: 1791,
    tag_to_color: {
        with_metropole: {
            label: 'With metropole',
            color: '#009292'
        },
        between_colonies: {
            label: 'Between colonies',
            color: '#490092'
        },
    },
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