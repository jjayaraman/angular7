import { CreateUserPage } from "./createUser.po";
import { browser, by, element } from 'protractor';


describe("create user test suite", () => {
  let page: CreateUserPage;

  beforeEach(() => {
    page = new CreateUserPage();
  });

  afterEach(() => {});

  beforeAll(() => {});

  afterAll(() => {});

  it("create user enter data", () => {
    page.navigateTo();
    page.createUser();

    let users = page.getUsers();
    expect(users.count()).toBe(1);
    expect(users.get(0).getText()).toContain('first name');

    page.createUser();
    users = page.getUsers();
    expect(users.count()).toBe(2);

  });
});
