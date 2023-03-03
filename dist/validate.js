/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["seal-validator"] = factory();
	else
		root["seal-validator"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/errors/Error.ts":
/*!*****************************!*\
  !*** ./src/errors/Error.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass BaseError extends Error {\n    /**\n     * @param {string} message\n     */\n    constructor(message) {\n        super(message);\n        /**\n         * @param {string} message\n         */\n        this.setMessage = (message) => {\n            this.message = message;\n        };\n        this.name = \"Error\";\n    }\n}\nexports[\"default\"] = BaseError;\n\n\n//# sourceURL=webpack://seal-validator/./src/errors/Error.ts?");

/***/ }),

/***/ "./src/errors/FieldError.ts":
/*!**********************************!*\
  !*** ./src/errors/FieldError.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Error_1 = __importDefault(__webpack_require__(/*! ./Error */ \"./src/errors/Error.ts\"));\nclass FieldError extends Error_1.default {\n    constructor(message) {\n        super(message);\n        this.name = \"FieldError\";\n    }\n}\nexports[\"default\"] = FieldError;\n\n\n//# sourceURL=webpack://seal-validator/./src/errors/FieldError.ts?");

/***/ }),

/***/ "./src/errors/FormError.ts":
/*!*********************************!*\
  !*** ./src/errors/FormError.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Error_1 = __importDefault(__webpack_require__(/*! ./Error */ \"./src/errors/Error.ts\"));\nclass FormError extends Error_1.default {\n    constructor(message) {\n        super(message);\n        this.name = \"FormError\";\n    }\n}\nexports[\"default\"] = FormError;\n\n\n//# sourceURL=webpack://seal-validator/./src/errors/FormError.ts?");

/***/ }),

/***/ "./src/event-dispatcher/EventDispatcher.ts":
/*!*************************************************!*\
  !*** ./src/event-dispatcher/EventDispatcher.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass EventDispatcher {\n    constructor() {\n        this.events = {};\n        this.on = (eventName, callback) => {\n            const handlers = this.events[eventName] || [];\n            handlers.push(callback);\n            this.events[eventName] = handlers;\n        };\n        this.trigger = (eventName, data) => {\n            const handlers = this.events[eventName];\n            if (!handlers || handlers.length < 1) {\n                return;\n            }\n            const event = { type: eventName, data };\n            Array.prototype.forEach.call(handlers, (handler) => {\n                handler(event);\n            });\n        };\n    }\n}\nexports[\"default\"] = EventDispatcher;\n\n\n//# sourceURL=webpack://seal-validator/./src/event-dispatcher/EventDispatcher.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Validator_1 = __importDefault(__webpack_require__(/*! ./validator/Validator */ \"./src/validator/Validator.ts\"));\nconst validator = {\n    config: undefined,\n    validator: null,\n    /**\n     * Метод добавления формы\n     *\n     * @param selector - css селектор формы\n     * @param config - параметры конфигурации (опционально)\n     * @returns Объект приложения\n     */\n    addForm: (selector, config) => {\n        validator.config = config;\n        validator.validator = new Validator_1.default(selector, config);\n        return validator.validator;\n    }\n};\nexports[\"default\"] = validator;\n__webpack_require__(/*! ./testForms/first-form */ \"./src/testForms/first-form.ts\");\n__webpack_require__(/*! ./testForms/secondary-form */ \"./src/testForms/secondary-form.ts\");\n\n\n//# sourceURL=webpack://seal-validator/./src/index.ts?");

/***/ }),

/***/ "./src/rules/ValidateRule.ts":
/*!***********************************!*\
  !*** ./src/rules/ValidateRule.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRule = void 0;\nconst rules_1 = __webpack_require__(/*! ./rules */ \"./src/rules/rules.ts\");\nconst ruleObjs = __importStar(__webpack_require__(/*! ./index */ \"./src/rules/index.ts\"));\nconst getRule = (ruleName) => {\n    //TODO: Выпилить массив \"rules\" по возможности\n    if (rules_1.rules.find(rule => rule === ruleName)) {\n        // @ts-ignore\n        return ruleObjs[ruleName];\n    }\n};\nexports.getRule = getRule;\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/ValidateRule.ts?");

/***/ }),

