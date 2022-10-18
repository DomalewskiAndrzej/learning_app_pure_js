import { Item } from "../utils/interfaces/item.interface";

export class Storage {
  updateStorage(data: Item[], storageName: string) {
    localStorage.setItem(storageName, JSON.stringify(data));
  }

  getDataFromStorage(storageName: string) {
    return JSON.parse(localStorage.getItem(storageName)!);
  }
}
