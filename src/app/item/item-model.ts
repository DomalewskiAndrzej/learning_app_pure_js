import { Storage } from "../storage/storage";
import { Item } from "../utils/interfaces/item.interface";
import { ItemModelFunctionNames } from "../utils/enums/item-model-function-names.enum";
import { StorageNames } from "../utils/enums/storage-names.enum";

export class ItemModel {
  private _items: Item[] = [];
  private _functions: { [key: string]: Function } = {};

  constructor(private storage: Storage) {
    this.setDataFromStorage();
  }

  initItemModel(onChangeFn: Function) {
    this.initChangeDetection(onChangeFn);
  }

  getItems(): Item[] {
    return this._items;
  }

  getItemsLength(): number {
    return this._items.length;
  }

  addMany(arr: Item[]) {
    if (!arr.length) return;
    this._items = [...this._items, ...arr];
  }

  addOne(obj: Item) {
    if (!obj) return;
    this._items = [...this._items, obj];
  }

  update(obj: Item) {
    if (!obj) return;
    this._items.map((item) => (item.id === obj.id ? obj : item));
  }

  delete(id: number) {
    if (!id) return;
    this._items = this._items.filter((item) => item.id !== id);
  }

  setDataFromStorage() {
    this.addMany(this.storage.getDataFromStorage(StorageNames.data));
  }

  initChangeDetection(onChangeFn: Function) {
    Object.keys(ItemModelFunctionNames).forEach((name) => {
      this._functions[name] = ItemModel.prototype[name];
      ItemModel.prototype[name] = (value: string | Item | Item[]) => {
        if (value && !!value[0]) {
          this._functions[name].bind(this)(value);
          onChangeFn.bind(this)(name, value);
          this.storage.updateStorage(this.getItems(), StorageNames.data);
        }
      };
    });
  }
}
