import {  assert } from 'chai';
import { Config, getConfig } from "./config";
const mocha = require('mocha');

describe('test config', () => {
    it('test getConfig merging config objects', () => {
        const extConfig = {
            validateDuringFormCompletion: false,
        }
        const resConfig: Config = getConfig(extConfig);

        assert.equal(resConfig.validateDuringFormCompletion, false);
        assert.equal(resConfig.showErrorsUnderField, false);
    });

    it('test getConfig merging new config objects', () => {
        const extConfig: Config = {
            showErrorsUnderField: true,
        }
        const resConfig: Config = getConfig(extConfig);

        assert.equal(resConfig.validateDuringFormCompletion, true);
        assert.equal(resConfig.showErrorsUnderField, true);
        assert.equal(resConfig.showErrorsAlerts, false);
    })
})
