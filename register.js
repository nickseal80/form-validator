const tsNode = require('ts-node');
const testTSConfig = require('./tests/tsconfig.json');

tsNode.register({
    files: true,
    transpileOnly: true,
    project: './tests/tsconfig.json'
});