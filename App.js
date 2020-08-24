import React, { useState } from 'react';
import Screen from './app/components/Screen';
import { TextInput, Text } from 'react-native';

export default function App() {
  const [firstName, setFirstName] = useState('')
  return (
   <Screen>
      <Text>{firstName}</Text>
      <TextInput 
        secureTextEntry={true}
        onChangeText={text => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1
        }}
        />
   </Screen>
  );
}