/***/ "./src/rules/float.ts":
/*!****************************!*\
  !*** ./src/rules/float.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.float = void 0;\nexports.float = {\n    rule: 'float',\n    validator: (value) => {\n        return /^(-?|[0-9]*[.,][0-9]+)$/.test(value);\n    },\n    defaultMessage: () => `Field is float`,\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/float.ts?");

/***/ }),

/***/ "./src/rules/index.ts":
/*!****************************!*\
  !*** ./src/rules/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.float = exports.integer = exports.numeric = exports.minLength = exports.maxLength = exports.required = void 0;\nvar required_1 = __webpack_require__(/*! ./required */ \"./src/rules/required.ts\");\nObject.defineProperty(exports, \"required\", ({ enumerable: true, get: function () { return required_1.required; } }));\nvar maxLength_1 = __webpack_require__(/*! ./maxLength */ \"./src/rules/maxLength.ts\");\nObject.defineProperty(exports, \"maxLength\", ({ enumerable: true, get: function () { return maxLength_1.maxLength; } }));\nvar minLength_1 = __webpack_require__(/*! ./minLength */ \"./src/rules/minLength.ts\");\nObject.defineProperty(exports, \"minLength\", ({ enumerable: true, get: function () { return minLength_1.minLength; } }));\nvar numeric_1 = __webpack_require__(/*! ./numeric */ \"./src/rules/numeric.ts\");\nObject.defineProperty(exports, \"numeric\", ({ enumerable: true, get: function () { return numeric_1.numeric; } }));\nvar integer_1 = __webpack_require__(/*! ./integer */ \"./src/rules/integer.ts\");\nObject.defineProperty(exports, \"integer\", ({ enumerable: true, get: function () { return integer_1.integer; } }));\nvar float_1 = __webpack_require__(/*! ./float */ \"./src/rules/float.ts\");\nObject.defineProperty(exports, \"float\", ({ enumerable: true, get: function () { return float_1.float; } }));\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/index.ts?");

/***/ }),

/***/ "./src/rules/integer.ts":
/*!******************************!*\
  !*** ./src/rules/integer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.integer = void 0;\nexports.integer = {\n    rule: 'integer',\n    validator: (value) => {\n        return /^(-?|\\d+)$/.test(value);\n    },\n    defaultMessage: () => `Field is integer`,\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/integer.ts?");

/***/ }),

/***/ "./src/rules/maxLength.ts":
/*!********************************!*\
  !*** ./src/rules/maxLength.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.maxLength = void 0;\nexports.maxLength = {\n    rule: 'maxLength',\n    validator: (value, minLength) => {\n        return value.length <= minLength;\n    },\n    defaultMessage: (maxLength) => `field must be no more than ${maxLength} characters`,\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/maxLength.ts?");

/***/ }),

/***/ "./src/rules/minLength.ts":
/*!********************************!*\
  !*** ./src/rules/minLength.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.minLength = void 0;\nexports.minLength = {\n    rule: 'minLength',\n    validator: (value, minLength) => {\n        return value.length >= minLength;\n    },\n    defaultMessage: (minLength) => `Field must be at least ${minLength} characters long`,\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/minLength.ts?");

/***/ }),

/***/ "./src/rules/numeric.ts":
/*!******************************!*\
  !*** ./src/rules/numeric.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.numeric = void 0;\nexports.numeric = {\n    rule: 'numeric',\n    validator: (value) => {\n        return /^(-?|[.,0-9]+)$/.test(value);\n    },\n    defaultMessage: () => `Field is numeric`,\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/numeric.ts?");

/***/ }),

/***/ "./src/rules/required.ts":
/*!*******************************!*\
  !*** ./src/rules/required.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.required = void 0;\nexports.required = {\n    rule: 'required',\n    validator: (value) => {\n        if (!value) {\n            return false;\n        }\n        if (value.length === 0) {\n            return false;\n        }\n        return true;\n    },\n    defaultMessage: () => \"It's a required field\",\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/required.ts?");

/***/ }),

/***/ "./src/rules/rules.ts":
/*!****************************!*\
  !*** ./src/rules/rules.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rules = void 0;\nexports.rules = [\n    'required',\n    'minLength',\n    'maxLength',\n    'minValue',\n    'maxValue',\n    'numeric',\n    'integer',\n    'float',\n    'password',\n    'between',\n];\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/rules.ts?");

/***/ }),

