const {Builder, By, Key, until} = require('selenium-webdriver');

const [url, specifier] = process.argv.slice(2);

(async function scrape() {
  const driver = await new Builder().forBrowser('safari').build();
  try {
    await driver.get(url);
    const items = await driver.findElements(By.css(specifier));
    const result = [];
    for(const item of items) {
      const content = await item.getText();
      result.push(content);
    }
    for(const t of result) {
      console.log(t);
    }
  }
  catch(e) {
    console.log(e);
  }
  finally {
    await driver.quit();
    console.log('finished');
  }
})();
