import validator from "../index";

const passwordFormValidator = validator
    .addForm('#password-form', { validateByFormChange: true });

passwordFormValidator
    .addField('#password', [
        {
            rule: 'password',
            value: 7,
            conditions: {
                hasUppercase: true,
                hasLowercase: false,
                hasNumber: false,
                hasSymbol: false,
            }
        }
    ])
    .on('formHasErrors', (evt) => {
        console.log(evt.data.errors);
    })
    // .on('formInputChange', (evt) => {
    //     console.log(evt.data);
    // });