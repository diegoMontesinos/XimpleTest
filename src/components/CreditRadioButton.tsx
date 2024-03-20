import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';

import { Credit } from '../types';

export interface CreditRadioButtonProps {
  style?: StyleProp<ViewStyle>;
  credit: Credit;
}

const CreditRadioButton: React.FC<CreditRadioButtonProps> = ({
  credit,
  style,
}) => {
  const theme = useTheme();

  return (
    <TouchableRipple
      borderless
      // rippleColor={color(textColor).alpha(0.12).rgb().string()}
      // style={touchableStyle}
      style={[styles.radioButton, style]}
      theme={theme}
      onPress={() => {
        console.log(123);
      }}>
      <View style={styles.radioButtonContent}>
        <Text variant="titleMedium" style={{ color: theme.colors.onPrimary }}>
          {credit.name}
        </Text>
        <Text
          variant="titleMedium"
          style={{
            color: theme.colors.onPrimary,
          }}>{`$${credit.price.toLocaleString()}`}</Text>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    height: 43,
    borderRadius: 4,
  },
  radioButtonContent: {
    height: 43,
    borderRadius: 4,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});

export default CreditRadioButton;
