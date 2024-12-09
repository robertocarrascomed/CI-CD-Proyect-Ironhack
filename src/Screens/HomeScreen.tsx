// HomeScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Profile" onPress={() => console.log('first')} />
    </View>
  );
};

export default HomeScreen;
