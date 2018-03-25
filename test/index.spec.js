const require = window.require || window.parent.require;

const assert = require('assert');

describe('karma-nightmare spec', () => {
  it('should be able to use require with nodeIntegration = true', () => {
    assert(!!require('fs'));
  })

  it('should be able to read test.txt with fs module', () => {
    assert.equal(require('fs').readFileSync('./test/test.txt', 'utf8'), 'text for test\n');
  })
});

