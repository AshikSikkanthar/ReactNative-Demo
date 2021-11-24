import React from 'react';
import { Text, View } from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>I am ashik !!!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Text>Welcome to My react native web development!!!</Text>
      <Cat />
      <Cat />
      
    </View>
  );
}

export default Cafe;