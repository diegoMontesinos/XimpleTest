/* eslint-disable no-undef */

const timeout = 2 * 1000;

const triggerModal = async () => {
  await element(by.id('name-input')).typeText('hello world');
  await element(by.id('name-input')).tapReturnKey();
  await element(by.id('email-input')).typeText('hello world');
  await element(by.id('email-input')).tapReturnKey();
  await element(by.id('login-button')).tap();
};

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
    await triggerModal();
    await waitFor(element(by.id('credits-modal')))
      .toBeVisible()
      .withTimeout(timeout);
  });

  it('when open modal, the button is only enabled when select an option', async () => {
    await triggerModal();

    await waitFor(element(by.id('credits-modal')))
      .toBeVisible()
      .withTimeout(timeout);

    await expect(element(by.id('select-button-disabled'))).toBeVisible();
    await expect(element(by.id('credits-radio-group'))).toBeVisible();
    await element(by.id(/^radio-button-[A-Za-z0-9]+$/))
      .atIndex(0)
      .tap();

    await expect(element(by.id('select-button-disabled'))).not.toBeVisible();
    await expect(element(by.id('select-button'))).toBeVisible();
  });

  it('when open modal, select the an option and press button should close modal', async () => {
    await triggerModal();

    await waitFor(element(by.id('credits-modal')))
      .toBeVisible()
      .withTimeout(timeout);

    await element(by.id(/^radio-button-[A-Za-z0-9]+$/))
      .atIndex(0)
      .tap();

    await element(by.id('select-button')).tap();

    await waitFor(element(by.id('credits-modal')))
      .not.toBeVisible()
      .withTimeout(timeout);
  });

  it('when select an option and press button in the modal, go to next screen', async () => {
    await triggerModal();

    await waitFor(element(by.id('credits-modal')))
      .toBeVisible()
      .withTimeout(timeout);

    await element(by.id(/^radio-button-[A-Za-z0-9]+$/))
      .atIndex(0)
      .tap();

    await element(by.id('select-button')).tap();

    await waitFor(element(by.id('credits-modal')))
      .not.toBeVisible()
      .withTimeout(timeout);

    await expect(element(by.text('Acepta tu crédito'))).toBeVisible();
    await expect(
      element(by.text('Confirma que has seleccionado el crédito deseado.'))
    ).toBeVisible();
    await expect(element(by.text('Crédito seleccionado'))).toBeVisible();
    await expect(element(by.id('submit-button'))).toBeVisible();
  });
});
