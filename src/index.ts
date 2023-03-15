import Validator from './validator/Validator';
import { Config } from "./validatorConfig/config";
interface IValidator {
    config?: Config,
    validator: Validator | null,
    addForm: (selector: string, config?: Config) => Validator,
}

const validator: IValidator = {
    config: undefined,
    validator: null,

    /**
     * Метод добавления формы
     *
     * @param selector - css селектор формы
     * @param config - параметры конфигурации (опционально)
     * @returns Объект приложения
     */
    addForm: (selector: string, config?: Config): Validator => {
        validator.validator = new Validator(selector, config);
        validator.config = validator.validator.config;
        return validator.validator;
    }
}

export default validator;

import "./testForms/first-form";
import "./testForms/secondary-form";