import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './shared/Button';
import TextInput from './shared/TextInput';

import { Credit } from '../types';

export interface LogInProps {
  onLogin: (credits: Credit[]) => void;
}

const API_URL = 'https://mocki.io/v1/f936ff33-0643-4bb1-b9c7-6c86b033db91';

const LogIn: React.FC<LogInProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      onLogin(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nombre"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        label="Correo"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.emailInput}
      />

      <Button
        style={styles.submitButton}
        disabled={!name || !email}
        onPress={onSubmit}
        loading={loading}>
        Descubrir créditos
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  emailInput: {
    marginTop: 16,
  },
  submitButton: {
    marginTop: 32,
  },
});

export default LogIn;
