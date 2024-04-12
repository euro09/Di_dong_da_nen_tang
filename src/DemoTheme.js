import React from 'react';
import { View, Text ,Image} from 'react-native';

// You can import supported modules from npm
import { useTheme } from 'react-native-paper';


const DemoTheme = () => {
  const theme = useTheme();
  return(
    <View style={{flex:1, backgroundColor: theme.colors.primary, justifyContent:'center', alignItems:'center',}}>
        <Text style={{color: theme.colors.onPrimary}}>Halo</Text>
    </View>
  )
}

export default DemoTheme;