import { ValidateRule, getRule } from "../ValidateRule";

export interface PasswordConditions
{
    hasUppercase?: boolean,
    hasLowercase?: boolean,
    hasNumber?: boolean,
    hasSymbols?: boolean,
}

/**
 * Плагин должен принимать ряд параметров, по которым необходимо валидировать пароль:
 * - minLength (number) - минимальная длина пароля
 * - uppercase (boolean) - пароль должен содержать прописные символы
 * - lowercase (boolean) - пароль должен содержать строчные символы
 * - number (boolean) - пароль должен содержать цифры
 * - symbols (boolean) - пароль должен содержать символы
 */
export const password: ValidateRule = {
    rule: 'password',
    validator: (value: string, minLength: number, conditions?: PasswordConditions): boolean => {
        const minLengthRule = getRule('minLength');
        const status: boolean = minLengthRule.validator(value, minLength);
        // if (!status) {
        //     return false;
        // }

        if (conditions) {
            Object.keys(conditions).forEach(condition => {
                if ((conditions as any)[condition]) {
                    //
                }
            })
        }

        return true;
    },
    defaultMessage: (value: string): string => {
        return `Password must be at least ${value} characters long`;
    }
}