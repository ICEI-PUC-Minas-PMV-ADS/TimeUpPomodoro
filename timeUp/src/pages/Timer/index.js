import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button } from "react-native";
import { Text, View, StyleSheet } from "react-native";
export default function Time() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [customInterval, setCustomInterval] = useState();
    //alterações: o estado inicial tem que ser 25 e retroceder, mas antes preciso ver
    const startTimer = () => {
        setCustomInterval(setInterval(() => {
            changeTime();
        }, 1000));
    };
    const stopTimer = () => {
        if (customInterval) {
            clearInterval(customInterval);
        }
    };
    const clear = () => {
        stopTimer();
        setSeconds(0);
        setMinutes(0);
    };
    const changeTime = () => {
        setSeconds((prevState) => {
            if (prevState + 1 == 60) {
                setMinutes(minutes + 1);
                return 0;
            }
            return prevState + 1;
        });
    };
    return (<View style={styles.container}>
      <Text style={styles.textTimer}>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={startTimer}/>
        <Button title="Stop" onPress={stopTimer}/>
        <Button title="Clear" onPress={clear}/>
      </View>

      <StatusBar style="auto"/>
    </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    textTimer: {
        fontSize: 30,
    },
    buttonContainer: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    }
});
