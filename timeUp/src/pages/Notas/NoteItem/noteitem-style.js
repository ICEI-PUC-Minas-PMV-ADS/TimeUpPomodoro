import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '95%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#c2c2c2',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    marginBottom: 10
  },
  id: {
    display: 'none'
  },
  header: {
    width: '100%'
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  containerDate: {
    flexDirection: 'row',
    marginTop: 5,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    paddingTop: 1
  },
  date: {
    color: '#a6a6a6',
    fontSize: 12
  },
  division: {
    color: '#a6a6a6',
    marginLeft: 5,
    marginRight: 5
  }
})
