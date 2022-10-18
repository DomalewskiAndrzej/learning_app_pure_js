import * as _ from "lodash";

export function AreEqualObjectsInArray(arr: any[], obj: unknown): boolean {
  return arr.find((item) => _.isEqual(item, obj));
}
