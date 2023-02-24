import { rules } from "./rules";
import * as ruleObjs from "./index";

export interface ValidateRule
{
    rule: string;
    value?: string;
    validator: (arg0: string, arg1?: any, arg2?: any) => boolean;
    defaultMessage: (value: string) => string;
}

export const getRule = (ruleName: string) => {
    //TODO: Выпилить массив "rules" по возможности
    if (rules.find(rule => rule === ruleName)) {
        // @ts-ignore
        return ruleObjs[ruleName];
    }
}