/***/ "./src/testForms/first-form.ts":
/*!*************************************!*\
  !*** ./src/testForms/first-form.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __importDefault(__webpack_require__(/*! ../index */ \"./src/index.ts\"));\nconst firstFormValidator = index_1.default.addForm('#form', { validateByFormChange: true });\nfirstFormValidator\n    .addField('#name', [\n    {\n        rule: 'required',\n        message: \"Введите название\",\n    },\n    {\n        rule: 'minLength',\n        value: 2,\n        message: \"Название не может быть менее 2 символов\",\n    },\n    {\n        rule: 'maxLength',\n        value: 12,\n        message: \"Название не должно превышать 12 символов\",\n    }\n])\n    .addField('#description', [\n    {\n        rule: 'required',\n    },\n    {\n        rule: 'minLength',\n        value: 5,\n        message: \"Не менее 5 символов\",\n    },\n    {\n        rule: 'customMaxLength',\n        validator: () => {\n            const descriptionElement = firstFormValidator.form.getFieldByName('description').element;\n            return descriptionElement.value.length <= 10;\n        },\n        message: \"Описание не должно превышать 10 символов\",\n    }\n])\n    .on('formHasErrors', (evt) => {\n    //TODO: Убрать эту жесть после тестов!!!\n    const errors = evt.data.errors;\n    const errorsContainers = document.querySelectorAll('.has-errors');\n    if (errorsContainers.length > 0) {\n        errorsContainers.forEach(container => {\n            container.innerHTML = '';\n        });\n    }\n    if (errors.some((error) => error.fieldName === 'name')) {\n        const errContainer = document.querySelector('#name-validation-errors');\n        if (errContainer) {\n            errContainer.innerHTML = '';\n            const nameErrorsObj = errors.find((error) => error.fieldName === 'name');\n            nameErrorsObj.errors.forEach((fieldError) => {\n                const fieldErrorContainer = document.createElement('div');\n                fieldErrorContainer.classList.add('text-danger');\n                fieldErrorContainer.innerText = fieldError.message;\n                errContainer.appendChild(fieldErrorContainer);\n            });\n        }\n    }\n    if (errors.some((error) => error.fieldName === 'description')) {\n        const dErrContainer = document.querySelector('#description-validation-errors');\n        if (dErrContainer) {\n            dErrContainer.innerHTML = '';\n            const nameErrorsObj = errors.find((error) => error.fieldName === 'description');\n            nameErrorsObj.errors.forEach((fieldError) => {\n                const fieldErrorContainer = document.createElement('div');\n                fieldErrorContainer.classList.add('text-danger');\n                fieldErrorContainer.innerText = fieldError.message;\n                dErrContainer.appendChild(fieldErrorContainer);\n            });\n        }\n    }\n});\nconsole.log(firstFormValidator);\n\n\n//# sourceURL=webpack://seal-validator/./src/testForms/first-form.ts?");

/***/ }),

/***/ "./src/testForms/secondary-form.ts":
/*!*****************************************!*\
  !*** ./src/testForms/secondary-form.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __importDefault(__webpack_require__(/*! ../index */ \"./src/index.ts\"));\nconst secondaryFormValidator = index_1.default.addForm('#secondary-form', { validateByFormChange: true });\nsecondaryFormValidator\n    .addField('#numeric', [\n    {\n        rule: 'numeric',\n        message: 'Поле должно иметь цифровое значение',\n    }\n])\n    .addField('#integer', [\n    {\n        rule: 'integer',\n    }\n])\n    .addField('#float', [\n    {\n        rule: 'float',\n        message: \"Поле должно содержать дробное значение\",\n    }\n])\n    .on('formHasErrors', (evt) => {\n    console.log(evt.data.errors);\n})\n    .on('formInputChange', (evt) => {\n    console.log(evt.data);\n});\nconsole.log(secondaryFormValidator);\n\n\n//# sourceURL=webpack://seal-validator/./src/testForms/secondary-form.ts?");

/***/ }),

