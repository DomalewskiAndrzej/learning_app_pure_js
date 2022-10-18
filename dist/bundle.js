/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/application.ts":
/*!********************************!*\
  !*** ./src/app/application.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Application": () => (/* binding */ Application)
/* harmony export */ });
/* harmony import */ var _item_management_item_management__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-management/item-management */ "./src/app/item-management/item-management.ts");
/* harmony import */ var _utils_const_dom_patterns_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/const/dom-patterns.const */ "./src/app/utils/const/dom-patterns.const.ts");
/* harmony import */ var _utils_enums_section_names_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/enums/section-names.enum */ "./src/app/utils/enums/section-names.enum.ts");
/* harmony import */ var _utils_const_app_config_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/const/app-config.const */ "./src/app/utils/const/app-config.const.ts");
/* harmony import */ var _utils_const_ids_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/const/ids.const */ "./src/app/utils/const/ids.const.ts");





var itemManagement = new _item_management_item_management__WEBPACK_IMPORTED_MODULE_0__.ItemManagement();
var Application = /** @class */ (function () {
    function Application() {
        this.initialize();
    }
    Application.prototype.initialize = function () {
        console.log(document.querySelector("body"));
        this.generateBody();
        this.generateSections();
        itemManagement.initializeItemManagement();
        this.colorizeSections();
        this.colorizeAreasBorder();
        this.addDefaultListeners();
    };
    Application.prototype.generateBody = function () {
        document
            .querySelector("body")
            .insertAdjacentHTML("beforeend", _utils_const_dom_patterns_const__WEBPACK_IMPORTED_MODULE_1__.DOM_PATTERNS.bodyPattern);
    };
    Application.prototype.generateSections = function () {
        var main = document.querySelector(".main");
        for (var item in _utils_enums_section_names_enum__WEBPACK_IMPORTED_MODULE_2__.SectionNames) {
            main.insertAdjacentHTML("beforeend", _utils_const_dom_patterns_const__WEBPACK_IMPORTED_MODULE_1__.DOM_PATTERNS.sectionPattern(item));
        }
    };
    Application.prototype.colorizeSections = function () {
        document.querySelectorAll(".main__section").forEach(function (element, index) {
            element.style.backgroundColor =
                _utils_const_app_config_const__WEBPACK_IMPORTED_MODULE_3__.APP_CONFIG.sectionColors[index];
        });
    };
    Application.prototype.colorizeAreasBorder = function () {
        document
            .querySelectorAll(".main__section--area")
            .forEach(function (element, index) {
            element.style.border = "1px solid linear-gradient(".concat(_utils_const_app_config_const__WEBPACK_IMPORTED_MODULE_3__.APP_CONFIG.sectionColors[index], ")");
        });
    };
    Application.prototype.addDefaultListeners = function () {
        document
            .querySelector(_utils_const_ids_const__WEBPACK_IMPORTED_MODULE_4__.IDS.itemAddButton)
            .addEventListener("click", function () { return itemManagement.addItem(); });
    };
    return Application;
}());



/***/ }),

/***/ "./src/app/item-management/item-dom-render.ts":
/*!****************************************************!*\
  !*** ./src/app/item-management/item-dom-render.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDomRender": () => (/* binding */ ItemDomRender)
/* harmony export */ });
/* harmony import */ var _utils_const_dom_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const/dom-patterns.const */ "./src/app/utils/const/dom-patterns.const.ts");

var ItemDomRender = /** @class */ (function () {
    function ItemDomRender() {
    }
    ItemDomRender.renderItem = function (data) {
        var sectionNew = document.querySelector("#".concat(data.section));
        var newElement = _utils_const_dom_patterns_const__WEBPACK_IMPORTED_MODULE_0__.DOM_PATTERNS.itemPattern(data);
        sectionNew.insertAdjacentHTML("beforeend", newElement);
    };
    ItemDomRender.deleteItem = function (id) {
        var element = document.getElementById(String(id));
        element.parentNode.removeChild(element);
    };
    ItemDomRender.updateItem = function (data) {
        ItemDomRender.deleteItem(data.id);
        ItemDomRender.renderItem(data);
    };
    return ItemDomRender;
}());



/***/ }),

/***/ "./src/app/item-management/item-listeners.ts":
/*!***************************************************!*\
  !*** ./src/app/item-management/item-listeners.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemListeners": () => (/* binding */ ItemListeners)
/* harmony export */ });
/* harmony import */ var _utils_enums_item_button_names_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/enums/item-button-names.enum */ "./src/app/utils/enums/item-button-names.enum.ts");

var ItemListeners = /** @class */ (function () {
    function ItemListeners() {
    }
    ItemListeners.itemDeleteButton = function (element, deleteFunction, itemList) {
        element === null || element === void 0 ? void 0 : element.addEventListener("click", function () {
            if (element.innerText === _utils_enums_item_button_names_enum__WEBPACK_IMPORTED_MODULE_0__.ITEM_BUTTON_NAMES.save) {
                return;
            }
            var id = +itemList.attributes["id"].value;
            deleteFunction(id);
        });
    };
    ItemListeners.itemModeButton = function (element) {
        if (!(element === null || element === void 0 ? void 0 : element.innerText))
            return;
        element.addEventListener("click", function () {
            if (element.innerText === _utils_enums_item_button_names_enum__WEBPACK_IMPORTED_MODULE_0__.ITEM_BUTTON_NAMES.editMode) {
                element.innerText = _utils_enums_item_button_names_enum__WEBPACK_IMPORTED_MODULE_0__.ITEM_BUTTON_NAMES.readMode;
                element.nextElementSibling.innerText = _utils_enums_item_button_names_enum__WEBPACK_IMPORTED_MODULE_0__.ITEM_BUTTON_NAMES.save;
                var itemDescriptionElement = element.parentNode.previousSibling;
                // removeChild();
                return;
            }
            element.innerText = _utils_enums_item_button_names_enum__WEBPACK_IMPORTED_MODULE_0__.ITEM_BUTTON_NAMES.editMode;
            element.nextElementSibling.innerText = _utils_enums_item_button_names_enum__WEBPACK_IMPORTED_MODULE_0__.ITEM_BUTTON_NAMES["delete"];
        });
    };
    return ItemListeners;
}());



