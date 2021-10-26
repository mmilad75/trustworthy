import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import AddConfiguration from './screens/AddConfiguration';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <AddConfiguration />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  viewContainer: {
    flex: 1,
    padding: 20,
  },
});

export default App;
