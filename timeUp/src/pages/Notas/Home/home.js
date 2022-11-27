import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ListNotes from '../Lista/listanotas'
import styles from '../Home/home-style'


export default function Home(props) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notas</Text>
      </View>
      <View >
        <Text style={styles.title}>{props.item}</Text>
        <TouchableOpacity style={styles.deleteButton} >
                <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton} >
                <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
      </View>
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
