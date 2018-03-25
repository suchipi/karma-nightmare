<p align="center"><img src ="https://github.com/bokuweb/karma-nightmare/blob/master/logo-k.png?raw=true" /></p>

<p align="center">A Karma plugin. Launcher for Nightmare</p>

<p align="center"><a href="https://travis-ci.org/bokuweb/karma-nightmare">
<img src="https://travis-ci.org/bokuweb/karma-nightmare.svg?branch=master" alt="Build Status" /></a>
<a href="https://ci.appveyor.com/project/bokuweb/karma-nightmare">
<img src="https://ci.appveyor.com/api/projects/status/9fj4u11fha794rye?svg=true" alt="Build Status" /></a>
<a href="https://www.npmjs.com/package/karma-nightmare">
<img src="https://img.shields.io/npm/v/karma-nightmare.svg?style=flat-square" alt="Build Status" /></a> 
<a href="https://www.npmjs.com/package/karma-nightmare">
<img src="https://img.shields.io/npm/dm/karma-nightmare.svg?style=flat-square" /></a> 
<a href="https://greenkeeper.io/">
<img src="https://badges.greenkeeper.io/bokuweb/karma-nightmare.svg" /></a> 
</p>
   
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Extend](#extend)
- [Test](#test)
- [Contribute](#contribute)
- [License](#license)

## Installation

``` sh
$ npm i -D karma-nightmare
```

## Usage

### Karma config example

``` javascript
// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['Nightmare'],

    plugins: [
      'karma-nightmare'
    ],

    // you can define custom flags
    nightmareOptions: {
      width: 800,
      height: 600,
      show: false,
    },
  })
}
```

### require

You can use `require` as below, in your test.

``` js
const fs = window.require('fs');
fs.readFileSync('./screenshot.png');
```

### Browser window options

The options attribute allows you to initialize properties on the nightmare browser window.   
The available options are [documented here](https://github.com/atom/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions).

## Test

``` sh
$ npm t
```

## Contribute

PRs welcome.

## License

The MIT License (MIT)

Copyright (c) 2016 @Bokuweb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
