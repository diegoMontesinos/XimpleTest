import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../Navigation';

import CreditsModal from '../components/CreditsModal';
import LogInForm from '../components/LogInForm';

import { Credit } from '../types';

export type DiscoverScreenProps = NativeStackScreenProps<
  StackParamList,
  'Discover'
>;

const DiscoverScreen: React.FC<DiscoverScreenProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [credits, setCredits] = useState<Credit[]>([]);

  const handleLogin = (credits: Credit[]) => {
    setCredits([...credits]);
    setModalVisible(true);
  };

  const handleConfirmSelection = (credit: Credit) => {
    setModalVisible(false);
    navigation.navigate('Accept', { credit });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        Descubre tu crédito
      </Text>
      <Text variant="bodySmall" style={styles.description}>
        Llena el siguiente formulario para conocer{'\n'}los créditos que tenemos
        disponibles para ti.
      </Text>

      <LogInForm onLogin={handleLogin} />

      <CreditsModal
        visible={modalVisible}
        credits={credits}
        onConfirmSelection={handleConfirmSelection}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 36,
  },
  description: {
    marginTop: 8,
    color: '#7A7A7A',
  },
});

export default DiscoverScreen;
