import { Error, Rule } from "./Validator";
import { getRule } from "../rules/ValidateRule";
import FieldError from "../errors/FieldError";
import EventDispatcher from "../event-dispatcher/EventDispatcher";
import validator from "../index";
import { Config } from "../validatorConfig/config";
import { FieldValidationError } from "./Form";

class Field
{
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
        this.element.addEventListener('input', () => {
            this._eventDispatcher.trigger('formInputChange', { field: this, value: this.element.value });
            if (this._config?.validateByFormChange) {
                //TODO: проблема: ошибки не перерисовываются, если не срабатывает событие formHasErrors
                this.validate();
                if (this._errors.length > 0) {
                    const fieldError: FieldValidationError = {
                        fieldName: this.getName(),
                        errors: this._errors,
                    }
                    this._eventDispatcher.trigger('formHasErrors', {errors: [fieldError]})
                }
            }
        });
    }

    get element(): HTMLInputElement {
        return this._$element;
    }

    set element(element: HTMLInputElement) {
        this._$element = element;
    }

    getName = () => {
        const name = this._$element.getAttribute('name');

        if (typeof name === undefined || !name) {
            throw new FieldError("Field is not contain an attribute \"name\"!");
        }

        return name;
    }

    getErrors = () => {
        return this._errors;
    }

    validate = () => {
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