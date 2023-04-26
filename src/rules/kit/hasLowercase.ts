import { ValidateRule } from "../ValidateRule";

export const hasLowercase: ValidateRule = {
    rule: 'hasLowercase',
    validator: (value: string): boolean => {
        return /[a-zа-я]/.test(value);
    },
    defaultMessage: () => 'The field must contain uppercase characters'
}