import { describe } from "mocha";
import { Browser, Builder, By, Key, until, WebDriver } from "selenium-webdriver";
import assert from "assert";


describe('Sharelane test', async () => {
let driver: WebDriver;

beforeEach(async() => {
    console.log("pre-condition");
    });
    
    afterEach(async() => {
    console.log("post-condition");
    });

it('Login', async () => {
driver = await new Builder().forBrowser(Browser.CHROME).build();
await driver.manage().window().maximize();
try {
await driver.get("https://www.saucedemo.com")
await driver.findElement(By.css('input[name=user-name]')).sendKeys('visual_user');  //input class
await driver.findElement(By.css('input[id=password]')).sendKeys('secret_sauce'), 5000;  //input class
await driver.findElement(By.xpath('//input[@class="submit-button btn_action"]')).click(), 5000; //input type
await driver.get("https://www.saucedemo.com/inventory.html"), 6000;
await driver.findElement(By.css('div.inventory_item_label [data-test^=item-4]'));
await driver.findElement(By.name('add-to-cart-sauce-labs-backpack')).click();
const badgeIcon = driver.findElement(By.css('div.shopping_cart_container [data-test~="badge"]'));
badgeIcon.isDisplayed();
await driver.findElement(By.css('div.shopping_cart_container [data-test$="link"]')).click(), 5000;
await driver.findElement(By.css('div.cart_footer [data-test="checkout"]')).click(), 5000;
await driver.findElement(By.css('div.form_group [data-test="firstName"]')).sendKeys('TestName');
await driver.findElement(By.css('div.form_group [data-test="lastName"]')).sendKeys('TestLastName');
await driver.findElement(By.css('div.form_group [data-test="postalCode"]')).sendKeys('TestZipCode');
await driver.get("https://www.saucedemo.com/checkout-step-two.html")
await driver.findElement(By.css('div.item_pricebar [data-test*="price"]'));
await driver.findElement(By.name('finish')).click();
}
finally {
    driver.quit();
    }}) 
})

