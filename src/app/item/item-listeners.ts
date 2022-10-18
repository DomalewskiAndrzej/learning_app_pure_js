import {ITEM_BUTTON_NAMES} from "../utils/enums/item-button-names.enum";

export class ItemListeners {
    static itemDeleteButton(element: HTMLElement, deleteFunction: Function, itemList: HTMLElement) {
        element?.addEventListener("click", () => {
            if (element.innerText === ITEM_BUTTON_NAMES.save) {
                return;
            }
            const id = +itemList.attributes["id"].value;
            deleteFunction(id);
        });
    }

    static itemModeButton(element: HTMLElement) {
        if (!element?.innerText) return;
        element.addEventListener("click", () => {
            if (element.innerText === ITEM_BUTTON_NAMES.editMode) {
                element.innerText = ITEM_BUTTON_NAMES.readMode;
                (element.nextElementSibling as HTMLElement).innerText = ITEM_BUTTON_NAMES.save;
                const itemDescriptionElement = (element.parentNode as HTMLElement).previousSibling;
                // removeChild();
                return;
            }
            element.innerText = ITEM_BUTTON_NAMES.editMode;
            (element.nextElementSibling as HTMLElement).innerText = ITEM_BUTTON_NAMES.delete;
        });
    }
}
