import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  configureFonts,
} from 'react-native-paper';

import Navigation from './src/Navigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  fonts: configureFonts({
    config: {
      headlineSmall: {
        fontFamily: 'Inter',
        fontWeight: '700',
      },
      bodySmall: {
        fontFamily: 'Inter',
      },
      labelMedium: {
        fontFamily: 'PlusJakartaSans',
      },
    },
  }),
};

const App: React.FC = () => (
  <SafeAreaProvider>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  </SafeAreaProvider>
);

export default App;
