export function IsUuidInArray(arr: any[], uuid: string): boolean {
  return arr.find((item) => item?.uuid === uuid);
}
