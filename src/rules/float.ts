import { ValidateRule } from "./ValidateRule";

export const float: ValidateRule = {
    rule: 'float',
    validator: (value) => {
        return /^(-?|[0-9]*[.,][0-9]+)$/.test(value);
    },
    defaultMessage: () => `Field is float`,
}