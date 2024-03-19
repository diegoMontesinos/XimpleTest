import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {
  Text,
  TextInput as RNPTextInput,
  TextInputProps as RNPTextInputProps,
} from 'react-native-paper';

export interface TextInputProps
  extends Omit<RNPTextInputProps, 'label' | 'style'> {
  label: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  label: {},
});

const TextInput: React.FC<TextInputProps> = ({
  label,
  style,
  inputStyle,
  ...rest
}) => (
  <View style={style}>
    <Text variant="labelMedium">{label}</Text>
    <RNPTextInput {...rest} mode="outlined" style={inputStyle} />
  </View>
);

export default TextInput;
