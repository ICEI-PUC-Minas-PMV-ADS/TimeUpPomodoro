import React from 'react'
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function StickyNote({ data, saveNotes, notes }) {
  const navigation = useNavigation()

  const windowWidth = Dimensions.get('window').width

  function handleDelete(id) {
    const formatted = [...notes]
    formatted.map((note, index) => {
      if (note.id === id) {
        formatted.splice(index, 1)
      }
    })
    saveNotes(formatted)
  }

  function handlePinned(id) {
    const formatted = [...notes]
    formatted.map(note => {
      if (note.id === id) {
        note.pinned = !note.pinned
      }
    })
    saveNotes(formatted)
  }

  function handleClose(id) {
    const formatted = [...notes]
    formatted.map(note => {
      if (note.id === id) {
        note.pinned = !note.pinned
      }
    })
    saveNotes(formatted)
  }

  function handleOpenList() {
    navigation.navigate('StickyNotes')
  }

  function handleChangeTitle(value, data) {
    const formatted = [...notes]
    formatted.map(note => {
      if (note.id === data.id) {
        note.title = value
      }
    })
    saveNotes(formatted)
  }

  function handleChangeDescription(value, data) {
    const formatted = [...notes]
    formatted.map(note => {
      if (note.id === data.id) {
        note.description = value
      }
    })
    saveNotes(formatted)
  }

  return (
    <View style={[styles.note, { width: windowWidth - 40 }]}>
      <View style={styles.noteHeader}>
        {data.item ? (
          <TextInput
            style={styles.noteTitle}
            maxLength={20}
            onChangeText={text => {
              handleChangeTitle(text, data.item)
            }}
            value={data.item.title}
            placeholder="Anotação..."
            placeholderTextColor={'black'}
          />
        ) : (
          <Text style={{ flex: 1 }}>{data.title}</Text>
        )}
        {data.item ? (
          <>
            {/* fixed */}
            <TouchableOpacity onPress={() => handlePinned(data.item.id)}>
              <Icon
                name={data.item.pinned ? 'pin-off-outline' : 'pin-outline'}
                size={30}
                color="#292B2C"
              />
            </TouchableOpacity>
            {/* delete */}
            <TouchableOpacity
              onPress={() => handleDelete(data.item.id)}
              style={{ marginLeft: 5 }}
            >
              <Icon name="trash-can-outline" size={30} color="#292B2C" />
            </TouchableOpacity>
          </>
        ) : (
          <>
            {/* close */}
            <TouchableOpacity onPress={() => handleClose(data.id)}>
              <Icon name="pin-off-outline" size={30} color="#292B2C" />
            </TouchableOpacity>
            {/* menu */}
            <TouchableOpacity
              onPress={() => handleOpenList()}
              style={{ marginLeft: 5 }}
            >
              <Icon name="menu" size={30} color="#292B2C" />
            </TouchableOpacity>
          </>
        )}
      </View>
      {data.item ? (
        <TextInput
          style={styles.noteText}
          maxLength={250}
          onChangeText={text => {
            handleChangeDescription(text, data.item)
          }}
          multiline
          value={data.item.description}
          placeholder="Digite aqui..."
          placeholderTextColor={'black'}
        />
      ) : (
        <Text style={{ padding: 20 }}>{data.description}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  note: {
    backgroundColor: '#FF9C9C',
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    height: 210
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF4C4C',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noteTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1
  },
  noteText: {
    fontSize: 13,
    lineHeight: 18,
    margin: 20
  }
})