/***/ "./src/validator/Field.ts":
/*!********************************!*\
  !*** ./src/validator/Field.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst ValidateRule_1 = __webpack_require__(/*! ../rules/ValidateRule */ \"./src/rules/ValidateRule.ts\");\nconst FieldError_1 = __importDefault(__webpack_require__(/*! ../errors/FieldError */ \"./src/errors/FieldError.ts\"));\nconst index_1 = __importDefault(__webpack_require__(/*! ../index */ \"./src/index.ts\"));\nclass Field {\n    constructor(element, params, eventDispatcher) {\n        this._errors = [];\n        this.initListeners = () => {\n            this.element.addEventListener('input', () => {\n                var _a;\n                this._eventDispatcher.trigger('formInputChange', { field: this, value: this.element.value });\n                if ((_a = this._config) === null || _a === void 0 ? void 0 : _a.validateByFormChange) {\n                    //TODO: проблема: ошибки не перерисовываются, если не срабатывает событие formHasErrors\n                    this.validate();\n                    if (this._errors.length > 0) {\n                        const fieldError = {\n                            fieldName: this.getName(),\n                            errors: this._errors,\n                        };\n                        this._eventDispatcher.trigger('formHasErrors', { errors: [fieldError] });\n                    }\n                }\n            });\n        };\n        this.getName = () => {\n            const name = this._$element.getAttribute('name');\n            if (typeof name === undefined || !name) {\n                throw new FieldError_1.default(\"Field is not contain an attribute \\\"name\\\"!\");\n            }\n            return name;\n        };\n        this.getErrors = () => {\n            return this._errors;\n        };\n        this.validate = () => {\n            this._errors = [];\n            this._rules.forEach(rule => {\n                let validateRule = (0, ValidateRule_1.getRule)(rule.rule);\n                if (typeof validateRule === \"undefined\" && rule.validator && typeof rule.validator === \"function\") {\n                    validateRule = rule;\n                }\n                if (!validateRule.validator(this._$element.value, rule.value)) {\n                    const error = {\n                        rule: validateRule.rule,\n                        message: rule.message ? rule.message : validateRule.defaultMessage(rule.value),\n                    };\n                    this._errors.push(error);\n                }\n            });\n            return this._errors;\n        };\n        this.element = element;\n        this._rules = params;\n        this._eventDispatcher = eventDispatcher;\n        this._config = index_1.default.config;\n        this.initListeners();\n    }\n    get element() {\n        return this._$element;\n    }\n    set element(element) {\n        this._$element = element;\n    }\n}\nexports[\"default\"] = Field;\n\n\n//# sourceURL=webpack://seal-validator/./src/validator/Field.ts?");

/***/ }),

/***/ "./src/validator/Form.ts":
/*!*******************************!*\
  !*** ./src/validator/Form.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Field_1 = __importDefault(__webpack_require__(/*! ./Field */ \"./src/validator/Field.ts\"));\nconst FormError_1 = __importDefault(__webpack_require__(/*! ../errors/FormError */ \"./src/errors/FormError.ts\"));\nconst FieldError_1 = __importDefault(__webpack_require__(/*! ../errors/FieldError */ \"./src/errors/FieldError.ts\"));\nclass Form {\n    constructor(element, eventDispatcher) {\n        this._fields = [];\n        this._errors = []; // TODO: add type\n        this.getFieldByName = (name) => {\n            const field = this._fields.find(field => field.element.getAttribute('name') === name);\n            if (!field) {\n                throw new FieldError_1.default(`Field with name \\\"${name}\\\" is not found!`);\n            }\n            return field;\n        };\n        this.addListeners = () => {\n            this._$submit.addEventListener('click', (evt) => {\n                evt.preventDefault();\n                this.validate();\n                // if (this._errors.length === 0) {\n                //     this._$element.submit();\n                // }\n            });\n        };\n        this.validate = () => {\n            this._errors = [];\n            this._fields.forEach(field => {\n                const errors = field.validate();\n                if (errors.length > 0) {\n                    const fieldError = {\n                        fieldName: field.getName(),\n                        errors: field.getErrors(),\n                    };\n                    this._errors.push(fieldError);\n                }\n            });\n            if (this._errors.length > 0) {\n                this._eventDispatcher.trigger('formHasErrors', { errors: this._errors });\n            }\n        };\n        this.setSubmitElement = () => {\n            const submitEl = this._$element.querySelector('[type=\"submit\"]');\n            if (!submitEl) {\n                console.warn(`Form does not contain a submit element!`);\n                return;\n            }\n            this._$submit = submitEl;\n        };\n        this.addField = (selector, params) => {\n            const fieldEl = this._$element.querySelector(selector);\n            if (!fieldEl) {\n                throw new FormError_1.default(`Field \\\"${selector}\\\" is not found in this form!`);\n            }\n            const field = new Field_1.default(fieldEl, params, this._eventDispatcher);\n            this._fields.push(field);\n        };\n        this.element = element;\n        this.setSubmitElement();\n        this.addListeners();\n        this._eventDispatcher = eventDispatcher;\n    }\n    get element() {\n        return this._$element;\n    }\n    set element(value) {\n        this._$element = value;\n    }\n    get errors() {\n        return this._errors;\n    }\n}\nexports[\"default\"] = Form;\n\n\n//# sourceURL=webpack://seal-validator/./src/validator/Form.ts?");

