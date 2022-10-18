import { ObserveDOM } from "../shared/observe-dom/observe-dom";
import { ItemListeners } from "./item-listeners";
import { ItemModel } from "./item-model";
import { ElementId } from "../shared/utils/enums/element-id.enum";
import { ItemModelActions } from "../shared/utils/enums/item-model-actions.enum";
import { Item } from "../shared/utils/interfaces/item.interface";
import { ON_ITEM_CHANGE } from "../shared/utils/mappers/on-item-change.mapper";
import { Storage } from "../storage/storage";

const storage = new Storage();

export class ItemManagement {
  itemModel: ItemModel;

  constructor(section: HTMLElement) {
    this.manageItemListeners(section).then(
      () => (this.itemModel = new ItemModel(this.onChange))
    );
  }

  addNewItem(): void {
    this.itemModel.addNewItem();
  }

  deleteItem(id: string) {
    this.itemModel.deleteOneItem(id);
  }

  updateItem(uuid: string, description: string) {
    this.itemModel.updateOneItem(uuid, description);
  }

  manageItemListeners(section: HTMLElement): Promise<void> {
    return new Promise<void>((resolve) => {
      ObserveDOM.observe(section, (observer) => {
        observer.forEach((item) => {
          item.addedNodes.forEach((node: HTMLElement) => {
            const itemActionButton: HTMLElement =
              node?.children?.[ElementId.itemButtons]?.children[
                ElementId.itemActionButton
              ];

            const itemModeButton: HTMLElement =
              node?.children?.[ElementId.itemButtons]?.children[
                ElementId.itemModeButton
              ];

            ItemListeners.itemActionButton(
              itemActionButton,
              this.deleteItem.bind(this),
              this.updateItem.bind(this),
              node
            );

            ItemListeners.itemModeButton(itemModeButton, node);
          });
        });
      });
      resolve();
    });
  }

  onChange(name: ItemModelActions, changedData: string | Item, items: Item[]) {
    storage.upsertItemStorage(items);
    // @ts-ignore
    ON_ITEM_CHANGE[name](changedData);
  }
}
