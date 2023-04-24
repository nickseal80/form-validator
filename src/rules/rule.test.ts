import {  assert } from 'chai';
import { getRule, addRule, ValidateRule } from "./ValidateRule";

describe('test rules', () => {
    it('should be a rule', function () {
        const res = getRule('required');
        assert.equal(res.rule, 'required');
    });

    it('add a rule', () => {
        const testRule: ValidateRule = {
            rule: 'testRule',
            validator: () => {
                return true;
            },
            message: "testRule",
        }
        addRule(testRule);
    })
})