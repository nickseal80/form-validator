import { ValidateRule } from "../ValidateRule";

export const numeric: ValidateRule = {
    rule: 'numeric',
    validator: (value) => {
        return /^(-?|[.,0-9]+)$/.test(value);
    },
    defaultMessage: () => `Field is numeric`,
}