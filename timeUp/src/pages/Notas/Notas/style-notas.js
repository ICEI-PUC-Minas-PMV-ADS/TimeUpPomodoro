import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center'
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#FF9C9C',
    paddingBottom: 2
  },

  textOptions: {
    flexDirection: 'row',
    marginLeft: 2
  },

  option: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    width: 60,
    marginRight: 5,
    borderRadius: 5
  },

  optionIcon: {
    color: '#FF9C9C'
  },

  textOption: {
    color: '#666666',
    letterSpacing: -0.5
  },

  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    marginLeft: 25
  },
  textButton: {
    textTransform: 'uppercase',
    color: '#FF9C9C',
    fontWeight: 'bold'
  },
  iconButton: {
    color: '#FF9C9C'
  },
  labelInput: {
    width: '90%',
    marginTop: 2
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 18
  },
  formatOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bold: {
    borderWidth: 1,
    borderColor: '#FF9C9C',
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    width: 18
  },
  formatIcon: {
    marginLeft: 40
  }
})
