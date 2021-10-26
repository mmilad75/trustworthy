import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Button, Card} from '../components';

const AddConfiguration: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.bodyContainer}>
        <Card />
      </View>

      <Button title="Review this item" />
      <Button title="Add something else" type="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  bodyContainer: {flex: 1},
});

export default AddConfiguration;
