import { Item } from "../shared/utils/interfaces/item.interface";
import { StorageNames } from "../shared/utils/enums/storage-names.enum";

export class Storage {
  upsertItemStorage(items: Item[]): void {
    this.upsertStorage(items, StorageNames.items);
  }

  getItemsFromStorage(): Item[] {
    return this.getDataFromStorage(StorageNames.items) as Item[];
  }

  private upsertStorage(data: unknown, storageName: string) {
    localStorage.setItem(storageName, JSON.stringify(data));
  }

  private getDataFromStorage(storageName: string): unknown | unknown[] {
    return JSON.parse(localStorage.getItem(storageName));
  }
}
