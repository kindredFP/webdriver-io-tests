INSTALLATION

1.  First in a new folder type:  npm install @wdio/cli
    -  this will install and download the webdriverIO CLI tool.
2.  Once completed then type:  npx wdio config
    -  bootstraps your project

RUN TESTS
1.  This will run all your specs tests:  npx wdio run ./wdio.conf.js
2.  Run specific spec files:  npx wdio run ./wdio.conf.js --suite exampleSuiteName

References used:
https://webdriver.io/docs/gettingstarted