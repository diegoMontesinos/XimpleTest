import { StyleSheet } from 'react-native';
import {
  Button as RNPButton,
  ButtonProps as RNPButtonProps,
} from 'react-native-paper';

export interface ButtonProps extends RNPButtonProps {}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'PlusJakartaSans',
    fontSize: 16,
    fontWeight: '600',
  },
});

const Button: React.FC<ButtonProps> = ({ style, ...rest }) => (
  <RNPButton
    {...rest}
    style={[styles.button, style]}
    mode="contained"
    labelStyle={styles.label}
  />
);

export default Button;
