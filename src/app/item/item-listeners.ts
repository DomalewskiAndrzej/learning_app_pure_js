import { ITEM_BUTTON_NAMES } from "../shared/utils/enums/item-button-names.enum";
import { DOM_PATTERNS } from "../shared/utils/const/dom-patterns.const";
import { ElementId } from "../shared/utils/enums/element-id.enum";

export class ItemListeners {
  public static addNewItemButton(button: HTMLElement, addItemFn: Function) {
    button.addEventListener("click", () => addItemFn());
  }

  public static itemActionButton(
    element: HTMLElement,
    deleteFunction: Function,
    updateFunction: Function,
    itemList: HTMLElement
  ) {
    element?.addEventListener("click", () => {
      const uuid: string = itemList.attributes["id"].value;
      if (element.innerText === ITEM_BUTTON_NAMES.save) {
        const inputValue =
          itemList.children[ElementId.itemInputDescription].value;
        updateFunction(uuid, inputValue);
        return;
      }
      deleteFunction(uuid);
    });
  }

  public static itemModeButton(element: HTMLElement, itemList: HTMLElement) {
    if (!element?.innerText) return;
    element.addEventListener("click", () => {
      const itemDescription = element.parentNode.previousSibling as HTMLElement;
      if (element.innerText === ITEM_BUTTON_NAMES.editMode) {
        ItemListeners.changeHtmlStructureToEditMode(itemDescription, itemList);
        ItemListeners.changeButtonNamesToEditMode(element);
        return;
      }
      ItemListeners.changeHtmlStructureToReadMode(itemDescription, itemList);
      ItemListeners.changeButtonNamesToReadMode(element);
    });
  }

  private static changeHtmlStructureToEditMode(
    itemDescription: HTMLElement,
    itemList: HTMLElement
  ): void {
    const itemButtons = itemDescription?.previousSibling;
    itemList.removeChild(itemButtons);
    itemList.removeChild(itemDescription);
    itemList.insertAdjacentHTML(
      "afterbegin",
      DOM_PATTERNS.inputDescriptionPattern(itemDescription.innerText)
    );
  }

  private static changeButtonNamesToEditMode(element: HTMLElement) {
    element.innerText = ITEM_BUTTON_NAMES.readMode;
    (element.nextElementSibling as HTMLElement).innerText =
      ITEM_BUTTON_NAMES.save;
  }

  private static changeHtmlStructureToReadMode(
    itemDescription: HTMLElement,
    itemList: HTMLElement
  ): void {
    itemList.insertAdjacentHTML(
      "afterbegin",
      DOM_PATTERNS.itemDescription("inputValue", 1)
    );
    itemList.removeChild(itemDescription);
  }

  private static changeButtonNamesToReadMode(element: HTMLElement) {
    element.innerText = ITEM_BUTTON_NAMES.editMode;
    (element.nextElementSibling as HTMLElement).innerText =
      ITEM_BUTTON_NAMES.delete;
  }
}
