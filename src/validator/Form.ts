import Field from "./Field";
import { Rule, Error } from "./Validator";
import FormError from "../errors/FormError";
import FieldError from "../errors/FieldError";
import EventDispatcher from "../event-dispatcher/EventDispatcher";

export type FieldValidationError = {
    fieldName: string,
    errors: Error[],
}

class Form {
    private _$element: HTMLFormElement;
    private _fields: Field[] = [];
    private _$submit: Element;
    private _errors: FieldValidationError[] = []; // TODO: add type
    private readonly _eventDispatcher: EventDispatcher;

    constructor(element: HTMLFormElement, eventDispatcher: EventDispatcher) {
        this.element = element;
        this.setSubmitElement();
        this.addListeners();
        this._eventDispatcher = eventDispatcher;
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

    getFieldByName = (name: string): Field => {
        const field = this._fields.find(field => field.element.getAttribute('name') === name);

        if (!field) {
            throw new FieldError(`Field with name \"${name}\" is not found!`);
        }

        return field;
    }

    addListeners = () => {
        this._$submit.addEventListener('click', (evt) => {
            evt.preventDefault();

            this.validate();

            // if (this._errors.length === 0) {
            //     this._$element.submit();
            // }
        })
    }

    validate = () => {
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
            this._eventDispatcher.trigger('formHasErrors', { errors: this._errors })
        }
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

        const field = new Field(fieldEl, params, this._eventDispatcher);
        this._fields.push(field);
    }
}

export default Form;