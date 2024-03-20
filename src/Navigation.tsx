import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DiscoverScreen from './screens/DiscoverScreen';
import AcceptScreen from './screens/AcceptScreen';

import { Credit } from './types';

export type StackParamList = {
  Discover: undefined;
  Accept: {
    credit: Credit;
  };
};

const Stack = createNativeStackNavigator<StackParamList>();

const Navigation: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Accept"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Discover" component={DiscoverScreen} />
    <Stack.Screen
      name="Accept"
      component={AcceptScreen}
      initialParams={{
        credit: {
          name: 'Crédito 1',
          price: 1200,
        },
      }}
    />
  </Stack.Navigator>
);

export default Navigation;
