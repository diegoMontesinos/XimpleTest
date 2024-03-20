import { StyleSheet } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';

import { Credit } from '../types';

export interface CreditsModalProps {
  visible: boolean;
  credits: Credit[];
  onDismiss?: () => void;
}

const CreditsModal: React.FC<CreditsModalProps> = ({
  visible,
  credits,
  onDismiss,
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.container}>
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', padding: 20 },
});

export default CreditsModal;
