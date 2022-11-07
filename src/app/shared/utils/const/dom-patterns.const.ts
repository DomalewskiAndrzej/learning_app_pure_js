import { ElementId } from "../enums/element-id.enum";
import { ITEM_BUTTON_NAMES } from "../enums/item-button-names.enum";
import { SectionNames } from "../enums/section-names.enum";

export const DOM_PATTERNS = {
  bodyPattern: `<nav class="menu"><button class="menu__button" id="${ElementId.itemAddButton}" type="button">Add new item</button></nav><main class="main"></main>`,
  itemPattern: (uuid: string, itemDescription: string, itemButtons: string) =>
    `<li class="item" id="${uuid}">${itemDescription}${itemButtons}</li>`,
  sectionPattern: (name: SectionNames) =>
    `<section class="main__section"><h1>${name}</h1><ul class="main__section--area" id="${SectionNames[name]}"></ul></section>`,
  inputDescriptionPattern: (value: string) =>
    `<input id="${ElementId.itemInputDescription}" type="text" value="${value}">`,
  itemButtons: () =>
    `<div class="item__buttons" id="item-buttons"><button id="${ElementId.itemModeButton}">${ITEM_BUTTON_NAMES.editMode}</button> <button id="${ElementId.itemActionButton}">${ITEM_BUTTON_NAMES.delete}</button></div>`,
  itemDescription: (description: string, id: number) =>
    `<span>Id: ${id}</span><span class="item__description" id="${ElementId.itemDescription}">${description}</span>`,
};
