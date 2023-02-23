import {  assert } from 'chai';
const mocha = require('mocha');
import { getRule } from "./ValidateRule";

describe('test rules', () => {
    it('should be a rule', function () {
        const res = getRule('required');
        assert.equal(res.name, 'required');
    });
})