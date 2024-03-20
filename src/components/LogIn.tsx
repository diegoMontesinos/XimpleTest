import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './shared/Button';
import TextInput from './shared/TextInput';

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

const LogIn: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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

      <Button style={styles.submitButton}>Descubrir créditos</Button>
    </View>
  );
};

export default LogIn;
