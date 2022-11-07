import { ItemModelActions } from "../enums/item-model-actions.enum";
import { ObserveArrayChangesNames } from "../enums/observe-array-changes-names.enum";

export const OBSERVE_ARRAY_CHANGES_SETTER = {
  [ObserveArrayChangesNames.push]: ItemModelActions.addOneItem,
  [ObserveArrayChangesNames.constructor]: ItemModelActions.deleteOneItem,
  [ObserveArrayChangesNames.map]: ItemModelActions.updateOneItem,
};
