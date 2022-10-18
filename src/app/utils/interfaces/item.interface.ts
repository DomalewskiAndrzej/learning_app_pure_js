import {SectionNames} from "../enums/section-names.enum";

export interface Item {
    id: number;
    description: string;
    section: SectionNames
}