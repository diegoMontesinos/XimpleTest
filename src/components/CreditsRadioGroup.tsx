import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';

import { Credit } from '../types';

export interface CreditsRadioGroupProps {
  credits: Credit[];
  selection?: Credit;
  onSelectionChange: (credit: Credit) => void;
  style: StyleProp<ViewStyle>;
  buttonStyle: StyleProp<ViewStyle>;
}

const CreditsRadioGroup: React.FC<CreditsRadioGroupProps> = ({
  credits,
  selection,
  onSelectionChange,
  style,
  buttonStyle,
}) => {
  const theme = useTheme();
  return (
    <View style={style}>
      {credits.map((credit) => (
        <TouchableRipple
          key={credit.name}
          onPress={() => onSelectionChange(credit)}
          theme={theme}>
          <View style={[styles.container, buttonStyle]} pointerEvents="none">
            <Text>{credit.name}</Text>
            <Text>${credit.price}</Text>
          </View>
        </TouchableRipple>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default CreditsRadioGroup;
