import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, useColorScheme, Switch } from 'react-native';
import { useTheme } from "./themes";

export default function Time() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [customInterval, setCustomInterval] = useState();

  const startTimer = () => {
    setCustomInterval(
      setInterval(() => {
        changeTime();
      }, 1000)
    );
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
  //o intervalo de segundos está entre 59 e 0, caso os segundos fique negativo, 
  //retorna para 59 e desconta o minuto

  const changeTime = () => {
    if (seconds == 0 && minutes == 0)
    return;
    setSeconds((oldSeconds) => {
      if (oldSeconds == 0)
      {
        setMinutes (minutes - 1)
        return 59
      }
       return oldSeconds - 1;
    });
  };

  const {dark, colors, setScheme} = useTheme();

  const toggleTheme = () => {
    dark ? setScheme('light') : setScheme('dark');
  };

  return (
    <View style={[styles.wrapper, {backgroundColor: colors.background}]}>
      <View style={styles.containerLogo}>
        <Image source={ dark === true ?                  
                          require("../../assets/logonight.png") : 
                          require("../../assets/logoTimeUp.png")}/>
        <Switch trackColor={{ false: "#FF4C4C", true: "#FF9C9C" }}
        value = {dark} onValueChange = {toggleTheme} />
      </View>

      <View style={styles.containerTimer}>
        <Text style={[styles.textTimer, {color: colors.text}]}>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.secondaryButton, {backgroundColor: colors.secondary}]} onPress={stopTimer}>
            <Image
              source={require("../../assets/Pause.png")}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.primaryButton, {backgroundColor: colors.primary}]} onPress={startTimer}>
            <Image
              source={require("../../assets/play.png")}
              style={styles.buttonIconPrimary}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.secondaryButton, {backgroundColor: colors.secondary}]} onPress={clear}>
            <Image
              source={require("../../assets/skip-new.png")}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  containerLogo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginTop: 40,
    marginBottom: 5,
  },
  containerTimer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTimer: {
    fontSize: 100,
    marginBottom: 80,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonIcon: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 2,
  },
  buttonIconPrimary: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    marginTop: 33,
    marginLeft: 52,
  },
  primaryButton: {
    display: "flex",
    position: "relative",
    borderRadius: 32,
    width: 128,
    height: 96,
    marginLeft: 16,
    marginRight: 16,
  },
  secondaryButton: {
    borderRadius: 24,
    width: 80,
    height: 80,
    padding: 24,
  },
});
