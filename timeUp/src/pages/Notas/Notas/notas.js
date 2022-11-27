import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Alert
} from 'react-native'
import styles from './style-notas'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getAuth } from 'firebase/auth'
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Octicons,
  Ionicons,
  Foundation,
  Feather,
  FontAwesome5
} from '@expo/vector-icons'
//import firebaseConnection from '../../../firebase/config'
import uniqueId from '../../Notas/servico/unique-id'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Home from '../Home/home'

export default function Notas() {
  const navigation = useNavigation()

  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  async function saveNote() {
    /*useEffect(() => {
      async function carregaDados() {
        const content = await AsyncStorage.getContent('content')
        const title = await AsyncStorage.getTitle('title')
        if (content) {
          setContent(JSON.parse(content))
        }
        if (title) {
          setTitle(JSON.parse(title))
        }
      }
      carregaDados()
    }, [])*/

    useEffect(
      () => {
        async function salvaDados() {
          AsyncStorage.setContent('content', JSON.stringify(content))
          AsyncStorage.setTitle('title', JSON.stringify(title))
        }
        salvaDados()
      },
      [content],
      [title]
    )

    /*async function saveNote(id) {
    if (id === undefined) {
      id = uniqueId()
    }

    await firebaseConnection
      .database()
      .ref('Notas/' + id.toString())
      .set({
        title,
        content
      })
      .then(navigation.navigate('home'))*/
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textOptions}>
          <View style={styles.option}></View>
        </View>

        <View style={styles.actionButtons} size={28}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => saveNote()}
            onPressIn={Home}
          >
            <Text style={styles.textButton}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.labelInput}>
        <TextInput
          style={styles.title}
          placeholder="Titulo"
          value={title}
          onChangeText={value => setTitle(value)}
        />

        <KeyboardAvoidingView behavior="padding">
          <TextInput
            placeholder="Nota"
            style={styles.content}
            multiline={true}
            value={content}
            onChangeText={value => setContent(value)}
          />
        </KeyboardAvoidingView>
      </View>

      <KeyboardAvoidingView
        style={[styles.formatOptions, { position: 'absolute', bottom: 0 }]}
        behavior="height"
      >
        <TouchableOpacity>
          <Ionicons
            style={[{ marginLeft: -5 }]}
            name="ios-checkbox-outline"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Foundation style={styles.formatIcon} name="list-number" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Foundation style={styles.formatIcon} name="list-bullet" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.formatIcon}
            name="format-bold"
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather style={styles.formatIcon} name="italic" size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 style={styles.formatIcon} name="underline" size={16} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}
