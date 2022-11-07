import { ElementId } from "../enums/element-id.enum";
import { SectionNames } from "../enums/section-names.enum";

export function ResolveId(id: ElementId | SectionNames) {
  return `#${id}`;
}
