import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const App = () => {
    const Square = ({ text, bgColor = '#4C8A9A'}) => (
        <View style={[styles.box, {backgroundColor: bgColor}]}>
            <Text>{text}</Text>
        </View>
    );

  return (
    <View style={styles.container}>
        <Square text='Square 1'/>
        <Square text='Square 2' bgColor='aqua'/>
        <Square text='Square 3' bgColor='green'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  box:{
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
