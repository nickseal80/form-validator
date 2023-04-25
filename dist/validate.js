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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Validator_1 = __importDefault(__webpack_require__(/*! ./validator/Validator */ \"./src/validator/Validator.ts\"));\nconst validator = {\n    config: undefined,\n    validator: null,\n    /**\n     * Метод добавления формы\n     *\n     * @param selector - css селектор формы\n     * @param config - параметры конфигурации (опционально)\n     * @returns Объект приложения\n     */\n    addForm: (selector, config) => {\n        validator.validator = new Validator_1.default(selector, config);\n        validator.config = validator.validator.config;\n        return validator.validator;\n    }\n};\nexports[\"default\"] = validator;\n// import \"./testForms/first-form\";\n__webpack_require__(/*! ./testForms/secondary-form */ \"./src/testForms/secondary-form.ts\");\n__webpack_require__(/*! ./testForms/password-form */ \"./src/testForms/password-form.ts\");\n\n\n//# sourceURL=webpack://seal-validator/./src/index.ts?");

/***/ }),

/***/ "./src/rules/ValidateRule.ts":
/*!***********************************!*\
  !*** ./src/rules/ValidateRule.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRule = exports.addRule = void 0;\nconst ruleObjs = __importStar(__webpack_require__(/*! ./index */ \"./src/rules/index.ts\"));\nconst mixRules = ruleObjs;\nconst addRule = (rule) => {\n    mixRules[rule.rule] = rule;\n};\nexports.addRule = addRule;\nconst getRule = (ruleName) => {\n    if (Object.keys(mixRules).find(rule => rule === ruleName)) {\n        return ruleObjs[ruleName];\n    }\n};\nexports.getRule = getRule;\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/ValidateRule.ts?");

/***/ }),

/***/ "./src/rules/index.ts":
/*!****************************!*\
  !*** ./src/rules/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.password = exports.float = exports.integer = exports.numeric = exports.minLength = exports.maxLength = exports.required = void 0;\nvar required_1 = __webpack_require__(/*! ./kit/required */ \"./src/rules/kit/required.ts\");\nObject.defineProperty(exports, \"required\", ({ enumerable: true, get: function () { return required_1.required; } }));\nvar maxLength_1 = __webpack_require__(/*! ./kit/maxLength */ \"./src/rules/kit/maxLength.ts\");\nObject.defineProperty(exports, \"maxLength\", ({ enumerable: true, get: function () { return maxLength_1.maxLength; } }));\nvar minLength_1 = __webpack_require__(/*! ./kit/minLength */ \"./src/rules/kit/minLength.ts\");\nObject.defineProperty(exports, \"minLength\", ({ enumerable: true, get: function () { return minLength_1.minLength; } }));\nvar numeric_1 = __webpack_require__(/*! ./kit/numeric */ \"./src/rules/kit/numeric.ts\");\nObject.defineProperty(exports, \"numeric\", ({ enumerable: true, get: function () { return numeric_1.numeric; } }));\nvar integer_1 = __webpack_require__(/*! ./kit/integer */ \"./src/rules/kit/integer.ts\");\nObject.defineProperty(exports, \"integer\", ({ enumerable: true, get: function () { return integer_1.integer; } }));\nvar float_1 = __webpack_require__(/*! ./kit/float */ \"./src/rules/kit/float.ts\");\nObject.defineProperty(exports, \"float\", ({ enumerable: true, get: function () { return float_1.float; } }));\nvar password_1 = __webpack_require__(/*! ./kit/password */ \"./src/rules/kit/password.ts\");\nObject.defineProperty(exports, \"password\", ({ enumerable: true, get: function () { return password_1.password; } }));\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/index.ts?");

/***/ }),

/***/ "./src/rules/kit/float.ts":
/*!********************************!*\
  !*** ./src/rules/kit/float.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.float = void 0;\nexports.float = {\n    rule: 'float',\n    validator: (value) => {\n        return /^(-?|[0-9]*[.,][0-9]+)$/.test(value);\n    },\n    defaultMessage: () => `Field is float`,\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/kit/float.ts?");

/***/ }),

/***/ "./src/rules/kit/integer.ts":
/*!**********************************!*\
  !*** ./src/rules/kit/integer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.integer = void 0;\nexports.integer = {\n    rule: 'integer',\n    validator: (value) => {\n        return /^(-?|\\d+)$/.test(value);\n    },\n    defaultMessage: () => `Field is integer`,\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/kit/integer.ts?");

/***/ }),

/***/ "./src/rules/kit/maxLength.ts":
/*!************************************!*\
  !*** ./src/rules/kit/maxLength.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.maxLength = void 0;\nexports.maxLength = {\n    rule: 'maxLength',\n    validator: (value, minLength) => {\n        return value.length <= minLength;\n    },\n    defaultMessage: (maxLength) => `field must be no more than ${maxLength} characters`,\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/kit/maxLength.ts?");

/***/ }),

