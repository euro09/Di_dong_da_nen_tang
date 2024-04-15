import React from 'react';
import TH from './TH_1/Building_a_form'
import { PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <PaperProvider>
      <Button title="Go to Child Page 1" onPress={() => navigation.navigate('Child1')} />
      <Button title="Go to Child Page 2" onPress={() => navigation.navigate('Child2')} />
    </PaperProvider>
  );
};

const Child1Screen = () => {
  return (
    <PaperProvider>
      <Text>Child Page 1</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </PaperProvider>
  );
};

const Child2Screen = () => {
  return (
    <PaperProvider>
      <Text>Child Page 2</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </PaperProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Child1" component={Child1Screen} />
        <Stack.Screen name="Child2" component={Child2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
