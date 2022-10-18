import { DOM_PATTERNS } from "../shared/utils/const/dom-patterns.const";
import { SectionNames } from "../shared/utils/enums/section-names.enum";

export class GenerateContent {
  constructor(private body: HTMLElement) {
    this.generateBody(body);
    this.generateSections();
  }

  generateBody(body: HTMLElement): void {
    body.insertAdjacentHTML("beforeend", DOM_PATTERNS.bodyPattern);
  }

  generateSections(): void {
    const main = document.querySelector(".main");
    Object.entries(SectionNames).forEach(
      ([section, _]: [SectionNames, SectionNames]) =>
        main.insertAdjacentHTML(
          "beforeend",
          DOM_PATTERNS.sectionPattern(section)
        )
    );
  }
}
