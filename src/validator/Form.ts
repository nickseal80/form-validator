import Field from "./Field";
import { Rule, Error } from "./Validator";
import FormError from "../errors/FormError";
import eventDispatcher from "../event-dispatcher/EventDispatcher";

export type FieldValidationError = {
    fieldName: string,
    errors: Error[],
}

class Form {
    private _$element: HTMLFormElement;
    private _fields: Field[] = [];
    private _$submit: Element;
    private _errors: FieldValidationError[] = []; // TODO: add type

    constructor(element: HTMLFormElement) {
        this.element = element;
        this.setSubmitElement();
        this.addListeners();
    }

    get element(): HTMLFormElement {
        return this._$element;
    }

    set element(value: HTMLFormElement) {
        this._$element = value;
    }

    get errors(): FieldValidationError[] {
        return this._errors;
    }

    addListeners = () => {
        this._$submit.addEventListener('click', (evt) => {
            evt.preventDefault();

            this._errors = [];
            this._fields.forEach(field => {
                const errors = field.validate();
                if (errors.length > 0) {
                    const fieldError: FieldValidationError = {
                        fieldName: field.getName(),
                        errors: field.getErrors(),
                    }
                    this._errors.push(fieldError);
                }
            });

            if (this._errors.length > 0) {
                eventDispatcher.trigger('formHasErrors', { errors: this._errors })
            }

            if (this._errors.length === 0) {
                this._$element.submit();
            }
        })
    }

    setSubmitElement = () => {
        const submitEl = this._$element.querySelector('[type="submit"]');

        if (!submitEl) {
            console.warn(`Form does not contain a submit element!`);
            return;
        }

        this._$submit = submitEl;
    }

    addField = (selector: string, params: Rule[]) => {
        const fieldEl = this._$element.querySelector(selector) as HTMLInputElement;

        if (!fieldEl) {
            throw new FormError(`Field \"${selector}\" is not found in this form!`);
        }

        const field = new Field(fieldEl, params);
        this._fields.push(field);
    }
}

export default Form;