async function find() {
    const {deepQuerySelectorAll} = await import('../dist/dqsa.js');
    const elements = deepQuerySelectorAll('code');
    console.log('elements', elements)
    for (el of elements) {
        el.style.background='yellow'
    }
}