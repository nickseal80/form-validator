import { ValidateRule } from "../ValidateRule";

export const hasSymbol: ValidateRule = {
    rule: 'hasSymbol',
    validator: (value: string): boolean => {
        return /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(value);
    },
    defaultMessage: () => 'The field must contain special characters'
}