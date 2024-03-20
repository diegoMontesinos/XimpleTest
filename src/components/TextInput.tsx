import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import {
  Text,
  TextInput as RNPTextInput,
  TextInputProps as RNPTextInputProps,
} from 'react-native-paper';

export interface TextInputProps
  extends Omit<RNPTextInputProps, 'label' | 'style'> {
  label: string;
  style?: StyleProp<ViewStyle>;
}

const TextInput: React.FC<TextInputProps> = ({ label, style, ...rest }) => (
  <View style={style}>
    <Text variant="labelMedium" style={styles.label}>
      {label}
    </Text>
    <RNPTextInput
      {...rest}
      mode="outlined"
      style={styles.input}
      outlineStyle={styles.inputOutline}
      autoCapitalize="none"
      keyboardType="email-address"
      textContentType="emailAddress"
    />
  </View>
);

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
    color: 'rgba(27, 43, 65, 0.72)',
  },
  input: {
    height: 60,
    fontSize: 14,
    fontFamily: 'PlusJakartaSans',
    fontWeight: '500',
    paddingHorizontal: 0,
  },
  inputOutline: {
    backgroundColor: '#fff',
    borderRadius: 3,
  },
});

export default TextInput;
