import Validator from './validator/Validator';
import { Config } from "./validatorConfig/config";

const validator = {
    /**
     * Метод добавления формы
     *
     * @param selector - css селектор формы
     * @param config - параметры конфигурации (опционально)
     * @returns Объект приложения
     */
    addForm: (selector: string, config?: Config): Validator => {
        return new Validator(selector, config);
    }
}

export default validator;

import "./testForms/first-form";
import "./testForms/secondary-form";