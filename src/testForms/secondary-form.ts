import validator from "../index";

const secondaryFormValidator = validator.addForm('#secondary-form', { validateByFormChange: true });
secondaryFormValidator
    .addField('#numeric', [
        {
            rule: 'numeric',
            message: 'Поле должно иметь цифровое значение',
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