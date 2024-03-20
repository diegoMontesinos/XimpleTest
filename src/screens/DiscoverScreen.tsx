import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import LogIn from '../components/LogIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    marginTop: 32,
  },
  description: {
    marginTop: 8,
    color: '#7A7A7A',
  },
});

const DiscoverScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        Descubre tu crédito
      </Text>
      <Text variant="bodySmall" style={styles.description}>
        Llena el siguiente formulario para conocer{'\n'}los créditos que tenemos
        disponibles para ti.
      </Text>

      <LogIn />
    </SafeAreaView>
  );
};

export default DiscoverScreen;
