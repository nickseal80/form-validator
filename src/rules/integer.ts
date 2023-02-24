import { ValidateRule } from "./ValidateRule";

export const integer: ValidateRule = {
    rule: 'integer',
    validator: (value) => {
        return /^(-?|\d+)$/.test(value);
    },
    defaultMessage: () => `Field is integer`,
}