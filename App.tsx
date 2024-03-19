import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Text,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const App: React.FC = () => (
  <PaperProvider theme={theme}>
    <Text>Test</Text>
  </PaperProvider>
);

export default App;
