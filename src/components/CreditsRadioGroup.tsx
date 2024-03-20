import { StyleProp, View, ViewStyle } from 'react-native';

import CreditRadioButton from './CreditRadioButton';

import { Credit } from '../types';

export interface CreditsRadioGroupProps {
  credits: Credit[];
  onChangeSelection: (selection: Credit) => void;
  selection?: Credit;
  style?: StyleProp<ViewStyle>;
}

const CreditsRadioGroup: React.FC<CreditsRadioGroupProps> = ({
  credits,
  style,
  selection,
  onChangeSelection,
}) => (
  <View style={style}>
    {credits.map((credit, index) => (
      <CreditRadioButton
        key={credit.name}
        credit={credit}
        selected={selection ? selection.name === credit.name : false}
        onPress={() => onChangeSelection(credit)}
        style={{
          marginTop: index === 0 ? 0 : 8,
        }}
      />
    ))}
  </View>
);

export default CreditsRadioGroup;
