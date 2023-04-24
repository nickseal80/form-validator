import FormError from "../errors/FormError";
import { Config, getConfig, getDefaultConfig } from "../validatorConfig/config";
import Form from "./Form";
import EventDispatcher, { EventCallback } from "../event-dispatcher/EventDispatcher";
import { addRule, ValidateRule } from "../rules/ValidateRule";

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
    private _form: Form;
    private readonly _config: Config;
    private readonly _eventDispatcher: EventDispatcher;

    constructor(selector: string, config?: Config) {
        this._eventDispatcher = new EventDispatcher();
        this.setForm(selector);
        if (config) {
            this._config = getConfig(config);
        } else {
            this._config = getDefaultConfig();
        }
    }

    get form(): Form {
        return this._form;
    }

    setForm = (selector: string) => {
        const formEl = document.querySelector(selector);

        if (!formEl) {
            throw new FormError(`Form \"${selector}\" is not found!`);
        }

        if (!(formEl instanceof HTMLFormElement)) {
            throw new FormError(`Form \"${selector}\" is not instantiable of HTMLFormElement`);
        }

        this._form = new Form(formEl, this._eventDispatcher);
    }

    get config(): Config {
        return this._config;
    }

    get eventDispatcher(): EventDispatcher {
        return this._eventDispatcher;
    }

    on = (eventName: string, event: EventCallback) => {
        this._eventDispatcher.on(eventName, event);

        return this;
    }

    addField = (selector: string, params: Rule[]): Validator => {
        this._form.addField(selector, params);

        return this;
    }

    addRule = (rule: ValidateRule) => {
        addRule(rule);

        return this;
    }

    getValidationErrors = () => {
        return this._form.errors;
    }
}

export default Validator;