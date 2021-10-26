import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from '.';
import {colors} from '../helpers/colors';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/icons/check.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 15,
  },
  imageContainer: {
    height: 40,
    width: 40,
    backgroundColor: colors.blue,
    borderRadius: 10000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
    tintColor: colors.white,
  },
});

export default Header;
