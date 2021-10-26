import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

import {Text} from '.';

interface Props extends TouchableOpacityProps {
  type?: 'white' | 'black';
  title: string;
}

const Button: React.FC<Props> = ({title, type = 'black'}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        type === 'black'
          ? styles.blackButtonContainer
          : styles.whiteButtonContainer,
      ]}>
      <Text
        style={[
          styles.text,
          type === 'black' ? styles.whiteText : styles.blackText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  blackButtonContainer: {
    backgroundColor: '#1d1d1d',
  },
  whiteButtonContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e9ebed',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
  whiteText: {
    color: '#efefef',
  },
  blackText: {
    color: '#1d1d1d',
  },
});
export default Button;
