import { DOM_PATTERNS } from "../utils/const/dom-patterns.const";
import { SectionNames } from "../utils/enums/section-names.enum";

export class GenerateContent {
  constructor() {
    this.generateBody();
    this.generateSections();
  }

  generateBody(): void {
    document
      .querySelector("body")
      .insertAdjacentHTML("beforeend", DOM_PATTERNS.bodyPattern);
  }

  generateSections(): void {
    const main = document.querySelector(".main");
    for (let item in SectionNames) {
      main.insertAdjacentHTML(
        "beforeend",
        DOM_PATTERNS.sectionPattern(item as SectionNames)
      );
    }
  }
}
