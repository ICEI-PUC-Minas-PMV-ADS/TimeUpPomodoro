import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ListNotes from '../Lista/listanotas'
import styles from '../Home/home-style'

import { SimpleLineIcons, EvilIcons, Octicons } from '@expo/vector-icons'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <SimpleLineIcons
            style={[styles.icon, { marginLeft: 10 }]}
            size={20}
            name="menu"
          />
        </TouchableOpacity>
        <Text style={styles.title}>All notes</Text>
        <TouchableOpacity>
          <EvilIcons style={styles.icon} name="search" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons
            style={[styles.icon, { marginLeft: 20 }]}
            name="kebab-vertical"
            size={20}
          />
        </TouchableOpacity>
      </View>

      <ListNotes />

      <TouchableOpacity
        onPress={() => navigation.navigate('Notas', { id: undefined })}
        buttonStyle={styles.button}
        style={styles.button}
      >
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
