import React from 'react';
import {View, StyleSheet, ImageSourcePropType} from 'react-native';
import {Text, Image} from '.';
import {colors} from '../helpers/colors';

interface Props {
  data: {
    title: string;
    subtitle: string;
    image: ImageSourcePropType;
  };
}

const Card: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/umbrella.png')}
            style={styles.icon}
          />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Image style={styles.image} source={data.image} />
        <Text style={styles.subtitle}>{data.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 30,
    backgroundColor: colors.white,
    shadowColor: colors.black200,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'center',
  },
  icon: {
    width: 23,
    height: 23,
  },
  iconContainer: {
    backgroundColor: colors.gray,
    borderRadius: 1000,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.black100,
  },
  subtitle: {
    fontSize: 18,
    color: colors.black300,
    paddingVertical: 20,
  },
  contentContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white300,
  },
});

export default Card;
