import { OBSERVE_ARRAY_CHANGES_GETTER } from "../utils/mappers/observe-array-changes-getter.mapper";
import { ItemModelActions } from "../utils/enums/item-model-actions.enum";
import { Item } from "../utils/interfaces/item.interface";
import { AreEqualObjectsInArray } from "../utils/functions/are-equal-objects-in-array.function";
import { IsUuidInArray } from "../utils/functions/is-uuid-in-array.function";

export class ObserveItemChanges {
  onArrayChange(changeFn: Function): ProxyHandler<Item[]> {
    return {
      get: (target: Item[], property: string) => {
        return (
          OBSERVE_ARRAY_CHANGES_GETTER[property] ||
          OBSERVE_ARRAY_CHANGES_GETTER["default"]
        )(target, property);
      },

      deleteProperty(target: Item[], p: string | symbol): boolean {
        console.log(target, p);
        return true;
      },

      set: (target: Item[], property: string, value, receiver) => {
        console.log(target, property, value, receiver);
        if (AreEqualObjectsInArray(target, value)) {
          const copyOfTarget = target.filter(
            (item) => item.uuid !== target[property]?.uuid
          );
          changeFn(
            ItemModelActions.deleteOneItem,
            target[property]?.uuid,
            copyOfTarget
          );
          delete target[property];
          return true;
        }
        if (value?.uuid && !AreEqualObjectsInArray(target, value)) {
          target[property] = value;
          changeFn(ItemModelActions.addOneItem, value, target);
          return true;
        }
        if (IsUuidInArray(target, value?.uuid)) {
          console.log("update");
        }
        return true;
      },
    };
  }
}
