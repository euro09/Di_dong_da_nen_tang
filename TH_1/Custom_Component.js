import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

const App = () => {
  const click = () => { Alert.alert('React native', 'Halo!'); };
  const click2 = () => { Alert.alert('React', 'See~ya!'); };

  const CustomButton = (props) => (
    <TouchableOpacity onPress={props.onPress} style={[styles.touchStyle, props.buttonStyle]}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomButton text="Hola 😘" onPress={click} />
      <CustomButton text='Bai Bai' onPress={click2} buttonStyle={styles.buttonStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchStyle: {
    backgroundColor: '#4C8A9A',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
  },
  buttonStyle: {
    backgroundColor: '#4C8A9A',
  },
});

export default App;
