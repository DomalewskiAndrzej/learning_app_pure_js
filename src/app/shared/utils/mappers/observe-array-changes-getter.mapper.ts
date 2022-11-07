import { ObserveArrayChangesNames } from "../enums/observe-array-changes-names.enum";

export const OBSERVE_ARRAY_CHANGES_GETTER = {
  [ObserveArrayChangesNames.get]: (target: unknown[]): unknown[] => target,
  [ObserveArrayChangesNames.getLength]: (target: unknown[]): number =>
    target?.length,
  ["default"]: (target: unknown[], property: string): unknown =>
    target[property],
};
