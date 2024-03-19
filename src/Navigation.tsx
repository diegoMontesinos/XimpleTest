import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DiscoverScreen from './screens/DiscoverScreen';
import AcceptScreen from './screens/AcceptScreen';

export type RootStackParamList = {
  Discover: undefined;
  Accept: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Discover"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Discover" component={DiscoverScreen} />
    <Stack.Screen name="Accept" component={AcceptScreen} />
  </Stack.Navigator>
);

export default Navigation;
