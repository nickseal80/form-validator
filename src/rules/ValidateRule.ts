import * as ruleObjs from "./index";

export type DefaultMessage = (value: string) => string

export type Message = ({ [key: string]: string }) | string;

type RuleObj = { [key: string]: ValidateRule }

const mixRules: RuleObj = ruleObjs;

export interface ValidateRule
{
    rule: string;
    value?: string;
    conditions?: any;
    validator: (arg0: string, arg1?: any, arg2?: any) => boolean;
    defaultMessage?: DefaultMessage
    message?: Message;
}

export const addRule = (rule: ValidateRule) => {
    mixRules[rule.rule] = rule;
}

export const getRule = (ruleName: string) => {
    if (Object.keys(mixRules).find(rule => rule === ruleName)) {
        return (ruleObjs as any)[ruleName];
    }
}