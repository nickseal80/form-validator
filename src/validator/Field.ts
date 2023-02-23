import { Error, Rule } from "./Validator";
import { getRule } from "../rules/ValidateRule";
import FieldError from "../errors/FieldError";

class Field
{
    private _$element: HTMLInputElement;
    private _rules: Rule[];
    private _errors: Error[] = [];

    constructor(element: HTMLInputElement, params: Rule[]) {
        this.element = element;
        this._rules = params;
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
                    rule: validateRule.name,
                    message: rule.message ? rule.message : validateRule.defaultMessage(rule.value),
                }
                this._errors.push(error);
            }
        });

        return this._errors;
    }
}

export default Field;