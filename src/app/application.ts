import { BaseContent } from "./base-content/base-content";
import { ItemManagement } from "./item/item-management";
import { IDS } from "./utils/const/ids.const";

export class Application {
  constructor(
    private itemManagement: ItemManagement,
    private baseContent: BaseContent
  ) {
    this.addDefaultListeners();
  }

  addDefaultListeners(): void {
    const button = document.querySelector(IDS.itemAddButton);
    if (button) {
      button.addEventListener("click", () => this.itemManagement.addItem());
    }
  }
}
