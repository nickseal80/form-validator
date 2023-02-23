import { rules } from "./rules";
import * as ruleObjs from "./index";

export interface ValidateRule
{
    name: string;
    value?: string;
    validator: (arg0: string, [key]?: any) => boolean;
    defaultMessage: (value: string) => string;
}

export const getRule = (ruleName: string) => {
    if (rules.find(rule => rule === ruleName)) {
        // @ts-ignore
        return ruleObjs[ruleName];
    }
}