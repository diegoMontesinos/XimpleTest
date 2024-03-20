/* eslint-disable no-undef */

const timeout = 2 * 1000;

describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('button only is enabled if the inputs are filled', async () => {
    await expect(element(by.id('login-button-disabled'))).toBeVisible();
    await element(by.id('name-input')).typeText('hello world');
    await element(by.id('name-input')).tapReturnKey();
    await expect(element(by.id('login-button-disabled'))).toBeVisible();

    await element(by.id('email-input')).typeText('hello world');
    await element(by.id('email-input')).tapReturnKey();
    await expect(element(by.id('login-button-disabled'))).not.toBeVisible();
    await expect(element(by.id('login-button'))).toBeVisible();
  });

  it('when button is pressed, the modal is presented', async () => {
    await element(by.id('name-input')).typeText('hello world');
    await element(by.id('name-input')).tapReturnKey();
    await element(by.id('email-input')).typeText('hello world');
    await element(by.id('email-input')).tapReturnKey();
    await element(by.id('login-button')).tap();

    await waitFor(element(by.id('credits-modal')))
      .toBeVisible()
      .withTimeout(timeout);
  });

  // it('when open modal, ', async () => {
  //   await element(by.id('name-input')).typeText('hello world');
  //   await element(by.id('name-input')).tapReturnKey();
  //   await element(by.id('email-input')).typeText('hello world');
  //   await element(by.id('email-input')).tapReturnKey();
  //   await element(by.id('login-button')).tap();

  //   await waitFor(element(by.id('credits-modal')))
  //     .toBeVisible()
  //     .withTimeout(timeout);
  // });
});
