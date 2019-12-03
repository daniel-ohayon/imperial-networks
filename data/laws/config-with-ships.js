const LAWS_AND_SHIPS_LINKS =
    LAWS_LINKS.map(l => {
        return {
            ...l,
            size: 2
        }
    }).concat(SHIPS_LINKS.map(l => {
        return {
            ...l,
            tag: 'ship',
            size: 0.2
        }
    }));

const LAWS_AND_SHIPS_CONFIG = {
    links: LAWS_AND_SHIPS_LINKS,
    use_animation: true,
    use_simplified_edges: false,
    tag_to_color: {
        Religion: {
            label: 'Culture and Religion',
            color: '#009292'
        },
        Intermarriage: {
            label: 'Intermarriage',
            color: '#db6d00'
        },
        'Free People of Color': {
            label: 'Free People of Color',
            color: '#490092'
        },
        ship: {
            label: 'Ship',
            color: 'grey'
        },
    },
    makeModalContent: () => ''
};