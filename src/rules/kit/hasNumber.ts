import { ValidateRule } from "../ValidateRule";

export const hasNumber: ValidateRule = {
    rule: 'hasNumber',
    validator: (value: string): boolean => {
        return /[0-9]/.test(value);
    },
    defaultMessage: () => 'The field must contain numeric characters'
}