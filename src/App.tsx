import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import AddConfiguration from './screens/AddConfiguration';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddConfiguration />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
