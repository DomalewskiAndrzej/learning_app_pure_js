import { APP_CONFIG } from "../utils/const/app-config.const";
import { ObserveDOM } from "../observe-dom/observe-dom";
import { ItemListeners } from "./item-listeners";
import { ItemModel } from "./item-model";
import { IDS } from "../utils/const/ids.const";
import { ItemDomRender } from "./item-dom-render";
import { Item } from "../utils/interfaces/item.interface";
import { SectionNames } from "../utils/enums/section-names.enum";
import { ItemModelFunctionNames } from "../utils/enums/item-model-function-names.enum";

export class ItemManagement {
  constructor(private itemModel: ItemModel) {
    this.manageItemListeners();
    itemModel.initItemModel(this.onChange);
  }

  addItem(): void {
    const id = this.itemModel.getItemsLength() + 1;
    const newItem: Item = { id, description: "", section: SectionNames.new };
    this.itemModel.addOne(newItem);
  }

  deleteItem(id: number) {
    this.itemModel.delete(id);
  }

  manageItemListeners(): void {
    ObserveDOM.observe(
      document.querySelector(`#${APP_CONFIG.sectionNames.new}`)!,
      (observer) => {
        observer.forEach((item) => {
          item.addedNodes.forEach((node) => {
            const itemDeleteButton = (node as HTMLElement)?.children?.[
              IDS.itemButtons
            ].children[IDS.itemDeleteButton];
            const itemModeButton = (node as HTMLElement)?.children?.[
              IDS.itemButtons
            ].children[IDS.itemModeButton];

            ItemListeners.itemDeleteButton(
              itemDeleteButton,
              this.deleteItem.bind(this),
              node as HTMLElement
            );

            ItemListeners.itemModeButton(itemModeButton);
          });
        });
      }
    );
  }

  onChange(
    name: keyof typeof ItemModelFunctionNames,
    changedData: number | Item | Item[]
  ) {
    if (name === ItemModelFunctionNames.addOne) {
      // ItemDomRender.renderItem(changedData);
      return;
    }
    if (name === ItemModelFunctionNames.addMany) {
      if (changedData.constructor === Array) {
        changedData.forEach((item) => {
          ItemDomRender.renderItem(item);
        });
      }
      return;
    }
    if (name === ItemModelFunctionNames.delete) {
      if (typeof changedData === "number")
        ItemDomRender.deleteItem(changedData);
      return;
    }
    // ItemDomRender.updateItem(changedData);
  }
}
