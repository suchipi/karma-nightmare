const { screenshot, saveHtml } = require('../');
const { assert } = require('chai');

describe('karma-nightmare spec', () => {

  it('should capture browser screenshot', (done) => {
    document.querySelector('body').innerText = 'karma-nightmare spec';
    screenshot('./screenshot.png')
      .then(() => {
        const fs = window.require('fs');
        fs.readFileSync('./screenshot.png');
        done();
      })
      .catch(() => { throw new Error('rejected') });
  });

  it('should screenshot saved nested dir', (done) => {
    document.querySelector('body').innerText = 'karma-nightmare spec';
    const PATH = './test/screenshot/screenshot.png';
    screenshot(PATH)
      .then(() => {
        const fs = window.require('fs');
        fs.readFileSync(PATH);
        done();
      })
      .catch(() => { throw new Error('rejected') });
  });

  it('should be able to use require with nodeIntegration = true', () => {
    assert(!!window.require('fs'));
  })

  it('should be able to read test.txt with fs module', () => {
    assert.equal(window.require('fs').readFileSync('./test/test.txt', 'utf8'), 'text for test\n');
  })

  it('should set skipScreenshot equals false', () => {
    const nightmare = window.__nightmare || window.parent.__nightmare;
    const skip = nightmare.skipScreenshot;
    assert.equal(skip, false);
  })

  it('should save html', (done) => {
    document.querySelector('body').innerText = 'karma-nightmare spec';
    saveHtml('./test.html')
      .then(() => {
        window.require('fs').readFileSync('./test.html');
        done();
      })
      .catch(() => { throw new Error('rejected') });
  });

  it('should save html with specific saveType', (done) => {
    document.querySelector('body').innerText = 'karma-nightmare spec';
    saveHtml('./test_html_only.html', 'HTMLOnly')
      .then(() => {
        const fs = window.require('fs');
        fs.readFileSync('./test_html_only.html');
        fs.stat('./test_html_only_files', (err) => {
          if (err) done();
        });
      })
      .catch(() => { throw new Error('rejected') });
  });
});