/***/ }),

/***/ "./src/validator/Validator.ts":
/*!************************************!*\
  !*** ./src/validator/Validator.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst FormError_1 = __importDefault(__webpack_require__(/*! ../errors/FormError */ \"./src/errors/FormError.ts\"));\nconst config_1 = __webpack_require__(/*! ../validatorConfig/config */ \"./src/validatorConfig/config.ts\");\nconst Form_1 = __importDefault(__webpack_require__(/*! ./Form */ \"./src/validator/Form.ts\"));\nconst EventDispatcher_1 = __importDefault(__webpack_require__(/*! ../event-dispatcher/EventDispatcher */ \"./src/event-dispatcher/EventDispatcher.ts\"));\nclass Validator {\n    constructor(selector, config) {\n        this.setForm = (selector) => {\n            const formEl = document.querySelector(selector);\n            if (!formEl) {\n                throw new FormError_1.default(`Form \\\"${selector}\\\" is not found!`);\n            }\n            if (!(formEl instanceof HTMLFormElement)) {\n                throw new FormError_1.default(`Form \\\"${selector}\\\" is not instantiable of HTMLFormElement`);\n            }\n            this._form = new Form_1.default(formEl, this._eventDispatcher);\n        };\n        this.on = (eventName, event) => {\n            this._eventDispatcher.on(eventName, event);\n            return this;\n        };\n        this.addField = (selector, params) => {\n            this._form.addField(selector, params);\n            return this;\n        };\n        this.getValidationErrors = () => {\n            return this._form.errors;\n        };\n        this._eventDispatcher = new EventDispatcher_1.default();\n        this.setForm(selector);\n        if (config) {\n            this._config = (0, config_1.getConfig)(config);\n        }\n        else {\n            this._config = (0, config_1.getDefaultConfig)();\n        }\n    }\n    get form() {\n        return this._form;\n    }\n    get eventDispatcher() {\n        return this._eventDispatcher;\n    }\n}\nexports[\"default\"] = Validator;\n\n\n//# sourceURL=webpack://seal-validator/./src/validator/Validator.ts?");

/***/ }),

/***/ "./src/validatorConfig/config.ts":
/*!***************************************!*\
  !*** ./src/validatorConfig/config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getDefaultConfig = exports.getConfig = exports.config = void 0;\nexports.config = {\n    validateDuringFormCompletion: true,\n    showErrorsAlerts: false,\n    showErrorsUnderField: false,\n    throwValidationErrors: true,\n    disableSubmitWhereHasErrors: false,\n    validateByFormChange: false,\n};\nconst getConfig = (extConfig) => {\n    const keys = Object.keys(exports.config);\n    const res = Object.assign({}, exports.config);\n    keys.forEach((key) => {\n        if (extConfig.hasOwnProperty(key)) {\n            res[key] = extConfig[key];\n        }\n    });\n    return res;\n};\nexports.getConfig = getConfig;\nconst getDefaultConfig = () => {\n    return exports.config;\n};\nexports.getDefaultConfig = getDefaultConfig;\n\n\n//# sourceURL=webpack://seal-validator/./src/validatorConfig/config.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});