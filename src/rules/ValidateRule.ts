import * as ruleObjs from "./index";

type RuleObj = { [key: string]: ValidateRule }

const mixRules: RuleObj = ruleObjs;

export interface ValidateRule
{
    rule: string;
    value?: string;
    validator: (arg0: string, arg1?: any, arg2?: any) => boolean;
    defaultMessage?: (value: string) => string;
    message?: string;
}

export const addRule = (rule: ValidateRule) => {
    mixRules[rule.rule] = rule;
}

export const getRule = (ruleName: string) => {
    if (Object.keys(mixRules).find(rule => rule === ruleName)) {
        return (ruleObjs as any)[ruleName];
    }
}