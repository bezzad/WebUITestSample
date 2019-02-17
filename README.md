# Web UI Test Sample
A test for web UI by js libraries

This UI Test based on [protractor](https://www.protractortest.org) and [puppeteer](https://pptr.dev/).

## How to use [Protractor](https://www.protractortest.org)

1. install [Node.js](http://nodejs.org/)
2. install [Python 2.7](https://www.python.org/) on the PATH
3. install [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) on the PATH to run the standalone [Selenium](https://github.com/SeleniumHQ/selenium) Server
4. run ```$ npm install -g protractor```
5. run ```$ webdriver-manager update```
6. run ```$ webdriver-manager start``` - to run server on port 4444
7. Now create the configuration file. Copy the following into conf.js:
``` js
// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
}
```

This configuration tells Protractor where your test files (specs) are, and where to talk to your Selenium Server (seleniumAddress). It specifies that we will be using Jasmine for the test framework. It will use the defaults for all other configuration. Chrome is the default browser.

Now run the test with:

```$ cd protractor-example```   
```$ protractor conf.js```

For more information use this [helpful link](https://www.protractortest.org/#/tutorial).

## How to use [Puppeteer](https://pptr.dev/)

Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/). Puppeteer runs [headless](https://developers.google.com/web/updates/2017/04/headless-chrome) by default, but can be configured to run full (non-headless) Chrome or Chromium.

1. install [Node.js](http://nodejs.org/)
2. run ```$ npm install``` or ```$ npm i puppeteer```

Now run the test with:

1. run ```$ cd puppeteer-example```
2. run ```$ node example.js```