/***/ }),

/***/ "./src/app/item-management/item-management.ts":
/*!****************************************************!*\
  !*** ./src/app/item-management/item-management.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemManagement": () => (/* binding */ ItemManagement)
/* harmony export */ });
/* harmony import */ var _utils_const_app_config_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/const/app-config.const */ "./src/app/utils/const/app-config.const.ts");
/* harmony import */ var _observe_dom_observe_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observe-dom/observe-dom */ "./src/app/observe-dom/observe-dom.ts");
/* harmony import */ var _item_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-listeners */ "./src/app/item-management/item-listeners.ts");
/* harmony import */ var _item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-model */ "./src/app/item-management/item-model.ts");
/* harmony import */ var _local_storage_management_local_storage_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-storage-management/local-storage-management */ "./src/app/local-storage-management/local-storage-management.ts");
/* harmony import */ var _utils_const_ids_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/const/ids.const */ "./src/app/utils/const/ids.const.ts");
/* harmony import */ var _item_dom_render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-dom-render */ "./src/app/item-management/item-dom-render.ts");
/* harmony import */ var _utils_enums_section_names_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/enums/section-names.enum */ "./src/app/utils/enums/section-names.enum.ts");
/* harmony import */ var _utils_enums_storage_names_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/enums/storage-names.enum */ "./src/app/utils/enums/storage-names.enum.ts");
/* harmony import */ var _utils_enums_item_model_function_names_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/enums/item-model-function-names.enum */ "./src/app/utils/enums/item-model-function-names.enum.ts");










var ItemManagement = /** @class */ (function () {
    function ItemManagement() {
        this.itemModel = new _item_model__WEBPACK_IMPORTED_MODULE_3__.ItemModel();
    }
    ItemManagement.prototype.initializeItemManagement = function () {
        this.manageItemListeners();
        this.itemModel.initItemModel(this.onChange);
        this.itemModel.addMany(_local_storage_management_local_storage_management__WEBPACK_IMPORTED_MODULE_4__.LocalStorageManagement.getDataFromStorage(_utils_enums_storage_names_enum__WEBPACK_IMPORTED_MODULE_8__.StorageNames.data));
    };
    ItemManagement.prototype.addItem = function () {
        var id = this.itemModel.getItemsLength() + 1;
        var newItem = { id: id, description: "", section: _utils_enums_section_names_enum__WEBPACK_IMPORTED_MODULE_7__.SectionNames["new"] };
        this.itemModel.addOne(newItem);
    };
    ItemManagement.prototype.deleteItem = function (id) {
        this.itemModel.delete(id);
    };
    ItemManagement.prototype.manageItemListeners = function () {
        var _this = this;
        _observe_dom_observe_dom__WEBPACK_IMPORTED_MODULE_1__.ObserveDOM.observe(document.querySelector("#".concat(_utils_const_app_config_const__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG.sectionNames["new"])), function (observer) {
            observer.forEach(function (item) {
                item.addedNodes.forEach(function (node) {
                    var _a, _b;
                    var itemDeleteButton = (_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a[_utils_const_ids_const__WEBPACK_IMPORTED_MODULE_5__.IDS.itemButtons].children[_utils_const_ids_const__WEBPACK_IMPORTED_MODULE_5__.IDS.itemDeleteButton];
                    var itemModeButton = (_b = node === null || node === void 0 ? void 0 : node.children) === null || _b === void 0 ? void 0 : _b[_utils_const_ids_const__WEBPACK_IMPORTED_MODULE_5__.IDS.itemButtons].children[_utils_const_ids_const__WEBPACK_IMPORTED_MODULE_5__.IDS.itemModeButton];
                    _item_listeners__WEBPACK_IMPORTED_MODULE_2__.ItemListeners.itemDeleteButton(itemDeleteButton, _this.deleteItem.bind(_this), node);
                    _item_listeners__WEBPACK_IMPORTED_MODULE_2__.ItemListeners.itemModeButton(itemModeButton);
                });
            });
        });
    };
    ItemManagement.prototype.onChange = function (name, changedData) {
        if (name === _utils_enums_item_model_function_names_enum__WEBPACK_IMPORTED_MODULE_9__.ItemModelFunctionNames.addOne) {
            // ItemDomRender.renderItem(changedData);
            return;
        }
        if (name === _utils_enums_item_model_function_names_enum__WEBPACK_IMPORTED_MODULE_9__.ItemModelFunctionNames.addMany) {
            if (changedData.constructor === Array) {
                changedData.forEach(function (item) {
                    _item_dom_render__WEBPACK_IMPORTED_MODULE_6__.ItemDomRender.renderItem(item);
                });
            }
            return;
        }
        if (name === _utils_enums_item_model_function_names_enum__WEBPACK_IMPORTED_MODULE_9__.ItemModelFunctionNames["delete"]) {
            if (typeof changedData === "number")
                _item_dom_render__WEBPACK_IMPORTED_MODULE_6__.ItemDomRender.deleteItem(changedData);
            return;
        }
        // ItemDomRender.updateItem(changedData);
    };
    return ItemManagement;
}());



/***/ }),

/***/ "./src/app/item-management/item-model.ts":
/*!***********************************************!*\
  !*** ./src/app/item-management/item-model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemModel": () => (/* binding */ ItemModel)
