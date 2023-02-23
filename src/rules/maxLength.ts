import { ValidateRule } from "./ValidateRule";

export const maxLength: ValidateRule = {
    name: 'maxLength',
    validator: (value: string, minLength: number): boolean => {
        return value.length <= minLength;
    },
    defaultMessage: (maxLength) => `field must be no more than ${maxLength} characters`,
}