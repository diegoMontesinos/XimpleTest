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
    primary: '#1676F3',
    outline: 'rgba(28, 55, 90, 0.16)',
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
