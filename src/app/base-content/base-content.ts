import { GenerateContent } from "./generate-content";
import { DocumentElement } from "../shared/observe-dom/document-element";
import { SetStyleContent } from "./set-style-content";

export class BaseContent {
  constructor() {
    this.initBodyContent();
  }

  initBodyContent(): void {
    DocumentElement.getDocumentBody().then((body) => {
      new GenerateContent(body);
      new SetStyleContent();
    });
  }
}