/* harmony export */ });
/* harmony import */ var _local_storage_management_local_storage_management__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../local-storage-management/local-storage-management */ "./src/app/local-storage-management/local-storage-management.ts");
/* harmony import */ var _utils_enums_item_model_function_names_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/enums/item-model-function-names.enum */ "./src/app/utils/enums/item-model-function-names.enum.ts");
/* harmony import */ var _utils_enums_storage_names_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/enums/storage-names.enum */ "./src/app/utils/enums/storage-names.enum.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var ItemModel = /** @class */ (function () {
    function ItemModel() {
        this._items = [];
        this._functions = {};
    }
    ItemModel.prototype.initItemModel = function (onChangeFn) {
        this.initChangeDetection(onChangeFn);
    };
    ItemModel.prototype.getItems = function () {
        return this._items;
    };
    ItemModel.prototype.getItemsLength = function () {
        return this._items.length;
    };
    ItemModel.prototype.addMany = function (arr) {
        if (!arr.length)
            return;
        this._items = __spreadArray(__spreadArray([], this._items, true), arr, true);
    };
    ItemModel.prototype.addOne = function (obj) {
        if (!obj)
            return;
        this._items = __spreadArray(__spreadArray([], this._items, true), [obj], false);
    };
    ItemModel.prototype.update = function (obj) {
        if (!obj)
            return;
        this._items.map(function (item) { return (item.id === obj.id ? obj : item); });
    };
    ItemModel.prototype.delete = function (id) {
        if (!id)
            return;
        this._items = this._items.filter(function (item) { return item.id !== id; });
    };
    ItemModel.prototype.initChangeDetection = function (onChangeFn) {
        var _this = this;
        Object.keys(_utils_enums_item_model_function_names_enum__WEBPACK_IMPORTED_MODULE_1__.ItemModelFunctionNames).forEach(function (name) {
            _this._functions[name] = ItemModel.prototype[name];
            ItemModel.prototype[name] = function (value) {
                if (value && !!value[0]) {
                    _this._functions[name].bind(_this)(value);
                    onChangeFn.bind(_this)(name, value);
                    _local_storage_management_local_storage_management__WEBPACK_IMPORTED_MODULE_0__.LocalStorageManagement.updateStorage(_this.getItems(), _utils_enums_storage_names_enum__WEBPACK_IMPORTED_MODULE_2__.StorageNames.data);
                }
            };
        });
    };
    return ItemModel;
}());



/***/ }),

/***/ "./src/app/local-storage-management/local-storage-management.ts":
/*!**********************************************************************!*\
  !*** ./src/app/local-storage-management/local-storage-management.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageManagement": () => (/* binding */ LocalStorageManagement)
/* harmony export */ });
var LocalStorageManagement = /** @class */ (function () {
    function LocalStorageManagement() {
    }
    LocalStorageManagement.updateStorage = function (data, storageName) {
        localStorage.setItem(storageName, JSON.stringify(data));
    };
    LocalStorageManagement.getDataFromStorage = function (storageName) {
        return JSON.parse(localStorage.getItem(storageName));
    };
    return LocalStorageManagement;
}());



/***/ }),

/***/ "./src/app/observe-dom/observe-dom.ts":
/*!********************************************!*\
  !*** ./src/app/observe-dom/observe-dom.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObserveDOM": () => (/* binding */ ObserveDOM)
/* harmony export */ });
var ObserveDOM = /** @class */ (function () {
    function ObserveDOM() {
    }
    ObserveDOM.observe = (function () {
        var MutationObserver = window.MutationObserver;
        return function (element, callback) {
            if (!element || element.nodeType !== 1)
                return;
            if (MutationObserver) {
                // define a new observer
                var mutationObserver = new MutationObserver(callback);
                // have the observer observe obj for changes in children
                mutationObserver.observe(element, { childList: true, subtree: true });
                return mutationObserver;
            }
        };
    })();
    return ObserveDOM;
}());



/***/ }),

/***/ "./src/app/utils/const/app-config.const.ts":
/*!*************************************************!*\
  !*** ./src/app/utils/const/app-config.const.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_CONFIG": () => (/* binding */ APP_CONFIG)
/* harmony export */ });
/* harmony import */ var _enums_section_names_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/section-names.enum */ "./src/app/utils/enums/section-names.enum.ts");

var APP_CONFIG = {
    sectionColors: ["#EDFFE9", "#DDFFD6", "#CEFFC3"],
    sectionNames: _enums_section_names_enum__WEBPACK_IMPORTED_MODULE_0__.SectionNames,
};


/***/ }),

/***/ "./src/app/utils/const/dom-patterns.const.ts":
/*!***************************************************!*\
  !*** ./src/app/utils/const/dom-patterns.const.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_PATTERNS": () => (/* binding */ DOM_PATTERNS)
/* harmony export */ });
/* harmony import */ var _ids_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ids.const */ "./src/app/utils/const/ids.const.ts");
/* harmony import */ var _enums_item_button_names_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/item-button-names.enum */ "./src/app/utils/enums/item-button-names.enum.ts");


var DOM_PATTERNS = {
    bodyPattern: "<nav class=\"menu\"><button class=\"menu__button\" id=\"".concat(_ids_const__WEBPACK_IMPORTED_MODULE_0__.IDS.itemAddButton, "\" type=\"button\">Add new item</button></nav><main class=\"main\"></main>"),
    itemPattern: function (data) {
        return "<li class=\"item\" id=\"".concat(data.id, "\">").concat(itemDescription(data)).concat(itemButtons(), "</li>");
    },
    sectionPattern: function (name) {
        return "<section class=\"main__section\"><h1>".concat(name, "</h1><ul class=\"main__section--area\" id=\"").concat(name, "\"></ul></section>");
    },
};
var itemButtons = function () {
    return "<div class=\"item__buttons\" id=\"item-buttons\"><button id=\"".concat(_ids_const__WEBPACK_IMPORTED_MODULE_0__.IDS.itemModeButton, "\">").concat(_enums_item_button_names_enum__WEBPACK_IMPORTED_MODULE_1__.ITEM_BUTTON_NAMES.editMode, "</button> <button id=\"").concat(_ids_const__WEBPACK_IMPORTED_MODULE_0__.IDS.itemDeleteButton, "\">").concat(_enums_item_button_names_enum__WEBPACK_IMPORTED_MODULE_1__.ITEM_BUTTON_NAMES["delete"], "</button></div>");
};
var itemDescription = function (data) {
    return "<span>Id: ".concat(data.id, "</span><span class=\"item__description\" id=\"").concat(_ids_const__WEBPACK_IMPORTED_MODULE_0__.IDS.itemDescription, "\">").concat(data.description, "</span>");
};


/***/ }),

/***/ "./src/app/utils/const/ids.const.ts":
/*!******************************************!*\
  !*** ./src/app/utils/const/ids.const.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDS": () => (/* binding */ IDS)
/* harmony export */ });
var IDS = {
    itemDeleteButton: "item-delete-button",
    itemModeButton: "item-mode-button",
    itemButtons: "item-buttons",
    itemDescription: "item-description",
    itemAddButton: 'item-add-button'
};


