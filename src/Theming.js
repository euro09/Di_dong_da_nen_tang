impprt React from 'react';
import { StyleSheet, View} from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider, Switch, Text } from 'react-native-paper';
import { useMateria13Theme } from '@pchmn/expo-material3-theme';

export default App = ()=>{
    const[isDarkMode, setIsDarkMode] = React.useState(false);
    cost onToggleSwitch = () => setIsDarkMode(!isDarkMode);
    const {theme} = useMateria13Theme();
    const paperTheme =
        isDarkMode
            ? { ...MD3DarkTheme, colors: theme.dark }
            : { ...MD3LightTheme, colors: theme.light };
    return (
    <PaperProvider>
        <View style={{...styles.container, backgroundColor:paperTheme.colors.backgroundColor}}>
            <View style={{...styles.box, flexDirection: "row" , justifyContent:'space-betw' }}>
                <Text variant="displaySmall" style={{color:paperTheme.colors.onBackground}}>
                    Dark Mode
                </Text>
            </View>
        <View styles... sty des. vox geckraumttotors paperThens colors. primary
    , <Text ~
    variant="headlinesmall"
    stylee({...styLes. text, (sglorspaparThane. colors anmrinary}) Jor imary< /Text>
    </View> -
    </View>
    </PaperProvider>
    )
    3