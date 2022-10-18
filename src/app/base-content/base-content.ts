import { GenerateContent } from "./generate-content";
import { SetStyleContent } from "./set-style-content";

export class BaseContent {
  constructor(
    private generateBaseContent: GenerateContent,
    private setStyleContent: SetStyleContent
  ) {}
}