/***/ }),

/***/ "./src/app/utils/enums/item-button-names.enum.ts":
/*!*******************************************************!*\
  !*** ./src/app/utils/enums/item-button-names.enum.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITEM_BUTTON_NAMES": () => (/* binding */ ITEM_BUTTON_NAMES)
/* harmony export */ });
var ITEM_BUTTON_NAMES;
(function (ITEM_BUTTON_NAMES) {
    ITEM_BUTTON_NAMES["editMode"] = "Edit Mode";
    ITEM_BUTTON_NAMES["readMode"] = "Read Mode";
    ITEM_BUTTON_NAMES["delete"] = "Delete";
    ITEM_BUTTON_NAMES["save"] = "Save";
})(ITEM_BUTTON_NAMES || (ITEM_BUTTON_NAMES = {}));
;


/***/ }),

/***/ "./src/app/utils/enums/item-model-function-names.enum.ts":
/*!***************************************************************!*\
  !*** ./src/app/utils/enums/item-model-function-names.enum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemModelFunctionNames": () => (/* binding */ ItemModelFunctionNames)
/* harmony export */ });
var ItemModelFunctionNames;
(function (ItemModelFunctionNames) {
    ItemModelFunctionNames["addMany"] = "addMany";
    ItemModelFunctionNames["addOne"] = "addOne";
    ItemModelFunctionNames["update"] = "update";
    ItemModelFunctionNames["delete"] = "delete";
})(ItemModelFunctionNames || (ItemModelFunctionNames = {}));
;


/***/ }),

/***/ "./src/app/utils/enums/section-names.enum.ts":
/*!***************************************************!*\
  !*** ./src/app/utils/enums/section-names.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionNames": () => (/* binding */ SectionNames)
/* harmony export */ });
var SectionNames;
(function (SectionNames) {
    SectionNames["new"] = "new";
    SectionNames["inProgress"] = "inProgress";
    SectionNames["done"] = "done";
})(SectionNames || (SectionNames = {}));


/***/ }),

/***/ "./src/app/utils/enums/storage-names.enum.ts":
/*!***************************************************!*\
  !*** ./src/app/utils/enums/storage-names.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageNames": () => (/* binding */ StorageNames)
/* harmony export */ });
var StorageNames;
(function (StorageNames) {
    StorageNames["data"] = "data";
})(StorageNames || (StorageNames = {}));
;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/application */ "./src/app/application.ts");

