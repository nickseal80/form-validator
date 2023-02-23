import { ValidateRule } from "./ValidateRule";

export const required: ValidateRule = {
    rule: 'required',
    validator: (value: string): boolean => {
        if (!value) {
            return false;
        }

        if (value.length === 0) {
            return false;
        }

        return true;
    },
    defaultMessage: () => "It's a required field",
}