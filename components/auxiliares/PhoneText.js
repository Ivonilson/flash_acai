import React from 'react';
import { Text, Linking } from 'react-native';

const PhoneText = ({ phoneNumber }) => {
  const handlePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <Text style={{ color: 'white', fontSize: 5, marginStart: 0 }} onPress={handlePress}>
      {phoneNumber}
    </Text>
  );
};

export default PhoneText;