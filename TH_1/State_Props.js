import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  const [pressCount, setPressCount] = useState(0);
  const setCount = () => {
    setPressCount(pressCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>You have pressed the button: {pressCount} time(s)</Text>
      <Button title={`Pressed ${pressCount} time(s)`} onPress={setCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;
