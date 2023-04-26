import { ValidateRule } from "../ValidateRule";

export const hasUppercase: ValidateRule = {
    rule: 'hasUppercase',
    validator: (value: string): boolean => {
        return /[A-ZА-Я]/.test(value);
    },
    defaultMessage: () => 'The field must contain uppercase characters'
}