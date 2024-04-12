import React from 'react';
import {StyleSheet, View, Button, Alert, TouchableOpacity, Text} from 'react-native';

const App = () => {
  const click = () => {Alert.alert('React native', 'Halo!');};
  const click2 = () => {Alert.alert('React', 'Halo_v2!');};


  return (
    <View style={styles.container}>
        <Button title="Click me 😘" onPress={click} />
        <TouchableOpacity onPress={click2} style={styles.touchStyle}>
            <Text style={styles.textStyle}>Hey that 😎</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  touchStyle:{
    backgroundColor:'#4C8A9A',
    padding:'10',
    alignItems:'center',
    marginTop:'10',
  },
  textStyle:{
    color:'white',
    fontSize: 18,
  },
});

export default App;
