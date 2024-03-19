import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import TextInput from './TextInput';

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  emailInput: {
    marginTop: 16,
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
    </View>
  );
};

export default LogIn;
