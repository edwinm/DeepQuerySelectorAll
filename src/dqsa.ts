/**
 @copyright 2023 Edwin Martin
 @license MIT
 */
export function deepQuerySelectorAll(query: string, element: ChildNode|Element|Document=document) {
    const result:Element[] = Array.from(
        (<Element>element).shadowRoot
        ? (<Element>element).shadowRoot.childNodes
            : element.nodeName === 'SLOT'
        ? (<HTMLSlotElement>element).assignedElements()
            :element.childNodes,
    )
        .map((e)=> deepQuerySelectorAll(query, e))
        .flat();

    if((<Element>element).matches?.(query)) {
        result.push(<Element>element)
    }

    return result;
}

