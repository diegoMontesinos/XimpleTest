import { StyleProp, View, ViewStyle } from 'react-native';

import { Credit } from '../types';

export interface CreditsRadioGroupProps {
  credits: Credit[];
  style?: StyleProp<ViewStyle>;
}

const CreditsRadioGroup: React.FC<CreditsRadioGroupProps> = ({
  credits,
  style,
}) => (
  <View style={style}>
    {credits.map((credit, index) => (
      <CreditRadioButton
        key={credit.name}
        credit={credit}
        style={{
          marginTop: index === 0 ? 0 : 8,
        }}
      />
    ))}
  </View>
);

export default CreditsRadioGroup;
