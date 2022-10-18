import { SectionNames } from "../enums/section-names.enum";

export interface Item {
  uuid: string;
  description: string;
  section: SectionNames;
  id: number;
  state?: string;
}
