import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';

import Button from '../shared/Button';
import CreditsRadioGroup from './CreditsRadioGroup';

import { Credit } from '../../types';

export interface CreditsModalProps {
  credits: Credit[];
  onConfirmSelection: (credit: Credit) => void;
  visible: boolean;
}

const CreditsModal: React.FC<CreditsModalProps> = ({
  visible,
  credits,
  onConfirmSelection,
}) => {
  const [credit, setCredit] = useState<Credit | undefined>(undefined);

  return (
    <Portal>
      <Modal
        visible={visible}
        dismissable={false}
        style={styles.modal}
        contentContainerStyle={styles.modalContainer}>
        <Text variant="headlineSmall">¡Felicidades!</Text>
        <Text variant="bodySmall" style={styles.description}>
          Encontramos estos créditos perfectos para ti:
        </Text>

        <CreditsRadioGroup
          credits={credits}
          selection={credit}
          onChangeSelection={(credit) => setCredit(credit)}
          style={styles.radioGroup}
        />

        <Button
          disabled={!credit}
          style={styles.submitButton}
          onPress={() => credit && onConfirmSelection(credit)}>
          Seleccionar crédito
        </Button>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 24,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    paddingBottom: 72,
  },
  description: {
    marginTop: 8,
    color: '#7A7A7A',
  },
  radioGroup: {
    marginTop: 24,
  },
  submitButton: {
    marginTop: 40,
  },
});

export default CreditsModal;
