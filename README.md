# Ximple Test

This is the code challenge for the Diego Montesinos's Ximple application. Is made with [React Native](https://reactnative.dev) and Typescript.

In this document you will find info about how to setup your local, execute the app and run the tests.

## Execute the app

In order to execute the project follow this steps:

1. Follow the [guide to setup the React Native environment](https://reactnative.dev/docs/environment-setup) till "Creating a new application" step.
2. In a terminal, install the dependencies:

```bash
yarn install
```

3. For start the application in Android just:

```bash
yarn run android
```

4. For start the application in iOS. If is your first time running the application execute:

```bash
cd ios && pod install && cd ..
```

And later execute:

```bash
yarn run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

## Unit testing and linting

This project uses `eslint` for linting and `jest` + `@testing-library/react-native` for testing.

For execute the linting you just need to execute:

```bash
yarn lint
```

And if you want to run the unit testing, execute:

```bash
yarn test
```

The unit tests are in each `.test.tsx` file, and mocks are under the folder `__mocks__`.

## UI / E2E testing

The project uses [Detox](https://wix.github.io/Detox/) for E2E testing.

### Detox setup environment

To setup your environment to run Detox tests:

1. [MacOS only] Be sure you have installed XCode and the iOS Simulator.
2. [MacOS only] Install [applesimutils](https://github.com/wix/AppleSimulatorUtilshttps://github.com/wix/AppleSimulatorUtils) with the commands:

```bash
brew tap wix/brew
brew install applesimutils
```

3. Create an Android simulator with the name `"Pixel_3a_API_30"`. If you wanna use another Android simulator change the `avdName` in the `.detoxrc.js` file:

```js
module.exports = {
  ...
  devices: {
    ...
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_30', // <- here
      },
    },
  },
  ...
}
```

4. In a terminal, run the following commands for build:

```sh
npx detox build --configuration ios.sim.debug
npx detox build --configuration android.emu.debug
```

For more information go to the [Detox guide](https://wix.github.io/Detox/docs/introduction/environment-setup).

### Run the tests

For running the tests in iOS:

1. In a terminal, run:

```sh
yarn start
```

2. Open another terminal and run:

```sh
npx detox test --configuration ios.sim.debug
```

For running the tests in Android:

1. In a terminal, run:

```sh
yarn start
```

2. Open another terminal and run:

```sh
npx detox test --configuration android.emu.debug
```

## Author

Diego Montesinos - diegoa.montesinos@gmail.com
