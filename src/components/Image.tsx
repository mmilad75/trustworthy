import React from 'react';
import {Image as ImageRN, ImageProps} from 'react-native';

const Image: React.FC<ImageProps> = ({...props}) => {
  return <ImageRN resizeMode="contain" {...props} />;
};

export default Image;
