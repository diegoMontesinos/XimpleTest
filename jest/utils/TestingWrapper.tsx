import { NavigationContainer } from '@react-navigation/native';
import { ReactNode } from 'react';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

const TestingWrapper = ({ children }: { children: ReactNode }) => (
  <PaperProvider theme={DefaultTheme}>
    <NavigationContainer>{children}</NavigationContainer>
  </PaperProvider>
);

export default TestingWrapper;
