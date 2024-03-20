import { StyleSheet } from 'react-native';
import {
  Button as RNPButton,
  ButtonProps as RNPButtonProps,
} from 'react-native-paper';

export interface ButtonProps extends RNPButtonProps {}

const Button: React.FC<ButtonProps> = ({ style, ...rest }) => (
  <RNPButton
    {...rest}
    mode="contained"
    style={[styles.button, style]}
    labelStyle={styles.label}
    contentStyle={styles.buttonContent}
  />
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
  },
  buttonContent: {
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

export default Button;
