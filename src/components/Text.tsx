import React from 'react';
import {Text as TextRN, TextProps} from 'react-native';

const Text: React.FC<TextProps> = ({children, ...props}) => {
  return <TextRN {...props}>{children}</TextRN>;
};

export default Text;
