function makeModalContent(node) {
    let output = '';

    LINKS.filter(e => e.from == node.id || e.to == node.id)
        .sort()
        .forEach(e => {
            output += `<li>${e.bio}</li>`;
        });

    return `<ul>${output}</ul>`;
}