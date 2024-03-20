import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  configureFonts,
} from 'react-native-paper';

import Navigation from './src/Navigation';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1676F3',
    outline: 'rgba(28, 55, 90, 0.16)',
    primaryContainer: '#8EBCF7',
  },
  fonts: configureFonts({
    config: {
      headlineSmall: {
        fontFamily: 'Inter',
        fontWeight: '700',
      },
      bodySmall: {
        fontFamily: 'Inter',
        letterSpacing: 0,
      },
      labelMedium: {
        fontFamily: 'PlusJakartaSans',
      },
      titleMedium: {
        fontFamily: 'PlusJakartaSans',
        fontWeight: '600',
        letterSpacing: 0,
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
