import { View, Text, StyleSheet,TouchableOpacity, TextInput, FlatList, Keyboard, Alert, KeyboardAvoidingView, Image, Switch, Platform  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Topo from './Topo';
import { useTheme } from "../../NightMode/themes";

export default function  ListaTodo() {
  
  const navigation = useNavigation();

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

    async function addTask() {
    if(newTask == ''){
      Alert.alert("Campo Vazio!", "Insira o nome da tarefa.");
      return;
    }
    const search = task.filter(task => task === newTask);

    if (search.length !== 0) {
      Alert.alert("O nome já existe!", "Insira um novo nome para a tarefa.");
      return;
    }

    setTask([...task, newTask]);
    setNewTask("");

    Keyboard.dismiss();
  }

  async function removeTask(item) {
    Alert.alert(
      "Deletar Tarefa.",
      "Tem certeza que deseja remover esta anotação?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => setTask(task.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    async function carregaDados() {
      const task = await AsyncStorage.getItem("task");

      if (task) {
        setTask(JSON.parse(task));
      }
    }
    carregaDados();
  }, []);

  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("task", JSON.stringify(task));
    }
    salvaDados();
  }, [task]);


  const { dark, colors, setScheme } = useTheme();

  const toggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

  return (
    
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        style={{ flex: 1 }}
        enabled={Platform.OS === "ios"}
      > 
        <View style={[styles.container, { backgroundColor: colors.background }]}>

        <View style={styles.containerLogo}>
            <Image
              source={
                dark === true
                  ? require("../../../assets/logonight.png")
                  : require("../../../assets/logoTimeUp.png")
              }
            />
            <Switch
              trackColor={{ false: "#FF4C4C", true: "#FF9C9C" }}
              value={dark}
              onValueChange={toggleTheme}
            />
          </View>

          
        

            <View style={styles.Body}>
              <Topo style={[styles.container, { backgroundColor: colors.background }]}/>
                
                <FlatList
                  data={task}
                  keyExtractor={item => item.toString()}
                  showsVerticalScrollIndicator={false}
                  style={styles.FlatList}
                  renderItem={({ item }) => (
                    <View style={styles.ContainerView}>
                      <Text style={styles.Texto}>{item}</Text>
                      <TouchableOpacity onPress={() => removeTask(item)}>
                        <MaterialIcons
                          name="delete-forever"
                          size={25}
                          color="#f64c75"
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                />
            
            </View>

            <View style={styles.Form}>
              <TextInput
                style={styles.Input}
                placeholderTextColor="#999"
                autoCorrect={true}
                value={newTask}
                placeholder="Adicione uma tarefa"
                maxLength={25}
                onChangeText={text => setNewTask(text)}
              />
              
              <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
                <Ionicons name="ios-add" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
      </KeyboardAvoidingView>
      
      
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4EF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20
  },
  Body: {
    flex: 1

  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: '#FA8072',
      
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFFAFA',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderEndWidth: 1,
    borderColor: '#FF6347'
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 4,
    marginLeft: 10,
  },
  FlatList: {
    FlatList: {
      flex: 1,
      marginTop: 20
    }
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: '#eee',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#eee'

  },
  Texto: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center'

  }
});