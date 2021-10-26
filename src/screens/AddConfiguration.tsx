import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Button, Card} from '../components';

const AddConfiguration: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.bodyContainer}>
        <Card />
      </View>

      <View style={styles.footerContainer}>
        <Button title="Review this item" />
        <Button title="Add something else" type="white" />
      </View>
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
  headerContainer: {},
  bodyContainer: {flex: 1},
  footerContainer: {},
});

export default AddConfiguration;
