import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Button, Card} from '../components';
import ConfettiCannon from 'react-native-confetti-cannon';
import {MOCK_DATA} from '../helpers/mockData';

const AddConfiguration: React.FC = () => {
  let confetti: ConfettiCannon | null;

  const handleConfettiStart = () => {
    confetti && confetti.start();
  };

  return (
    <View style={styles.container}>
      <ConfettiCannon
        count={200}
        origin={{x: -40, y: 0}}
        autoStart={false}
        ref={ref => (confetti = ref)}
      />

      <Header />

      <View style={styles.bodyContainer}>
        <Card data={MOCK_DATA} />
      </View>

      <Button onPress={handleConfettiStart} title="Review this item" />
      <Button title="Add something else" type="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
  },
});

export default AddConfiguration;
