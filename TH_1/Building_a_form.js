import React, { useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Your name</Text>
      <TextInput
        style={styles.input}
        placeholder="Text here"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        onChangeText={(text) => setName(text)} // Update with entered text
        value={name}
      />
      <Button
        title="Say Halo"
        onPress={() => {
          alert(`Halo, ${name}!`); // Use template literals for string interpolation
          setName('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
    padding: 20,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  input: {
    margin: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
