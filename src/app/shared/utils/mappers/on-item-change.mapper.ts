import { ItemModelActions } from "../enums/item-model-actions.enum";
import { ItemDomRender } from "../../../item/item-dom-render";
import { Item } from "../interfaces/item.interface";

export const ON_ITEM_CHANGE = {
  [ItemModelActions.addOneItem]: (item: Item) => ItemDomRender.renderItem(item),
  [ItemModelActions.deleteOneItem]: (id: string) =>
    ItemDomRender.deleteItem(id),
  [ItemModelActions.updateOneItem]: (item: Item) =>
    ItemDomRender.updateItem(item),
};
