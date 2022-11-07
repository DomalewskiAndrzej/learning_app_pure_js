import { APP_CONFIG } from "../shared/utils/const/app-config.const";

export class SetStyleContent {
  constructor() {
    this.setStyleSection();
    this.setStyleArea();
  }

  setStyleSection(): void {
    document.querySelectorAll(".main__section").forEach((element, index) => {
      (element as HTMLElement).style.backgroundColor =
        APP_CONFIG.sectionColors[index];
    });
  }

  setStyleArea(): void {
    document
      .querySelectorAll(".main__section--area")
      .forEach((element, index) => {
        (
          element as HTMLElement
        ).style.border = `1px solid linear-gradient(${APP_CONFIG.sectionColors[index]})`;
      });
  }
}
