import { ItemManagement } from "./item/item-management";
import { BaseContent } from "./base-content/base-content";
import { DocumentElement } from "./shared/observe-dom/document-element";
import { ItemListeners } from "./item/item-listeners";

export class Application {
  itemManagement: ItemManagement;

  constructor() {
    new BaseContent();
    DocumentElement.getSectionNew().then((section) => {
      this.itemManagement = new ItemManagement(section);
      this.initAddNewItemButton();
    });
  }

  initAddNewItemButton() {
    DocumentElement.getAddNewItemButton().then((button) => {
      this.addClickListenerToButton(button);
    });
  }

  addClickListenerToButton(button: HTMLElement): void {
    ItemListeners.addNewItemButton(
      button,
      this.itemManagement.addNewItem.bind(this.itemManagement)
    );
  }
}