/***/ "./src/rules/kit/minLength.ts":
/*!************************************!*\
  !*** ./src/rules/kit/minLength.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.minLength = void 0;\nexports.minLength = {\n    rule: 'minLength',\n    validator: (value, minLength) => {\n        return value.length >= minLength;\n    },\n    defaultMessage: (minLength) => `Field must be at least ${minLength} characters long`,\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/kit/minLength.ts?");

/***/ }),

/***/ "./src/rules/kit/numeric.ts":
/*!**********************************!*\
  !*** ./src/rules/kit/numeric.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.numeric = void 0;\nexports.numeric = {\n    rule: 'numeric',\n    validator: (value) => {\n        return /^(-?|[.,0-9]+)$/.test(value);\n    },\n    defaultMessage: () => `Field is numeric`,\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/kit/numeric.ts?");

/***/ }),

/***/ "./src/rules/kit/password.ts":
/*!***********************************!*\
  !*** ./src/rules/kit/password.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.password = void 0;\nconst ValidateRule_1 = __webpack_require__(/*! ../ValidateRule */ \"./src/rules/ValidateRule.ts\");\n/**\n * Плагин должен принимать ряд параметров, по которым необходимо валидировать пароль:\n * - minLength (number) - минимальная длина пароля\n * - uppercase (boolean) - пароль должен содержать прописные символы\n * - lowercase (boolean) - пароль должен содержать строчные символы\n * - number (boolean) - пароль должен содержать цифры\n * - symbols (boolean) - пароль должен содержать символы\n */\nexports.password = {\n    rule: 'password',\n    validator: (value, minLength, conditions) => {\n        const minLengthRule = (0, ValidateRule_1.getRule)('minLength');\n        const status = minLengthRule.validator(value, minLength);\n        // if (!status) {\n        //     return false;\n        // }\n        if (conditions) {\n            Object.keys(conditions).forEach(condition => {\n                if (conditions[condition]) {\n                    //\n                }\n            });\n        }\n        return true;\n    },\n    defaultMessage: (value) => {\n        return `Password must be at least ${value} characters long`;\n    }\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/kit/password.ts?");

/***/ }),

/***/ "./src/rules/kit/required.ts":
/*!***********************************!*\
  !*** ./src/rules/kit/required.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.required = void 0;\nexports.required = {\n    rule: 'required',\n    validator: (value) => {\n        if (!value) {\n            return false;\n        }\n        return value.length !== 0;\n    },\n    defaultMessage: () => \"It's a required field\",\n};\n\n\n//# sourceURL=webpack://seal-validator/./src/rules/kit/required.ts?");

/***/ }),

/***/ "./src/testForms/password-form.ts":
/*!****************************************!*\
  !*** ./src/testForms/password-form.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __importDefault(__webpack_require__(/*! ../index */ \"./src/index.ts\"));\nconst passwordFormValidator = index_1.default\n    .addForm('#password-form', { validateByFormChange: true });\npasswordFormValidator\n    .addField('#password', [\n    {\n        rule: 'password',\n        value: 7,\n        conditions: {\n            hasUppercase: true,\n            hasLowercase: false,\n            hasNumber: false,\n            hasSymbol: false,\n        }\n    }\n])\n    .on('formHasErrors', (evt) => {\n    console.log(evt.data.errors);\n});\n// .on('formInputChange', (evt) => {\n//     console.log(evt.data);\n// });\n\n\n//# sourceURL=webpack://seal-validator/./src/testForms/password-form.ts?");

/***/ }),

/***/ "./src/testForms/secondary-form.ts":
/*!*****************************************!*\
  !*** ./src/testForms/secondary-form.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __importDefault(__webpack_require__(/*! ../index */ \"./src/index.ts\"));\nconst testRule = {\n    rule: 'testRule',\n    validator: (value) => {\n        return value.length >= 4;\n    },\n    message: \"testRule\",\n};\nconst secondaryFormValidator = index_1.default\n    .addForm('#secondary-form', { validateByFormChange: true })\n    .addRule(testRule);\nsecondaryFormValidator\n    .addField('#numeric', [\n    {\n        rule: 'numeric',\n        message: 'Поле должно иметь цифровое значение',\n    },\n    {\n        rule: 'testRule',\n        message: 'joojjoo',\n    }\n])\n    .addField('#integer', [\n    {\n        rule: 'integer',\n    }\n])\n    .addField('#float', [\n    {\n        rule: 'float',\n        message: \"Поле должно содержать дробное значение\",\n    }\n])\n    .on('formHasErrors', (evt) => {\n    console.log(evt.data.errors);\n})\n    .on('formInputChange', (evt) => {\n    console.log(evt.data);\n});\nconsole.log(secondaryFormValidator);\n\n\n//# sourceURL=webpack://seal-validator/./src/testForms/secondary-form.ts?");

/***/ }),

