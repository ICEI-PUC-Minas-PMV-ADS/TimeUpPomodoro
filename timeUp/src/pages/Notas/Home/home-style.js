import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop: Constants.statusBarHeight
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#262626',
    fontFamily: 'Roboto',
    marginLeft: 15,
    letterSpacing: -0.5,
    fontWeight: 'bold',
    width: '65%'
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#d85a2c',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  textButton: {
    fontSize: 40,
    color: '#fff'
  },
  icon: {
    color: '#d85a2c'
  },
  buttonsContainer: {
  
    alignItems:'flex-end' ,
    borderBottomWidth: 1,
    borderBottomColor: '#d85a2',
    paddingBottom: 10,
    marginTop: 10,
},
editButton: {
    marginLeft: 10,
    height: 40,
    width: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: '#d85a2',
    alignItems: 'center',
},
deleteButton: {
    marginLeft: 10,
    height: 40,
    width: 40,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: '#d85a2',
    alignItems: 'center'
},
buttonText: {
    color:'#fff',
    fontWeight:' bold',
},
textItem: {
    fontSize: 20,
}

})
