export class ObserveDOM {
  static observe = (() => {
    const mutationObserver = window.MutationObserver;

    return (element: HTMLElement, callback: MutationCallback) => {
      if (!element || element.nodeType !== 1) return;

      if (mutationObserver) {
        // define a new observer
        const mutationObserver = new MutationObserver(callback);

        // have the observer observe obj for changes in children
        mutationObserver.observe(element, { childList: true, subtree: true });
        return mutationObserver;
      }
    };
  })();
}
