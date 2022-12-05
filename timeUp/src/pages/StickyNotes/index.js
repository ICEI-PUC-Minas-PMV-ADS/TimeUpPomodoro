import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StickyNote from "../../components/StickyNote";
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid';

export default function StickyNotes() {
  const [notes, setNotes] = useState()

  useEffect(() => {
    getNotesList()
    storePinnedNotes()
  }, [])

  function saveNotes(value){
    setNotes(value)
    storeNotesList(value)
  }

  const storePinnedNotes = async () => {
    try {
      const pinned = []
      notes.map((note)=>{
        if(note.pinned){
          pinned.push(note.id)
        }
      })
      await AsyncStorage.setItem('stickyNotesPinned', JSON.stringify(pinned))
    } catch (e) {
      console.log(e)
    }
  }

  const getNotesList = async () => {
    try {
      const value = await AsyncStorage.getItem('stickyNotesList')
      setNotes(JSON.parse(value))
    } catch (e) {
      console.log(e)
    }
  }

  const storeNotesList = async (value) => {
    try {
      await AsyncStorage.setItem('stickyNotesList', JSON.stringify(value))
    } catch (e) {
      console.log(e)
    }
  }

  const addEmpty = () => {
    const newNotes = [...notes]
    newNotes.unshift({
      id: uuid.v4(),
      title: '',
      description: '',
      pinned: true
    })
    saveNotes(newNotes)
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={styles.wrapper}
        data={notes}
        renderItem={(note) => <StickyNote key={note.id} data={note} notes={notes} saveNotes={saveNotes} />}
      />
      <TouchableOpacity style={styles.addButton} onPress={addEmpty}>
        <Icon name="note-plus-outline" size={20} color="#292B2C" />
        <Text style={styles.addButtonText}>ADICIONAR STICKY NOTE </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  addButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 20,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 30
  },
  addButtonText: {
    fontWeight: 'bold',
    marginLeft: 10
  }
});
