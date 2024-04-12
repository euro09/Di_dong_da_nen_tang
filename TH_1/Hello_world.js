import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
        <Text style={styles.textStyle}>Hello_world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    color:'black',
    fontWeight:'bold',
    fontSize: 18,
  }
})
export default App;