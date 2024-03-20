import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native-paper';

import { StackParamList } from '../Navigation';

import Button from '../components/shared/Button';
import CreditRadioButton from '../components/discover/CreditRadioButton';

export type AcceptScreenProps = NativeStackScreenProps<
  StackParamList,
  'Accept'
>;

const AcceptScreen: React.FC<AcceptScreenProps> = ({ route }) => (
  <SafeAreaView style={styles.container}>
    <Text variant="headlineSmall" style={styles.title}>
      Acepta tu crédito
    </Text>
    <Text variant="bodySmall" style={styles.description}>
      Confirma que has seleccionado el crédito deseado.
    </Text>

    <Text variant="bodySmall" style={styles.selectedCredit}>
      Crédito seleccionado
    </Text>
    <CreditRadioButton credit={route.params.credit} />

    <Button style={styles.submitButton}>Contratar</Button>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginTop: 32,
  },
  description: {
    marginTop: 8,
    color: '#7A7A7A',
  },
  selectedCredit: {
    marginTop: 72,
    marginBottom: 8,
    color: '#7A7A7A',
  },
  submitButton: {
    marginTop: 32,
  },
});

export default AcceptScreen;
