import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './Button';
import TextInput from './TextInput';

import { Credit } from '../types';

export interface LogInProps {
  onLogin: (credits: Credit[]) => void;
}

const API_URL = 'https://mocki.io/v1/f936ff33-0643-4bb1-b9c7-6c86b033db91';

const LogInForm: React.FC<LogInProps> = ({ onLogin }) => {
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
    <View style={styles.container} testID="login-form">
      <TextInput
        label="Nombre"
        value={name}
        onChangeText={(text) => setName(text)}
        testID="name-input"
      />

      <TextInput
        label="Correo"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.emailInput}
        testID="email-input"
      />

      <Button
        style={styles.submitButton}
        disabled={!name || !email}
        onPress={onSubmit}
        loading={loading}
        testID="login-button">
        Descubrir créditos
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
  },
  emailInput: {
    marginTop: 16,
  },
  submitButton: {
    marginTop: 40,
  },
});

export default LogInForm;
