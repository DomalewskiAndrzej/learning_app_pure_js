import { IDS } from "./ids.const";
import { ITEM_BUTTON_NAMES } from "../enums/item-button-names.enum";
import { Item } from "../interfaces/item.interface";
import { SectionNames } from "../enums/section-names.enum";

export const DOM_PATTERNS = {
  bodyPattern: `<nav class="menu"><button class="menu__button" id="${IDS.itemAddButton}" type="button">Add new item</button></nav><main class="main"></main>`,
  itemPattern: (data: Item) =>
    `<li class="item" id="${data.id}">${itemDescription(
      data
    )}${itemButtons()}</li>`,
  sectionPattern: (name: SectionNames) =>
    `<section class="main__section"><h1>${name}</h1><ul class="main__section--area" id="${name}"></ul></section>`,
};

const itemButtons = () =>
  `<div class="item__buttons" id="item-buttons"><button id="${IDS.itemModeButton}">${ITEM_BUTTON_NAMES.editMode}</button> <button id="${IDS.itemDeleteButton}">${ITEM_BUTTON_NAMES.delete}</button></div>`;
const itemDescription = (data: Item) =>
  `<span>Id: ${data.id}</span><span class="item__description" id="${IDS.itemDescription}">${data.description}</span>`;
