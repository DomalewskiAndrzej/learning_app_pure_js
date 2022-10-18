export class ObserveDOM {
    static observe = (() => {
        var MutationObserver = window.MutationObserver;

        return function (element: HTMLElement, callback: MutationCallback) {
            if (!element || element.nodeType !== 1) return;

            if (MutationObserver) {
                // define a new observer
                var mutationObserver = new MutationObserver(callback)

                // have the observer observe obj for changes in children
                mutationObserver.observe(element, {childList: true, subtree: true})
                return mutationObserver
            }
        }
    })()
}