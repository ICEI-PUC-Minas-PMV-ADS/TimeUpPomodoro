import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  Modal,
  Button,
} from "react-native";
import { useTheme } from "../NightMode/themes";
import ModalPicker from "./modalPicker";
import { Audio } from 'expo-av';

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

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  };
  const [chooseData] = useState("");
  const [isModalVisible, setisModalVisible] = useState(false);
  const setData = (option) => {
    console.log(option);
  };

  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/alarmStatus.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

 useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    if (timerRunning) return;
    stopTimer();
    setTimer();
  }, [secondsFocus, minutesFocus, secondsBreak, minutesBreak, isFocus]);

  const setTimer = () => {
    if (isFocus) {
      setSeconds(secondsFocus);
      setMinutes(minutesFocus);
    } else {
      setSeconds(secondsBreak);
      setMinutes(minutesBreak);
    }
  };

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
    let changeMinutes = false;
    setSeconds((oldSeconds) => {
      if (oldSeconds == 0) {
          changeMinutes = true;
          return 59;
      }
      return oldSeconds - 1;
    });
    setMinutes((oldMinutes) => {
      if (changeMinutes && oldMinutes == 0) {
          setIsFocus(!isFocus);
          playSound();
          setTimerRunning(false);
          return 0;
        }
      if (changeMinutes) return oldMinutes - 1;
      return oldMinutes;
    });
  };

  const { dark, colors, setScheme } = useTheme();

  const toggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.background }]}>
      <View style={styles.containerLogo}>
        <Image
          source={
            dark === true
              ? require("../../assets/logonight.png")
              : require("../../assets/logoTimeUp.png")
          }
        />
        <Switch
          trackColor={{ false: "#FF4C4C", true: "#FF9C9C" }}
          value={dark}
          onValueChange={toggleTheme}
        />
      </View>

      <View style={styles.containerTimer}>
        <Text style={[styles.textTimer, { color: colors.text }]}>
          {("0" + minutes).slice(-2)}:{("0" + seconds).slice(-2)}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.secondaryButton,
              { backgroundColor: colors.secondary },
            ]}
            onPress={() => changeModalVisibility(true)}
          >
            <Image
              source={require("../../assets/iconConfig.png")}
              style={styles.buttonIcon}
            />
            <Text>{chooseData}</Text>
            <Modal
              transparent={true}
              animationType="fade"
              visible={isModalVisible}
              nRequestClose={() => changeModalVisibility(false)}
            >
              <ModalPicker
                changeModalVisibility={changeModalVisibility}
                setData={setData}
              />
            </Modal>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.primaryButton, { backgroundColor: colors.primary }]}
            onPress={variantTimer}
          >
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

          <TouchableOpacity
            style={[
              styles.secondaryButton,
              { backgroundColor: colors.secondary },
            ]}
            onPress={clear}
          >
            <Image
              source={require("../../assets/skip-new.png")}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.containerInputTimer}>
          <View style={styles.inputTimer}>
            <Text style={[styles.textInputTimer, { color: colors.text }]}>
              Foco (minutos : segundos):
            </Text>
            <TextInput
              style={[styles.textInputValue, { color: colors.text }]}
              maxLength={2}
              onChangeText={setMinutesFocus}
              value={minutesFocus}
              placeholder="25"
              placeholderTextColor={dark ? "#FFF4EF85" : "#47151585"}
            />
            <Text style={[styles.textInputTimer, { color: colors.text }]}>
              {" "}
              :{" "}
            </Text>
            <TextInput
              style={[styles.textInputValue, { color: colors.text }]}
              maxLength={2}
              onChangeText={setSecondsFocus}
              value={secondsFocus}
              placeholder="00"
              placeholderTextColor={dark ? "#FFF4EF85" : "#47151585"}
            />
          </View>

          <View style={styles.inputTimer}>
            <Text style={[styles.textInputTimer, { color: colors.text }]}>
              Pausa (minutos : segundos):
            </Text>
            <TextInput
              style={[styles.textInputValue, { color: colors.text }]}
              maxLength={2}
              onChangeText={setMinutesBreak}
              value={minutesBreak}
              placeholder="05"
              placeholderTextColor={dark ? "#FFF4EF85" : "#47151585"}
            />
            <Text style={[styles.textInputTimer, { color: colors.text }]}>
              {" "}
              :{" "}
            </Text>
            <TextInput
              style={[styles.textInputValue, { color: colors.text }]}
              maxLength={2}
              onChangeText={setSecondsBreak}
              value={secondsBreak}
              placeholder="00"
              placeholderTextColor={dark ? "#FFF4EF85" : "#47151585"}
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
    fontWeight: "bold",
    marginRight: 5,
  },
  textInputValue: {
    fontSize: 20,
  },
});
