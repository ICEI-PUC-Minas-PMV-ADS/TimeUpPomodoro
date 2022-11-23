import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Time() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [customInterval, setCustomInterval] = useState();

  const [timerRunning, setTimerRunning] = useState(false);

  const [secondsFocus, setSecondsFocus] = useState(0);
  const [minutesFocus, setMinutesFocus] = useState(25);

  const [secondsBreak, setSecondsBreak] = useState(0);
  const [minutesBreak, setMinutesBreak] = useState(5);

  const [isFocus, setIsFocus] = useState(true);

  useEffect(() => {
    if (timerRunning) return;
    setTimer();
  }, [secondsFocus, minutesFocus, secondsBreak, minutesBreak]);

  const setTimer = () => {
    if (isFocus) {
      setSeconds(secondsFocus);
      setMinutes(minutesFocus);
    } else {
      setSeconds(secondsBreak);
      setMinutes(minutesBreak);
    }
  }

  const stopTimer = () => {
    setTimerRunning(false);
    if (customInterval) {
      clearInterval(customInterval);
    }
  };
  const variantTimer = () => {
    if (timerRunning) stopTimer();
    else {
      setTimerRunning(true);
      setCustomInterval(
        setInterval(() => {
          changeTime();
        }, 1000)
      );
    }
  };
  const clear = () => {
    setIsFocus(!isFocus);
    stopTimer();
    setTimer();
  };

  const changeTime = () => {
    setSeconds((oldSeconds) => {
      if (oldSeconds == 0) {
       if (minutes == 0) {
        setIsFocus(!isFocus);
        setTimerRunning(false);
        return 0;
       }
       else {
        setMinutes(minutes - 1);
        return 59;
       }
      }
      return oldSeconds - 1;
    });
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.containerLogo}>
        <Image source={require("../../assets/logoTimeUp.png")} />
      </View>

      <View style={styles.containerTimer}>
        <Text style={styles.textTimer}>
          {("0" + minutes).slice(-2)}:
          {("0" + seconds).slice(-2)}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image
              source={require("../../assets/iconConfig.png")}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} onPress={variantTimer}>
            {timerRunning ? (
              <Image
                source={require("../../assets/Pause.png")}
                style={styles.buttonIconPrimary}
              />
            ) : (
              <Image
                source={require("../../assets/play.png")}
                style={styles.buttonIconPrimary}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={clear}>
            <Image
              source={require("../../assets/skip-new.png")}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.containerInputTimer}>
          <View style={styles.inputTimer}>
            <Text style={styles.textInputTimer}>Foco(minutos : segundos):</Text>
            <TextInput
              style={styles.textInputValue}
              maxLength={2}
              onChangeText={setMinutesFocus}
              value={minutesFocus}
              placeholder="00"
              defaultValue="25"
            />
            <Text style={styles.textInputTimer}> : </Text>
            <TextInput
              style={styles.textInputValue}
              maxLength={2}
              onChangeText={setSecondsFocus}
              value={secondsFocus}
              placeholder="00"
              defaultValue="00"
            />
          </View>

          <View style={styles.inputTimer}>
            <Text style={styles.textInputTimer}>
              Pausa(minutos : segundos):
            </Text>
            <TextInput
              style={styles.textInputValue}
              maxLength={2}
              onChangeText={setMinutesBreak}
              value={minutesBreak}
              defaultValue="5"
              placeholder="00"
            />
            <Text style={styles.textInputTimer}> : </Text>
            <TextInput
              style={styles.textInputValue}
              maxLength={2}
              onChangeText={setSecondsBreak}
              value={secondsBreak}
              defaultValue="00"
              placeholder="00"
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFF4EF",
  },
  containerLogo: {
    display: "flex",
    justifyContent: "flex-start",
    margin: 30,
    marginBottom: 5,
  },
  containerTimer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTimer: {
    fontSize: 100,
    color: "#471515",
    marginBottom: 40,
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
    marginTop: 9,
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
    backgroundColor: "#FF4C4C",
    borderRadius: 32,
    width: 128,
    height: 96,
    marginLeft: 16,
    marginRight: 16,
  },
  secondaryButton: {
    backgroundColor: "#FF9C9C",
    borderRadius: 24,
    width: 80,
    height: 80,
    padding: 24,
  },
  containerInputTimer: {
    marginTop: 50,
    alignItems: "center",
    padding: 20,
  },
  inputTimer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 5,
  },
  textInputTimer: {
    fontSize: 15,
    color: "#471515",
    fontWeight: "bold",
    marginRight: 5,
  },
  textInputValue: {
    fontSize: 20,
    color: "#471515",
  },
});
