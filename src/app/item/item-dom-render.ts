import { DOM_PATTERNS } from "../shared/utils/const/dom-patterns.const";
import { Item } from "../shared/utils/interfaces/item.interface";
import { ResolveId } from "../shared/utils/functions/resolve-id.function";

export class ItemDomRender {
  static renderItem(data: Item) {
    const sectionNew: HTMLElement = document.querySelector(
      ResolveId(data.section)
    );
    const itemDescription = DOM_PATTERNS.itemDescription(
      data.description,
      data.id
    );
    const itemButtons = DOM_PATTERNS.itemButtons();
    const newElement = DOM_PATTERNS.itemPattern(
      data.uuid,
      itemDescription,
      itemButtons
    );
    if (sectionNew) {
      sectionNew.insertAdjacentHTML("beforeend", newElement);
    }
  }

  static deleteItem(id: string) {
    const element: HTMLElement = document.getElementById(id);
    if (element) {
      element.parentNode.removeChild(element as Node);
    }
  }

  static updateItem(data: Item) {
    ItemDomRender.deleteItem(data.uuid);
    ItemDomRender.renderItem(data);
  }
}
