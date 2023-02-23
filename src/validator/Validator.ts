import FormError from "../errors/FormError";
import { Config, getConfig, getDefaultConfig } from "../validatorConfig/config";
import Form from "./Form";
import eventDispatcher, { EventCallback, ValidationEvent } from "../event-dispatcher/EventDispatcher";

export interface Rule
{
    rule: string,
    value?: number,
    message?: string,
    validator?: () => boolean,
    options?: any[], //опции для отдельного поля
}

export interface Error
{
    rule: string,
    message: string,
}

class Validator
{
    private form: Form;
    private config: Config

    constructor(selector: string, config?: Config) {
        this.setForm(selector);
        if (config) {
            this.config = getConfig(config);
        } else {
            this.config = getDefaultConfig();
        }
    }

    setForm = (selector: string) => {
        const formEl = document.querySelector(selector);

        if (!formEl) {
            throw new FormError(`Form \"${selector}\" is not found!`);
        }

        if (!(formEl instanceof HTMLFormElement)) {
            throw new FormError(`Form \"${selector}\" is not instantiable of HTMLFormElement`);
        }

        this.form = new Form(formEl);
        eventDispatcher.on('formHasErrors', (evt) => {
            //
        })
    }

    on = (eventName: string, event: EventCallback) => {
        eventDispatcher.on(eventName, event);

        return this;
    }

    addField = (selector: string, params: Rule[]): Validator => {
        this.form.addField(selector, params);

        return this;
    }

    getValidationErrors = () => {
        return this.form.errors;
    }
}

export default Validator;