import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, ModalProps, Portal, Text } from 'react-native-paper';

import Button from './shared/Button';

import { Credit } from '../types';

export interface CreditsModalProps extends Omit<ModalProps, 'children'> {
  credits: Credit[];
}

const CreditsModal: React.FC<CreditsModalProps> = ({
  visible,
  credits,
  ...rest
}) => {
  const [credit, setCredit] = useState<Credit | undefined>(undefined);

  return (
    <Portal>
      <Modal
        visible={visible}
        style={styles.modal}
        contentContainerStyle={styles.modalContainer}
        {...rest}>
        <Text variant="headlineSmall">¡Felicidades!</Text>
        <Text variant="bodySmall" style={styles.description}>
          Encontramos estos créditos perfectos para ti:
        </Text>

        <Button disabled={!credit}>Seleccionar crédito</Button>
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
  },
  description: {
    marginTop: 8,
    color: '#7A7A7A',
  },
});

export default CreditsModal;