/***/ "./src/validator/Field.ts":
/*!********************************!*\
  !*** ./src/validator/Field.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst ValidateRule_1 = __webpack_require__(/*! ../rules/ValidateRule */ \"./src/rules/ValidateRule.ts\");\nconst FieldError_1 = __importDefault(__webpack_require__(/*! ../errors/FieldError */ \"./src/errors/FieldError.ts\"));\nconst index_1 = __importDefault(__webpack_require__(/*! ../index */ \"./src/index.ts\"));\nclass Field {\n    constructor(element, params, eventDispatcher) {\n        this._errors = [];\n        this.initListeners = () => {\n            this._errors = [];\n            this.element.addEventListener('input', () => {\n                var _a;\n                this._eventDispatcher.trigger('formInputChange', { field: this, value: this.element.value });\n                if ((_a = this._config) === null || _a === void 0 ? void 0 : _a.validateByFormChange) {\n                    this.validate();\n                    const fieldValError = {\n                        fieldName: this.getName(),\n                        errors: this._errors,\n                    };\n                    if (this._errors.length > 0) {\n                        this._eventDispatcher.trigger('formHasErrors', { errors: [fieldValError] });\n                    }\n                    this._eventDispatcher.trigger('validate', { field: this, errors: [fieldValError] });\n                }\n            });\n        };\n        this.getName = () => {\n            const name = this._$element.getAttribute('name');\n            if (typeof name === undefined || !name) {\n                throw new FieldError_1.default(\"Field is not contain an attribute \\\"name\\\"!\");\n            }\n            return name;\n        };\n        this.getErrors = () => {\n            return this._errors;\n        };\n        this.validate = () => {\n            this._errors = [];\n            this._rules.forEach(rule => {\n                let validateRule = (0, ValidateRule_1.getRule)(rule.rule);\n                if (typeof validateRule === \"undefined\" && rule.validator && typeof rule.validator === \"function\") {\n                    validateRule = rule;\n                }\n                if (!validateRule.validator(this._$element.value, rule.value, rule.conditions)) {\n                    const error = {\n                        rule: validateRule.rule,\n                        message: rule.message ? rule.message : validateRule.defaultMessage(rule.value),\n                    };\n                    this._errors.push(error);\n                }\n            });\n            return this._errors;\n        };\n        this.element = element;\n        this._rules = params;\n        this._eventDispatcher = eventDispatcher;\n        this._config = index_1.default.config;\n        this.initListeners();\n    }\n    get element() {\n        return this._$element;\n    }\n    set element(element) {\n        this._$element = element;\n    }\n}\nexports[\"default\"] = Field;\n\n\n//# sourceURL=webpack://seal-validator/./src/validator/Field.ts?");

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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst FormError_1 = __importDefault(__webpack_require__(/*! ../errors/FormError */ \"./src/errors/FormError.ts\"));\nconst config_1 = __webpack_require__(/*! ../validatorConfig/config */ \"./src/validatorConfig/config.ts\");\nconst Form_1 = __importDefault(__webpack_require__(/*! ./Form */ \"./src/validator/Form.ts\"));\nconst EventDispatcher_1 = __importDefault(__webpack_require__(/*! ../event-dispatcher/EventDispatcher */ \"./src/event-dispatcher/EventDispatcher.ts\"));\nconst ValidateRule_1 = __webpack_require__(/*! ../rules/ValidateRule */ \"./src/rules/ValidateRule.ts\");\nclass Validator {\n    constructor(selector, config) {\n        this.setForm = (selector) => {\n            const formEl = document.querySelector(selector);\n            if (!formEl) {\n                throw new FormError_1.default(`Form \\\"${selector}\\\" is not found!`);\n            }\n            if (!(formEl instanceof HTMLFormElement)) {\n                throw new FormError_1.default(`Form \\\"${selector}\\\" is not instantiable of HTMLFormElement`);\n            }\n            this._form = new Form_1.default(formEl, this._eventDispatcher);\n        };\n        this.on = (eventName, event) => {\n            this._eventDispatcher.on(eventName, event);\n            return this;\n        };\n        this.addField = (selector, params) => {\n            this._form.addField(selector, params);\n            return this;\n        };\n        this.addRule = (rule) => {\n            (0, ValidateRule_1.addRule)(rule);\n            return this;\n        };\n        this.getValidationErrors = () => {\n            return this._form.errors;\n        };\n        this._eventDispatcher = new EventDispatcher_1.default();\n        this.setForm(selector);\n        if (config) {\n            this._config = (0, config_1.getConfig)(config);\n        }\n        else {\n            this._config = (0, config_1.getDefaultConfig)();\n        }\n    }\n    get form() {\n        return this._form;\n    }\n    get config() {\n        return this._config;\n    }\n    get eventDispatcher() {\n        return this._eventDispatcher;\n    }\n}\nexports[\"default\"] = Validator;\n\n\n//# sourceURL=webpack://seal-validator/./src/validator/Validator.ts?");

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