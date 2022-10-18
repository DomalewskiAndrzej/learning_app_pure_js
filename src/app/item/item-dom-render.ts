import {DOM_PATTERNS} from "../utils/const/dom-patterns.const";
import {Item} from "../utils/interfaces/item.interface";

export class ItemDomRender {
    static renderItem(data: Item) {
        const sectionNew = document.querySelector(`#${data.section}`);
        const newElement = DOM_PATTERNS.itemPattern(data);
        sectionNew!.insertAdjacentHTML("beforeend", newElement);
    }

    static deleteItem(id: number) {
        const element = document.getElementById(String(id));
        (element!.parentNode as HTMLElement).removeChild(element as Node);
    }

    static updateItem(data: Item) {
        ItemDomRender.deleteItem(data.id);
        ItemDomRender.renderItem(data);
    }
}
