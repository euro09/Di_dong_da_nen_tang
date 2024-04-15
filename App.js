import React from "react";
import { Button, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Bai1 from "./TH_1/Hello_world"; 
import Bai2 from "./TH_1/Capturing_taps";
import Bai3 from "./TH_1/Custom_Component";
import Bai4 from "./TH_1/State_Props";
import Bai5 from "./TH_1/Styling";
import Bai6 from "./TH_1/Scrollable_content";
import Bai7 from "./TH_1/Building_a_form";
import Bai8 from "./TH_1/Long_lists";
// import Lab1p2 from "./screens/Lab1p2";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bai1" component={Bai1} />
        <Stack.Screen name="Bai2" component={Bai2} />
        <Stack.Screen name="Bai3" component={Bai3} />
        <Stack.Screen name="Bai4" component={Bai4} />
        <Stack.Screen name="Bai5" component={Bai5} />
        <Stack.Screen name="Bai6" component={Bai6} />
        <Stack.Screen name="Bai7" component={Bai7} />
        <Stack.Screen name="Bai8" component={Bai8} />
        {/* <Stack.Screen name="Lab1p2" component={Lab1p2}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
    <View style={{ flex: 1, marginRight: 10 ,  alignItems: "center"}}>
      <Button title="Hello_world" onPress={() => navigation.navigate('Bai1')} />
    </View>
    <View style={{ flex: 1,  alignItems: "center" }}>
      <Button title="Capturing_taps" onPress={() => navigation.navigate('Bai2')} />
    </View>
  </View>
  <View style={{ flexDirection: 'row' }}>
    <View style={{ flex: 1, marginRight: 10 ,  alignItems: "center"}}>
      <Button title="Custom_Component" onPress={() => navigation.navigate('Bai3')} />
    </View>
    <View style={{ flex: 1,  alignItems: "center" }}>
      <Button title="State_Props" onPress={() => navigation.navigate('Bai4')} />
    </View>
  </View>
  <View style={{ flexDirection: 'row', marginTop: 10 }}>
    <View style={{ flex: 1, marginRight: 10 , alignItems: "center"}}>
      <Button title="Styling" onPress={() => navigation.navigate('Bai5')} />
    </View>
    <View style={{ flex: 1 ,  alignItems: "center"}}>
      <Button title="Scrollable_content" onPress={() => navigation.navigate('Bai6')} />
    </View>
  </View>
  <View style={{ flexDirection: 'row' }}>
    <View style={{ flex: 1, marginRight: 10 ,  alignItems: "center"}}>
      <Button title="Building_a_form" onPress={() => navigation.navigate('Bai7')} />
    </View>
    <View style={{ flex: 1 ,  alignItems: "center"}}>
      <Button title="Long_lists" onPress={() => navigation.navigate('Bai8')} />
    </View>
  </View>
      {/* <Button title="Lab1p2" onPress={() => navigation.navigate('Lab1p2')} /> */}
    </SafeAreaView>
  );
};

export default App;