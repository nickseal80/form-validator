import { ValidateRule, getRule } from "../ValidateRule";
import error from "../../errors/Error";

export interface PasswordConditions
{
    hasUppercase?: boolean,
    hasLowercase?: boolean,
    hasNumber?: boolean,
    hasSymbols?: boolean,
}

type PasswordErrors = {
    condition: string,
    validation: boolean,
}

let errors: PasswordErrors[] = [];

const notHasErrors = (errors: PasswordErrors[]): boolean => {
    return !errors.some(ve => {
        return !ve.validation;
    })
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

        if (conditions) {
            errors = Object.keys(conditions).filter(condition => {
                return ((conditions as any)[condition]);
            }).map(condition => {
                const conditionRule: ValidateRule = getRule(condition);
                const validation = conditionRule.validator(value);
                return { condition, validation }
            });
        }

        errors.push({ condition: 'minLength', validation: status });

        return notHasErrors(errors);
    },
    defaultMessage: (value: string): string => {
        // TODO: Доработать генерацию сообщений
        return `Password must be at least ${value} characters long`;
    }
}