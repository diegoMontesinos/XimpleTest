import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Surface, Text, TouchableRipple, useTheme } from 'react-native-paper';

import { Credit } from '../../types';

export interface CreditRadioButtonProps {
  credit: Credit;
  style?: StyleProp<ViewStyle>;
  selected?: boolean;
  onPress?: () => void;
}

const CreditRadioButton: React.FC<CreditRadioButtonProps> = ({
  credit,
  style,
  selected,
  onPress,
}) => {
  const theme = useTheme();

  const surfaceStyle = {
    backgroundColor: selected
      ? theme.colors.primary
      : theme.colors.primaryContainer,
  };

  const textStyle = {
    color: theme.colors.onPrimary,
  };

  return (
    <Surface style={[styles.surface, surfaceStyle, style]} elevation={0}>
      <TouchableRipple theme={theme} onPress={onPress}>
        <View style={styles.content}>
          <Text variant="titleMedium" style={textStyle}>
            {credit.name}
          </Text>
          <Text variant="titleMedium" style={textStyle}>
            {`$${credit.price.toLocaleString()}`}
          </Text>
        </View>
      </TouchableRipple>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    height: 43,
    borderRadius: 4,
  },
  content: {
    height: 43,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});

export default CreditRadioButton;
