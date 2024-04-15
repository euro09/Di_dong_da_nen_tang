import { StyleSheet, Text, Vibration, View, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";

const Calculator = () => {
    // darkMode
    const [darkMode, setDarkMode] = useState(false);
    const [textColor, setTextColor] = useState("black");
    const bgColorFunction = darkMode ? "#414853" : "#ededed";
    const bgColorumber = darkMode ? "#303946" : "#FFF";
    const bgColorResult = darkMode ? "#282636" : "#FSF5F5";
    const bgColorThemeButton = darkMode ? "#758084" : "seSeSes";
    const textColorHistory = darkMode ? "#BSB7BB" : "7c7c7c";
    const colorIcon = darkMode ? "white" : "black";
    
    // Button
    const buttonsLeft = [
        ["C", "DEL"],
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [0, '.']
    ]
    const buttonsRight = [
        '/','*','-','+','='
    ]

    const handleInput = (buttonPress) => {
        switch (buttonPress) {
            case '+': case '-': case '*': case '/':
                Vibration.vibrate(35);
                setCurrentNumber(currentNumber + buttonPress);
                break;
            case "DEL":
                Vibration.vibrate(35);
                setCurrentNumber(currentNumber.substring(0, (currentNumber.length-1)));
                break;
            case "C":
                Vibration.vibrate(35);
                setCurrentNumber("");
                setLastNumber("");
                break;
            case "=":
                Vibration.vibrate(35);
                setLastNumber(currentNumber + "=");
                evaluateExpression();
                break;
            default: // All other buttons: 0-9 and .
                Vibration.vibrate(35);
                setCurrentNumber(currentNumber + buttonPress);
                break;
        }
    }

    const [currentNumber, setCurrentNumber] = useState("");
    const [lastNumber, setLastNumber] = useState("");

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setTextColor(darkMode ? "black" : "white"); // Cập nhật màu chữ tương ứng
    };

    const evaluateExpression = () => {
        let lastChar = currentNumber[currentNumber.length-1];
        if (['+', '-', '*', '/'].includes(lastChar)) {
            setCurrentNumber(currentNumber);
        } else {
            let result = eval(currentNumber).toString();
            setCurrentNumber(result);
        }
    }
    
    // Render GUI
    return (
        <View style={styles.container}>
            <View style={{...styles.containerResult, backgroundColor: bgColorResult}}>
                <TouchableOpacity style={{...styles.themeButton, backgroundColor: bgColorThemeButton}}
                    onPress={toggleDarkMode}>
                    <Entypo name={darkMode ? 'light-up' : 'moon'} size={40} style={{color: colorIcon}} />
                </TouchableOpacity>
                <Text style={{...styles.historyText, color: textColorHistory}}>{lastNumber}</Text>
                <Text style={styles.resultText}>{currentNumber}</Text>
            </View>
            <View style={styles.containerButton}>
                <View style={{...styles.containerButtonLeft, backgroundColor: bgColorumber}}>
                    {buttonsLeft.map((row, index) =>
                        <View style={{...styles.containerRow, backgroundColor: (index === 0) ? bgColorFunction : bgColorumber}}>
                            {
                                row.map(item =>
                                    <TouchableOpacity style={styles.button} onPress={() => handleInput(item)}>
                                        <Text style={styles.buttonText}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    )}
                </View>
                <View style={{...styles.containerButtonRight, backgroundColor: bgColorumber}}>
                    {buttonsRight.map((item) =>
                        <TouchableOpacity style={{...styles.button}} onPress={() => handleInput(item)}>
                            <Text style={{...styles.buttonText}}>{item}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerResult: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "flex-end",
    },
    containerButtonLeft: {
        flex: 3,
    },
    containerButtonRight: {
        flex: 1,
    },
    containerButton: {
        flex: 2,
        flexDirection: 'row',
    },
    themeButton: {
        marginTop: 50,
        marginLeft: 20,
        borderRadius: 90,
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
    },
    historyText: {
        fontSize: 20,
        marginRight: 10,
    },
    resultText: {
        color: "#006946",
        fontSize: 35,
        margin: 15,
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default Calculator;
