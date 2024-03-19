import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AcceptScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>AcceptScreen</Text>
    </View>
  );
};

export default AcceptScreen;
