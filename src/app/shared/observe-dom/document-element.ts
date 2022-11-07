import { ObserveDOM } from "./observe-dom";
import { ElementId } from "../utils/enums/element-id.enum";
import { ResolveId } from "../utils/functions/resolve-id.function";

export class DocumentElement {
  static documentHTML = document.querySelector("html");

  static async getDocumentBody(): Promise<HTMLElement> {
    return this.waitForElement("body");
  }

  static async getAddNewItemButton(): Promise<HTMLElement> {
    return this.waitForElement(ResolveId(ElementId.itemAddButton));
  }

  static async getSectionNew(): Promise<HTMLElement> {
    return this.waitForElement(ResolveId(ElementId.sectionNew));
  }

  private static async waitForElement(selector: string): Promise<HTMLElement> {
    return new Promise<HTMLElement>((resolve) => {
      ObserveDOM.observe(DocumentElement.documentHTML, (_, observer) => {
        const element: HTMLElement = document.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });
    });
  }
}
