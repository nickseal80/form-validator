import { ValidateRule } from "../ValidateRule";

export const required: ValidateRule = {
    rule: 'required',
    validator: (value: string): boolean => {
        if (!value) {
            return false;
        }

        return value.length !== 0;
    },
    defaultMessage: () => "It's a required field",
}