window.onload = function () {
    var app = new _app_application__WEBPACK_IMPORTED_MODULE_0__.Application();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUNGRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdEO0FBRWhELE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDZCxJQUFNLEdBQUcsR0FBRyxJQUFJLHlEQUFXLEVBQUUsQ0FBQztBQUNoQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybmluZ19hcHBfaW5fcHVyZV9qcy8uL3NyYy9hcHAvYXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmdfYXBwX2luX3B1cmVfanMvLi9zcmMvYXBwL2l0ZW0tbWFuYWdlbWVudC9pdGVtLWRvbS1yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmdfYXBwX2luX3B1cmVfanMvLi9zcmMvYXBwL2l0ZW0tbWFuYWdlbWVudC9pdGVtLWxpc3RlbmVycy50cyIsIndlYnBhY2s6Ly9sZWFybmluZ19hcHBfaW5fcHVyZV9qcy8uL3NyYy9hcHAvaXRlbS1tYW5hZ2VtZW50L2l0ZW0tbWFuYWdlbWVudC50cyIsIndlYnBhY2s6Ly9sZWFybmluZ19hcHBfaW5fcHVyZV9qcy8uL3NyYy9hcHAvaXRlbS1tYW5hZ2VtZW50L2l0ZW0tbW9kZWwudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmdfYXBwX2luX3B1cmVfanMvLi9zcmMvYXBwL2xvY2FsLXN0b3JhZ2UtbWFuYWdlbWVudC9sb2NhbC1zdG9yYWdlLW1hbmFnZW1lbnQudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmdfYXBwX2luX3B1cmVfanMvLi9zcmMvYXBwL29ic2VydmUtZG9tL29ic2VydmUtZG9tLnRzIiwid2VicGFjazovL2xlYXJuaW5nX2FwcF9pbl9wdXJlX2pzLy4vc3JjL2FwcC91dGlscy9jb25zdC9hcHAtY29uZmlnLmNvbnN0LnRzIiwid2VicGFjazovL2xlYXJuaW5nX2FwcF9pbl9wdXJlX2pzLy4vc3JjL2FwcC91dGlscy9jb25zdC9kb20tcGF0dGVybnMuY29uc3QudHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmdfYXBwX2luX3B1cmVfanMvLi9zcmMvYXBwL3V0aWxzL2NvbnN0L2lkcy5jb25zdC50cyIsIndlYnBhY2s6Ly9sZWFybmluZ19hcHBfaW5fcHVyZV9qcy8uL3NyYy9hcHAvdXRpbHMvZW51bXMvaXRlbS1idXR0b24tbmFtZXMuZW51bS50cyIsIndlYnBhY2s6Ly9sZWFybmluZ19hcHBfaW5fcHVyZV9qcy8uL3NyYy9hcHAvdXRpbHMvZW51bXMvaXRlbS1tb2RlbC1mdW5jdGlvbi1uYW1lcy5lbnVtLnRzIiwid2VicGFjazovL2xlYXJuaW5nX2FwcF9pbl9wdXJlX2pzLy4vc3JjL2FwcC91dGlscy9lbnVtcy9zZWN0aW9uLW5hbWVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmdfYXBwX2luX3B1cmVfanMvLi9zcmMvYXBwL3V0aWxzL2VudW1zL3N0b3JhZ2UtbmFtZXMuZW51bS50cyIsIndlYnBhY2s6Ly9sZWFybmluZ19hcHBfaW5fcHVyZV9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFybmluZ19hcHBfaW5fcHVyZV9qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhcm5pbmdfYXBwX2luX3B1cmVfanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFybmluZ19hcHBfaW5fcHVyZV9qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYXJuaW5nX2FwcF9pbl9wdXJlX2pzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1NYW5hZ2VtZW50IH0gZnJvbSBcIi4vaXRlbS1tYW5hZ2VtZW50L2l0ZW0tbWFuYWdlbWVudFwiO1xuaW1wb3J0IHsgRE9NX1BBVFRFUk5TIH0gZnJvbSBcIi4vdXRpbHMvY29uc3QvZG9tLXBhdHRlcm5zLmNvbnN0XCI7XG5pbXBvcnQgeyBTZWN0aW9uTmFtZXMgfSBmcm9tIFwiLi91dGlscy9lbnVtcy9zZWN0aW9uLW5hbWVzLmVudW1cIjtcbmltcG9ydCB7IEFQUF9DT05GSUcgfSBmcm9tIFwiLi91dGlscy9jb25zdC9hcHAtY29uZmlnLmNvbnN0XCI7XG5pbXBvcnQgeyBJRFMgfSBmcm9tIFwiLi91dGlscy9jb25zdC9pZHMuY29uc3RcIjtcblxuY29uc3QgaXRlbU1hbmFnZW1lbnQgPSBuZXcgSXRlbU1hbmFnZW1lbnQoKTtcblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTtcbiAgICB0aGlzLmdlbmVyYXRlQm9keSgpO1xuICAgIHRoaXMuZ2VuZXJhdGVTZWN0aW9ucygpO1xuICAgIGl0ZW1NYW5hZ2VtZW50LmluaXRpYWxpemVJdGVtTWFuYWdlbWVudCgpO1xuICAgIHRoaXMuY29sb3JpemVTZWN0aW9ucygpO1xuICAgIHRoaXMuY29sb3JpemVBcmVhc0JvcmRlcigpO1xuICAgIHRoaXMuYWRkRGVmYXVsdExpc3RlbmVycygpO1xuICB9XG5cbiAgZ2VuZXJhdGVCb2R5KCk6IHZvaWQge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgRE9NX1BBVFRFUk5TLmJvZHlQYXR0ZXJuKTtcbiAgfVxuXG4gIGdlbmVyYXRlU2VjdGlvbnMoKTogdm9pZCB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBmb3IgKGxldCBpdGVtIGluIFNlY3Rpb25OYW1lcykge1xuICAgICAgbWFpbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgIERPTV9QQVRURVJOUy5zZWN0aW9uUGF0dGVybihpdGVtIGFzIFNlY3Rpb25OYW1lcylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29sb3JpemVTZWN0aW9ucygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX3NlY3Rpb25cIikuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICBBUFBfQ09ORklHLnNlY3Rpb25Db2xvcnNbaW5kZXhdO1xuICAgIH0pO1xuICB9XG5cbiAgY29sb3JpemVBcmVhc0JvcmRlcigpOiB2b2lkIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fc2VjdGlvbi0tYXJlYVwiKVxuICAgICAgLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIChcbiAgICAgICAgICBlbGVtZW50IGFzIEhUTUxFbGVtZW50XG4gICAgICAgICkuc3R5bGUuYm9yZGVyID0gYDFweCBzb2xpZCBsaW5lYXItZ3JhZGllbnQoJHtBUFBfQ09ORklHLnNlY3Rpb25Db2xvcnNbaW5kZXhdfSlgO1xuICAgICAgfSk7XG4gIH1cblxuICBhZGREZWZhdWx0TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihJRFMuaXRlbUFkZEJ1dHRvbikhXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGl0ZW1NYW5hZ2VtZW50LmFkZEl0ZW0oKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7RE9NX1BBVFRFUk5TfSBmcm9tIFwiLi4vdXRpbHMvY29uc3QvZG9tLXBhdHRlcm5zLmNvbnN0XCI7XG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi91dGlscy9pbnRlcmZhY2VzL2l0ZW0uaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBJdGVtRG9tUmVuZGVyIHtcbiAgICBzdGF0aWMgcmVuZGVySXRlbShkYXRhOiBJdGVtKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25OZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhLnNlY3Rpb259YCk7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBET01fUEFUVEVSTlMuaXRlbVBhdHRlcm4oZGF0YSk7XG4gICAgICAgIHNlY3Rpb25OZXchLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBuZXdFbGVtZW50KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlSXRlbShpZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTdHJpbmcoaWQpKTtcbiAgICAgICAgKGVsZW1lbnQhLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnJlbW92ZUNoaWxkKGVsZW1lbnQgYXMgTm9kZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZUl0ZW0oZGF0YTogSXRlbSkge1xuICAgICAgICBJdGVtRG9tUmVuZGVyLmRlbGV0ZUl0ZW0oZGF0YS5pZCk7XG4gICAgICAgIEl0ZW1Eb21SZW5kZXIucmVuZGVySXRlbShkYXRhKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0lURU1fQlVUVE9OX05BTUVTfSBmcm9tIFwiLi4vdXRpbHMvZW51bXMvaXRlbS1idXR0b24tbmFtZXMuZW51bVwiO1xuXG5leHBvcnQgY2xhc3MgSXRlbUxpc3RlbmVycyB7XG4gICAgc3RhdGljIGl0ZW1EZWxldGVCdXR0b24oZWxlbWVudDogSFRNTEVsZW1lbnQsIGRlbGV0ZUZ1bmN0aW9uOiBGdW5jdGlvbiwgaXRlbUxpc3Q6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgPT09IElURU1fQlVUVE9OX05BTUVTLnNhdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpZCA9ICtpdGVtTGlzdC5hdHRyaWJ1dGVzW1wiaWRcIl0udmFsdWU7XG4gICAgICAgICAgICBkZWxldGVGdW5jdGlvbihpZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBpdGVtTW9kZUJ1dHRvbihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQ/LmlubmVyVGV4dCkgcmV0dXJuO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgPT09IElURU1fQlVUVE9OX05BTUVTLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBJVEVNX0JVVFRPTl9OQU1FUy5yZWFkTW9kZTtcbiAgICAgICAgICAgICAgICAoZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEVsZW1lbnQpLmlubmVyVGV4dCA9IElURU1fQlVUVE9OX05BTUVTLnNhdmU7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uRWxlbWVudCA9IChlbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICAvLyByZW1vdmVDaGlsZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gSVRFTV9CVVRUT05fTkFNRVMuZWRpdE1vZGU7XG4gICAgICAgICAgICAoZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEVsZW1lbnQpLmlubmVyVGV4dCA9IElURU1fQlVUVE9OX05BTUVTLmRlbGV0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQVBQX0NPTkZJRyB9IGZyb20gXCIuLi91dGlscy9jb25zdC9hcHAtY29uZmlnLmNvbnN0XCI7XG5pbXBvcnQgeyBPYnNlcnZlRE9NIH0gZnJvbSBcIi4uL29ic2VydmUtZG9tL29ic2VydmUtZG9tXCI7XG5pbXBvcnQgeyBJdGVtTGlzdGVuZXJzIH0gZnJvbSBcIi4vaXRlbS1saXN0ZW5lcnNcIjtcbmltcG9ydCB7IEl0ZW1Nb2RlbCB9IGZyb20gXCIuL2l0ZW0tbW9kZWxcIjtcbmltcG9ydCB7IExvY2FsU3RvcmFnZU1hbmFnZW1lbnQgfSBmcm9tIFwiLi4vbG9jYWwtc3RvcmFnZS1tYW5hZ2VtZW50L2xvY2FsLXN0b3JhZ2UtbWFuYWdlbWVudFwiO1xuaW1wb3J0IHsgSURTIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0L2lkcy5jb25zdFwiO1xuaW1wb3J0IHsgSXRlbURvbVJlbmRlciB9IGZyb20gXCIuL2l0ZW0tZG9tLXJlbmRlclwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi91dGlscy9pbnRlcmZhY2VzL2l0ZW0uaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBTZWN0aW9uTmFtZXMgfSBmcm9tIFwiLi4vdXRpbHMvZW51bXMvc2VjdGlvbi1uYW1lcy5lbnVtXCI7XG5pbXBvcnQgeyBTdG9yYWdlTmFtZXMgfSBmcm9tIFwiLi4vdXRpbHMvZW51bXMvc3RvcmFnZS1uYW1lcy5lbnVtXCI7XG5pbXBvcnQgeyBJdGVtTW9kZWxGdW5jdGlvbk5hbWVzIH0gZnJvbSBcIi4uL3V0aWxzL2VudW1zL2l0ZW0tbW9kZWwtZnVuY3Rpb24tbmFtZXMuZW51bVwiO1xuXG5leHBvcnQgY2xhc3MgSXRlbU1hbmFnZW1lbnQge1xuICBpdGVtTW9kZWwgPSBuZXcgSXRlbU1vZGVsKCk7XG5cbiAgaW5pdGlhbGl6ZUl0ZW1NYW5hZ2VtZW50KCk6IHZvaWQge1xuICAgIHRoaXMubWFuYWdlSXRlbUxpc3RlbmVycygpO1xuICAgIHRoaXMuaXRlbU1vZGVsLmluaXRJdGVtTW9kZWwodGhpcy5vbkNoYW5nZSk7XG4gICAgdGhpcy5pdGVtTW9kZWwuYWRkTWFueShcbiAgICAgIExvY2FsU3RvcmFnZU1hbmFnZW1lbnQuZ2V0RGF0YUZyb21TdG9yYWdlKFN0b3JhZ2VOYW1lcy5kYXRhKVxuICAgICk7XG4gIH1cblxuICBhZGRJdGVtKCk6IHZvaWQge1xuICAgIGNvbnN0IGlkID0gdGhpcy5pdGVtTW9kZWwuZ2V0SXRlbXNMZW5ndGgoKSArIDE7XG4gICAgY29uc3QgbmV3SXRlbTogSXRlbSA9IHsgaWQsIGRlc2NyaXB0aW9uOiBcIlwiLCBzZWN0aW9uOiBTZWN0aW9uTmFtZXMubmV3IH07XG4gICAgdGhpcy5pdGVtTW9kZWwuYWRkT25lKG5ld0l0ZW0pO1xuICB9XG5cbiAgZGVsZXRlSXRlbShpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5pdGVtTW9kZWwuZGVsZXRlKGlkKTtcbiAgfVxuXG4gIG1hbmFnZUl0ZW1MaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgT2JzZXJ2ZURPTS5vYnNlcnZlKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7QVBQX0NPTkZJRy5zZWN0aW9uTmFtZXMubmV3fWApISxcbiAgICAgIChvYnNlcnZlcikgPT4ge1xuICAgICAgICBvYnNlcnZlci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EZWxldGVCdXR0b24gPSAobm9kZSBhcyBIVE1MRWxlbWVudCk/LmNoaWxkcmVuPy5bXG4gICAgICAgICAgICAgIElEUy5pdGVtQnV0dG9uc1xuICAgICAgICAgICAgXS5jaGlsZHJlbltJRFMuaXRlbURlbGV0ZUJ1dHRvbl07XG4gICAgICAgICAgICBjb25zdCBpdGVtTW9kZUJ1dHRvbiA9IChub2RlIGFzIEhUTUxFbGVtZW50KT8uY2hpbGRyZW4/LltcbiAgICAgICAgICAgICAgSURTLml0ZW1CdXR0b25zXG4gICAgICAgICAgICBdLmNoaWxkcmVuW0lEUy5pdGVtTW9kZUJ1dHRvbl07XG5cbiAgICAgICAgICAgIEl0ZW1MaXN0ZW5lcnMuaXRlbURlbGV0ZUJ1dHRvbihcbiAgICAgICAgICAgICAgaXRlbURlbGV0ZUJ1dHRvbixcbiAgICAgICAgICAgICAgdGhpcy5kZWxldGVJdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgIG5vZGUgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIEl0ZW1MaXN0ZW5lcnMuaXRlbU1vZGVCdXR0b24oaXRlbU1vZGVCdXR0b24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgb25DaGFuZ2UoXG4gICAgbmFtZToga2V5b2YgdHlwZW9mIEl0ZW1Nb2RlbEZ1bmN0aW9uTmFtZXMsXG4gICAgY2hhbmdlZERhdGE6IG51bWJlciB8IEl0ZW0gfCBJdGVtW11cbiAgKSB7XG4gICAgaWYgKG5hbWUgPT09IEl0ZW1Nb2RlbEZ1bmN0aW9uTmFtZXMuYWRkT25lKSB7XG4gICAgICAvLyBJdGVtRG9tUmVuZGVyLnJlbmRlckl0ZW0oY2hhbmdlZERhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobmFtZSA9PT0gSXRlbU1vZGVsRnVuY3Rpb25OYW1lcy5hZGRNYW55KSB7XG4gICAgICBpZiAoY2hhbmdlZERhdGEuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgIGNoYW5nZWREYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBJdGVtRG9tUmVuZGVyLnJlbmRlckl0ZW0oaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobmFtZSA9PT0gSXRlbU1vZGVsRnVuY3Rpb25OYW1lcy5kZWxldGUpIHtcbiAgICAgIGlmICh0eXBlb2YgY2hhbmdlZERhdGEgPT09IFwibnVtYmVyXCIpXG4gICAgICAgIEl0ZW1Eb21SZW5kZXIuZGVsZXRlSXRlbShjaGFuZ2VkRGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEl0ZW1Eb21SZW5kZXIudXBkYXRlSXRlbShjaGFuZ2VkRGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IExvY2FsU3RvcmFnZU1hbmFnZW1lbnQgfSBmcm9tIFwiLi4vbG9jYWwtc3RvcmFnZS1tYW5hZ2VtZW50L2xvY2FsLXN0b3JhZ2UtbWFuYWdlbWVudFwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi91dGlscy9pbnRlcmZhY2VzL2l0ZW0uaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJdGVtTW9kZWxGdW5jdGlvbk5hbWVzIH0gZnJvbSBcIi4uL3V0aWxzL2VudW1zL2l0ZW0tbW9kZWwtZnVuY3Rpb24tbmFtZXMuZW51bVwiO1xuaW1wb3J0IHsgU3RvcmFnZU5hbWVzIH0gZnJvbSBcIi4uL3V0aWxzL2VudW1zL3N0b3JhZ2UtbmFtZXMuZW51bVwiO1xuXG5leHBvcnQgY2xhc3MgSXRlbU1vZGVsIHtcbiAgX2l0ZW1zOiBJdGVtW10gPSBbXTtcbiAgX2Z1bmN0aW9uczogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbiB9ID0ge307XG5cbiAgaW5pdEl0ZW1Nb2RlbChvbkNoYW5nZUZuOiBGdW5jdGlvbikge1xuICAgIHRoaXMuaW5pdENoYW5nZURldGVjdGlvbihvbkNoYW5nZUZuKTtcbiAgfVxuXG4gIGdldEl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgZ2V0SXRlbXNMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgYWRkTWFueShhcnI6IEl0ZW1bXSkge1xuICAgIGlmICghYXJyLmxlbmd0aCkgcmV0dXJuO1xuICAgIHRoaXMuX2l0ZW1zID0gWy4uLnRoaXMuX2l0ZW1zLCAuLi5hcnJdO1xuICB9XG5cbiAgYWRkT25lKG9iajogSXRlbSkge1xuICAgIGlmICghb2JqKSByZXR1cm47XG4gICAgdGhpcy5faXRlbXMgPSBbLi4udGhpcy5faXRlbXMsIG9ial07XG4gIH1cblxuICB1cGRhdGUob2JqOiBJdGVtKSB7XG4gICAgaWYgKCFvYmopIHJldHVybjtcbiAgICB0aGlzLl9pdGVtcy5tYXAoKGl0ZW0pID0+IChpdGVtLmlkID09PSBvYmouaWQgPyBvYmogOiBpdGVtKSk7XG4gIH1cblxuICBkZWxldGUoaWQ6IG51bWJlcikge1xuICAgIGlmICghaWQpIHJldHVybjtcbiAgICB0aGlzLl9pdGVtcyA9IHRoaXMuX2l0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xuICB9XG5cbiAgaW5pdENoYW5nZURldGVjdGlvbihvbkNoYW5nZUZuOiBGdW5jdGlvbikge1xuICAgIE9iamVjdC5rZXlzKEl0ZW1Nb2RlbEZ1bmN0aW9uTmFtZXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIHRoaXMuX2Z1bmN0aW9uc1tuYW1lXSA9IEl0ZW1Nb2RlbC5wcm90b3R5cGVbbmFtZV07XG4gICAgICBJdGVtTW9kZWwucHJvdG90eXBlW25hbWVdID0gKHZhbHVlOiBzdHJpbmcgfCBJdGVtIHwgSXRlbVtdKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiAhIXZhbHVlWzBdKSB7XG4gICAgICAgICAgdGhpcy5fZnVuY3Rpb25zW25hbWVdLmJpbmQodGhpcykodmFsdWUpO1xuICAgICAgICAgIG9uQ2hhbmdlRm4uYmluZCh0aGlzKShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlbWVudC51cGRhdGVTdG9yYWdlKFxuICAgICAgICAgICAgdGhpcy5nZXRJdGVtcygpLFxuICAgICAgICAgICAgU3RvcmFnZU5hbWVzLmRhdGFcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge0l0ZW19IGZyb20gXCIuLi91dGlscy9pbnRlcmZhY2VzL2l0ZW0uaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VNYW5hZ2VtZW50IHtcbiAgICBzdGF0aWMgdXBkYXRlU3RvcmFnZShkYXRhOiBJdGVtW10sIHN0b3JhZ2VOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZU5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGF0YUZyb21TdG9yYWdlKHN0b3JhZ2VOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZU5hbWUpISk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE9ic2VydmVET00ge1xuICAgIHN0YXRpYyBvYnNlcnZlID0gKCgpID0+IHtcbiAgICAgICAgdmFyIE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcjtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKE11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWZpbmUgYSBuZXcgb2JzZXJ2ZXJcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKVxuXG4gICAgICAgICAgICAgICAgLy8gaGF2ZSB0aGUgb2JzZXJ2ZXIgb2JzZXJ2ZSBvYmogZm9yIGNoYW5nZXMgaW4gY2hpbGRyZW5cbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIG11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKClcbn0iLCJpbXBvcnQge1NlY3Rpb25OYW1lc30gZnJvbSBcIi4uL2VudW1zL3NlY3Rpb24tbmFtZXMuZW51bVwiO1xuXG5leHBvcnQgY29uc3QgQVBQX0NPTkZJRyA9IHtcbiAgICBzZWN0aW9uQ29sb3JzOiBbXCIjRURGRkU5XCIsIFwiI0RERkZENlwiLCBcIiNDRUZGQzNcIl0sXG4gICAgc2VjdGlvbk5hbWVzOiBTZWN0aW9uTmFtZXMsXG59O1xuIiwiaW1wb3J0IHsgSURTIH0gZnJvbSBcIi4vaWRzLmNvbnN0XCI7XG5pbXBvcnQgeyBJVEVNX0JVVFRPTl9OQU1FUyB9IGZyb20gXCIuLi9lbnVtcy9pdGVtLWJ1dHRvbi1uYW1lcy5lbnVtXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaXRlbS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNlY3Rpb25OYW1lcyB9IGZyb20gXCIuLi9lbnVtcy9zZWN0aW9uLW5hbWVzLmVudW1cIjtcblxuZXhwb3J0IGNvbnN0IERPTV9QQVRURVJOUyA9IHtcbiAgYm9keVBhdHRlcm46IGA8bmF2IGNsYXNzPVwibWVudVwiPjxidXR0b24gY2xhc3M9XCJtZW51X19idXR0b25cIiBpZD1cIiR7SURTLml0ZW1BZGRCdXR0b259XCIgdHlwZT1cImJ1dHRvblwiPkFkZCBuZXcgaXRlbTwvYnV0dG9uPjwvbmF2PjxtYWluIGNsYXNzPVwibWFpblwiPjwvbWFpbj5gLFxuICBpdGVtUGF0dGVybjogKGRhdGE6IEl0ZW0pID0+XG4gICAgYDxsaSBjbGFzcz1cIml0ZW1cIiBpZD1cIiR7ZGF0YS5pZH1cIj4ke2l0ZW1EZXNjcmlwdGlvbihcbiAgICAgIGRhdGFcbiAgICApfSR7aXRlbUJ1dHRvbnMoKX08L2xpPmAsXG4gIHNlY3Rpb25QYXR0ZXJuOiAobmFtZTogU2VjdGlvbk5hbWVzKSA9PlxuICAgIGA8c2VjdGlvbiBjbGFzcz1cIm1haW5fX3NlY3Rpb25cIj48aDE+JHtuYW1lfTwvaDE+PHVsIGNsYXNzPVwibWFpbl9fc2VjdGlvbi0tYXJlYVwiIGlkPVwiJHtuYW1lfVwiPjwvdWw+PC9zZWN0aW9uPmAsXG59O1xuXG5jb25zdCBpdGVtQnV0dG9ucyA9ICgpID0+XG4gIGA8ZGl2IGNsYXNzPVwiaXRlbV9fYnV0dG9uc1wiIGlkPVwiaXRlbS1idXR0b25zXCI+PGJ1dHRvbiBpZD1cIiR7SURTLml0ZW1Nb2RlQnV0dG9ufVwiPiR7SVRFTV9CVVRUT05fTkFNRVMuZWRpdE1vZGV9PC9idXR0b24+IDxidXR0b24gaWQ9XCIke0lEUy5pdGVtRGVsZXRlQnV0dG9ufVwiPiR7SVRFTV9CVVRUT05fTkFNRVMuZGVsZXRlfTwvYnV0dG9uPjwvZGl2PmA7XG5jb25zdCBpdGVtRGVzY3JpcHRpb24gPSAoZGF0YTogSXRlbSkgPT5cbiAgYDxzcGFuPklkOiAke2RhdGEuaWR9PC9zcGFuPjxzcGFuIGNsYXNzPVwiaXRlbV9fZGVzY3JpcHRpb25cIiBpZD1cIiR7SURTLml0ZW1EZXNjcmlwdGlvbn1cIj4ke2RhdGEuZGVzY3JpcHRpb259PC9zcGFuPmA7XG4iLCJleHBvcnQgY29uc3QgSURTID0ge1xuICBpdGVtRGVsZXRlQnV0dG9uOiBcIml0ZW0tZGVsZXRlLWJ1dHRvblwiLFxuICBpdGVtTW9kZUJ1dHRvbjogXCJpdGVtLW1vZGUtYnV0dG9uXCIsXG4gIGl0ZW1CdXR0b25zOiBcIml0ZW0tYnV0dG9uc1wiLFxuICBpdGVtRGVzY3JpcHRpb246IFwiaXRlbS1kZXNjcmlwdGlvblwiLFxuICBpdGVtQWRkQnV0dG9uOiAnaXRlbS1hZGQtYnV0dG9uJ1xufTtcblxuIiwiZXhwb3J0IGVudW0gSVRFTV9CVVRUT05fTkFNRVMgIHtcbiAgZWRpdE1vZGU9IFwiRWRpdCBNb2RlXCIsXG4gIHJlYWRNb2RlPSBcIlJlYWQgTW9kZVwiLFxuICBkZWxldGU9IFwiRGVsZXRlXCIsXG4gIHNhdmU9IFwiU2F2ZVwiLFxufTtcbiIsImV4cG9ydCBlbnVtIEl0ZW1Nb2RlbEZ1bmN0aW9uTmFtZXMgIHtcbiAgYWRkTWFueT0gXCJhZGRNYW55XCIsXG4gIGFkZE9uZT0gXCJhZGRPbmVcIixcbiAgdXBkYXRlPSBcInVwZGF0ZVwiLFxuICBkZWxldGU9IFwiZGVsZXRlXCIsXG59O1xuIiwiZXhwb3J0IGVudW0gU2VjdGlvbk5hbWVzIHsgbmV3ID0gXCJuZXdcIiwgaW5Qcm9ncmVzcyA9IFwiaW5Qcm9ncmVzc1wiLCBkb25lID0gXCJkb25lXCIgfVxuIiwiZXhwb3J0IGVudW0gU3RvcmFnZU5hbWVzICB7XG4gIGRhdGE9IFwiZGF0YVwiLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwiLi9hcHAvYXBwbGljYXRpb25cIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgYXBwID0gbmV3IEFwcGxpY2F0aW9uKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9