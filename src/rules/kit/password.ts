import { ValidateRule } from "../ValidateRule";

export type PasswordConditions = {
    minLength: number,
    uppercase: boolean,
    lowercase: boolean,
    number: boolean,
    symbols: boolean,
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
    validator: (value, conditions: PasswordConditions) => {
        return true;
    },
    defaultMessage: () => `вот тут самое интересное`,
}