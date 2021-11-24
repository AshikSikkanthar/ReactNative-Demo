import React from 'react';
import { Text,TextInput, View, Image } from 'react-native';

function Img() {
    return (
        <View>
             <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text>This is a Simple Image</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="This My text box!!!"
      />
        </View>
    )
}

export default Img
