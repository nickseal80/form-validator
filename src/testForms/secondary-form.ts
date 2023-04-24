import validator from "../index";
import { ValidateRule } from "../rules/ValidateRule";

const testRule: ValidateRule = {
    rule: 'testRule',
    validator: (value): boolean => {
        return value.length >= 4;
    },
    message: "testRule",
}

const secondaryFormValidator = validator
    .addForm('#secondary-form', { validateByFormChange: true })
    .addRule(testRule);

secondaryFormValidator
    .addField('#numeric', [
        {
            rule: 'numeric',
            message: 'Поле должно иметь цифровое значение',
        },
        {
            rule: 'testRule',
            message: 'joojjoo',
        }
    ])
    .addField('#integer', [
        {
            rule: 'integer',
        }
    ])
    .addField('#float', [
        {
            rule: 'float',
            message: "Поле должно содержать дробное значение",
        }
    ])
    .on('formHasErrors', (evt) => {
        console.log(evt.data.errors);
    })
    .on('formInputChange', (evt) => {
        console.log(evt.data);
    })
console.log(secondaryFormValidator);