import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './Button';
import TextInput from './TextInput';

import { Credit } from '../types';

export interface LogInProps {
  onLogin: (credits: Credit[]) => void;
}

const API_URL = 'https://mocki.io/v1/20e1e855-2e7e-4ae7-883d-9ee667038a34';

const LogInForm: React.FC<LogInProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const buttonDisabled = useMemo(() => !name || !email, [name, email]);

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
        disabled={buttonDisabled}
        onPress={onSubmit}
        loading={loading}
        testID={buttonDisabled ? 'login-button-disabled' : 'login-button'}>
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
