import { ValidateRule } from "./ValidateRule";

export const minLength: ValidateRule = {
    rule: 'minLength',
    validator: (value: string, minLength: number): boolean => {
        return value.length >= minLength;
    },
    defaultMessage: (minLength) => `Field must be at least ${minLength} characters long`,
}