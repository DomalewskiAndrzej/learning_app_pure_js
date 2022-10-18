import { Storage } from "../storage/storage";
import { Item } from "../shared/utils/interfaces/item.interface";
import { ObserveItemChanges } from "../shared/observe-item-changes/observe-item-changes";
import { ObserveArrayChangesNames } from "../shared/utils/enums/observe-array-changes-names.enum";
import { SectionNames } from "../shared/utils/enums/section-names.enum";
import { v4 as uuidv4 } from "uuid";

const storage = new Storage();
const observeItemChanges = new ObserveItemChanges();

export class ItemModel {
  private readonly _items: Item[] = [];
  private _itemsProxy: Item[] = new Proxy(
    this._items,
    observeItemChanges.onArrayChange(this.changeDetectionFunction)
  );

  constructor(private changeDetectionFunction: Function) {
    this.setDataFromStorage();
  }

  public getItems(): Item[] {
    return this._itemsProxy[ObserveArrayChangesNames.get];
  }

  public getItemsLength(): number {
    return this._itemsProxy[ObserveArrayChangesNames.getLength];
  }

  public addManyItems(items: Item[]) {
    items.forEach((item) => this.addItem(item));
  }

  public addItem(item: Item) {
    this._itemsProxy.push(item);
  }

  public addNewItem() {
    this.addItem(this.generateNewItem());
  }

  public updateOneItem(uuid: string, description: string) {
    const itemToUpdate: Item = this._itemsProxy.find(
      (item) => item?.uuid === uuid
    );
    if (!itemToUpdate) return;

    this._itemsProxy[this._itemsProxy.indexOf(itemToUpdate)] = {
      ...itemToUpdate,
      description,
      state: "update",
    };
  }

  public deleteOneItem(id: string) {
    const elementToDelete = this._itemsProxy.find((item) => item?.uuid === id);
    if (!elementToDelete) return;

    this._itemsProxy.splice(
      this.getItems().indexOf(elementToDelete),
      1,
      elementToDelete
    );
  }

  private setDataFromStorage() {
    const data: Item[] = storage.getItemsFromStorage();
    if (data?.length) {
      this.addManyItems(
        data.sort((a: Item, b: Item) =>
          a?.id.toString().localeCompare(b?.id.toString())
        )
      );
    }
  }

  private generateNewItem(): Item {
    return {
      uuid: uuidv4(),
      id: this.getItemsLength() + 1,
      description: "",
      section: SectionNames.new,
    };
  }
}
