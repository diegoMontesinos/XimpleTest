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

const Navigation: React.FC<{
  initialRouteName?: keyof StackParamList | undefined;
}> = ({ initialRouteName }) => (
  <Stack.Navigator
    initialRouteName={initialRouteName ?? 'Discover'}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Discover" component={DiscoverScreen} />
    <Stack.Screen
      name="Accept"
      component={AcceptScreen}
      initialParams={{
        credit: {
          id: '123',
          name: 'Dummy credit',
          price: 3100,
        },
      }}
    />
  </Stack.Navigator>
);

export default Navigation;
