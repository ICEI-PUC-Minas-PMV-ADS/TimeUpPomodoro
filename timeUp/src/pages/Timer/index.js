import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from "react-native";
import ModalPicker from './ModalPicker';

export default function Time() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [customInterval, setCustomInterval] = useState();
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState('...'); 

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }

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
      if (oldSeconds == 0) {
        setMinutes(minutes - 1)
        return 59
      }
      return oldSeconds - 1;
    });
  };

  const setData = (option) => {
    console.log(option)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.containerLogo}>
        <Image source={require("../../assets/logoTimeUp.png")} />
      </View>

      <View style={styles.containerTimer}>
        <Text style={styles.textTimer}>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => changeModalVisibility(true)}
            style={styles.secondaryButton}
          >
            <Text>{chooseData}</Text>
            <Modal
              transparent={true}
              animationType='fade'
              visible={isModalVisible}
              nRequestClose={() => changeModalVisibility(false)}
            >
              <ModalPicker
                changeModalVisibility={changeModalVisibility}
                setData={setData}
              />
            </Modal>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} onPress={startTimer}>
            <Image
              source={require("../../assets/play.png")}
              style={styles.buttonIconPrimary}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={clear}>
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
});
