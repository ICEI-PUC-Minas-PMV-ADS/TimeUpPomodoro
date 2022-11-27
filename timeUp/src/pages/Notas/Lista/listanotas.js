import React, { useState, useEffect } from 'react'
import { View, Button, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import styles from '../Lista/lista-style'
import NoteItem from '../NoteItem/noteitem'

import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Text, ScrollView } from react-native;
import Home from '../../Notas/Home/home'

export default function listNotes() {
  const navigation = useNavigation()
  const [data, setData] = useState([])

  async function getNotes() {
    var notas = []

    await firebase
      .database()
      .ref('notas')
      .once('value', data => {
        data = data.toJSON()

        for (var key in data) {
          const id = key
          const title = data[key]['title']
          const content = data[key]['content']

          notas.push({
            id,
            title,
            content
          })
        }
      })
      .then(setData(notas))
  }

  function navigateToNote(id) {
    navigation.navigate('Notas', { id })
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigateToNote(item.id)}
            style={{ width: '100%', alignItems: 'center' }}
          >
            <NoteItem
              id={item.id}
              title={item.title}
              content={item.content}
              modifiedDate={'May 1, 2020'}
              creationDate={'Mar 27, 2020'}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
