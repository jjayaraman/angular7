import { browser, element, by } from "protractor";

export class CreateUserPage {
  navigateTo() {
    return browser.get("/createUser");
  }

  createUser() {
    element(by.id("firstName")).sendKeys("first name");
    element(by.id("lastName")).sendKeys("last name");
    element(by.id("email")).sendKeys("name@gmail.com");
    element(by.id("saveButton")).click();
    this.clearUserForm();
    browser.sleep(2000)
  }

  checkUserCreated(){
    const users = this.getUsers();
    expect(users.get(0).getText()).toBe('first name');
  }

  getUsers() {
    return element.all(by.id('users'));
  }

  clearUserForm() {
    element(by.id('firstName')).clear();
    element(by.id('lastName')).clear();
    element(by.id('email')).clear();
  }
}
