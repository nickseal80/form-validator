import Validator, { Error } from './validator/Validator';
import { Config } from "./validatorConfig/config";
import { FieldValidationError } from "./validator/Form";

const validator = {
    addForm: (selector: string, config?: Config): Validator => {
        return new Validator(selector, config);
    }
}

export { validator };

const firstFormValidator = validator.addForm('#form', { showErrorsUnderField: true });
firstFormValidator
    .addField('#name', [
        {
            rule: 'required',
            message: "Введите название",
        },
        {
            rule: 'minLength',
            value: 2,
            message: "Название не может быть менее 2 символов",
        },
        {
            rule: 'maxLength',
            value: 12,
            message: "Название не должно превышать 12 символов",
        }
    ])
    .addField('#description', [
        {
            rule: 'required',
        },
        {
            rule: 'minLength',
            value: 5,
            message: "Не менее 5 символов",
        }
    ])
    .on('formHasErrors', (evt) => {
        //TODO: Убрать эту жесть после тестов!!!
        const errors = evt.data.errors;
        const errorsContainers = document.querySelectorAll('.has-errors');
        if (errorsContainers.length > 0) {
            errorsContainers.forEach(container => {
                container.innerHTML = '';
            })
        }

        if (errors.some((error: FieldValidationError) => error.fieldName === 'name')) {
            const errContainer = document.querySelector('#name-validation-errors');
            if (errContainer) {
                errContainer.innerHTML = '';
                const nameErrorsObj: FieldValidationError = errors.find((error: FieldValidationError) => error.fieldName === 'name');
                nameErrorsObj.errors.forEach((fieldError) => {
                    const fieldErrorContainer = document.createElement('div');
                    fieldErrorContainer.classList.add('text-danger');
                    fieldErrorContainer.innerText = fieldError.message;
                    errContainer.appendChild(fieldErrorContainer);
                })
            }
        }

        if (errors.some((error: FieldValidationError) => error.fieldName === 'description')) {
            const dErrContainer = document.querySelector('#description-validation-errors');
            if (dErrContainer) {
                dErrContainer.innerHTML = '';
                const nameErrorsObj: FieldValidationError = errors.find((error: FieldValidationError) => error.fieldName === 'description');
                nameErrorsObj.errors.forEach((fieldError) => {
                    const fieldErrorContainer = document.createElement('div');
                    fieldErrorContainer.classList.add('text-danger');
                    fieldErrorContainer.innerText = fieldError.message;
                    dErrContainer.appendChild(fieldErrorContainer);
                })
            }
        }
    })
console.log(firstFormValidator);