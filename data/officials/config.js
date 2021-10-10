const OFFICIALS_CONFIG = {
    links: OFFICIALS_LINKS,
    use_animation: true,
    use_simplified_edges: false,
    use_search: true,
    use_histogram: true,
    default_year: 1763,
    arrow_scaling_factor: 1.2,
    edge_size: 1,
    arrow_head_size: 10,
    undirected: true,  // but in single-agent view, we show arrows
    skip_france: true,
    hidden_locations: ['France'],
    use_tags: true,
    tag_to_color: {
        Official: {
            label: 'Officials',
            color: '#009292'
        },
        Military: {
            label: 'Military',
            color: '#db6d00'
        },
        Other: {
            label: 'Other',
            color: '#490092'
        },
    },
    makeModalContent: function (node, sigmaInstance, links) {
        let output = '';
        links.filter(e => e.from == node.id || e.to == node.id)
            .sort()
            .forEach(e => {
                output += `<li>${e.annotated_bio}</li>`;
            });
        return `<ul>${output}</ul>`;
    }
};