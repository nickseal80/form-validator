import { Error, Rule } from "./Validator";
import { getRule } from "../rules/ValidateRule";
import FieldError from "../errors/FieldError";
import EventDispatcher from "../event-dispatcher/EventDispatcher";
import validator from "../index";
import { Config } from "../validatorConfig/config";
import { FieldValidationError } from "./Form";
import fieldError from "../errors/FieldError";

class Field {
    private _$element: HTMLInputElement;
    private _rules: Rule[];
    private _errors: Error[] = [];
    private _eventDispatcher: EventDispatcher;
    private _config: Config | undefined;

    constructor(element: HTMLInputElement, params: Rule[], eventDispatcher: EventDispatcher) {
        this.element = element;
        this._rules = params;
        this._eventDispatcher = eventDispatcher;
        this._config = validator.config;
        this.initListeners();
    }

    initListeners = () => {
        this._errors = [];
        this.element.addEventListener('input', () => {
            this._eventDispatcher.trigger('formInputChange', { field: this, value: this.element.value });
            if (this._config?.validateByFormChange) {
                this.validate();
                const fieldValError: FieldValidationError = {
                    fieldName: this.getName(),
                    errors: this._errors,
                }
                if (this._errors.length > 0) {
                    this._eventDispatcher.trigger('formHasErrors', { errors: [fieldValError] })
                }

                this._eventDispatcher.trigger('validate', { field: this, errors: [fieldValError] });
            }
        });
    }

    get element(): HTMLInputElement {
        return this._$element;
    }

    set element(element: HTMLInputElement) {
        this._$element = element;
    }

    getName = (): string => {
        const name = this._$element.getAttribute('name');

        if (typeof name === undefined || !name) {
            throw new FieldError("Field is not contain an attribute \"name\"!");
        }

        return name;
    }

    getErrors = (): Error[] => {
        return this._errors;
    }

    validate = (): Error[] => {
        this._errors = [];
        this._rules.forEach(rule => {
            let validateRule = getRule(rule.rule);
            if (typeof validateRule === "undefined" && rule.validator && typeof rule.validator === "function") {
                validateRule = rule;
            }
            if (!validateRule.validator(this._$element.value, rule.value)) {
                const error = {
                    rule: validateRule.rule,
                    message: rule.message ? rule.message : validateRule.defaultMessage(rule.value),
                }
                this._errors.push(error);
            }
        });

        return this._errors;
    }
}

export default Field;