import type { options } from "./types/index.d.ts";
export function highLight(dom: HTMLElement, str: string, options: options) {
  if (!CSS.highlights) {
    throw new Error("CSS Custom Highlight API not supported.");
  }
  str = str.trim();
  const {
    isCaseSensitive = false,
    cssName = "default",
    ignoreText = [],
  } = options;
  CSS.highlights.delete(cssName);
  if (!str) {
    return;
  }
  if (!isCaseSensitive) {
    str = str.toLowerCase();
  }
  const treeWalker = document.createTreeWalker(dom, NodeFilter.SHOW_TEXT);
  const allTextNodes: Node[] = [];
  let currentNode = treeWalker.nextNode();
  while (currentNode) {
    allTextNodes.push(currentNode);
    currentNode = treeWalker.nextNode();
  }

  const ranges = allTextNodes
    .map((el) => {
      return {
        el,
        text: isCaseSensitive ? el.textContent : el.textContent!.toLowerCase(),
      };
    })
    .map(({ text, el }) => {
      if (!text) {
        return [];
      }
      const indices: number[] = [];
      let startPos = 0;
      if (!ignoreText.includes(text)) {
        while (startPos < text.length) {
          const index = text.indexOf(str, startPos);
          if (index === -1) break;
          indices.push(index);
          startPos = index + str.length;
        }
      }

      return indices.map((index) => {
        const range = new Range();
        range.setStart(el, index);
        range.setEnd(el, index + str.length);
        return range;
      });
    });
  // Create a Highlight object for the ranges.
  const searchResultsHighlight = new Highlight(...ranges.flat());
  CSS.highlights.set(cssName, searchResultsHighlight);
}
export function cancelAllHighLight() {
  CSS.highlights.clear();
}
export function cancelNameHighLight(cssName: string) {
  CSS.highlights.delete(cssName);
}
