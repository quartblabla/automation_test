const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let driver_fx = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

let driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

searchTest(driver_fx);
searchTest(driver_chr);

function searchTest(driver) {
  driver.get('https://www.thepromoapp.com/#!/login');
 
 driver.findElement(By.name('userName')).sendKeys('quartblabla1@gmail.com');
 driver.findElement(By.name('password')).sendKeys('Zxz123Zxz@');
 driver.findElement(By.name('password')).sendKeys(webdriver.Key.ENTER);
 /*
  driver.sleep(3000).then(function() {
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER);
  });

  driver.findElement(By.name('btnK')).click();

  driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
      if(title === 'webdriver - Google Search') {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
      driver.quit();
    });
  })*/}
