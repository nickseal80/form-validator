import * as ruleObjs from "./index";

type RuleObj = { [key: string]: ValidateRule }

export interface ValidateRule
{
    rule: string;
    value?: string;
    validator: (arg0: string, arg1?: any, arg2?: any) => boolean;
    defaultMessage: (value: string) => string;
}

export const addRule = (rule?: ValidateRule) => {
    console.log(ruleObjs);
}

export const getRule = (ruleName: string) => {
    if (Object.keys(ruleObjs).find(rule => rule === ruleName)) {
        return (ruleObjs as any)[ruleName];
    }
}