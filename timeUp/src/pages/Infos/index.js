import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'
export default function  Infos() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInY"
        source={require('../../assets/principal.png')}
        style={{width:"70%"}}
        resizeMode="contain"/>
      </View>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Olá!</Text>  
         <Text style={styles.text}>Vamos construir uma rotina mais
         saudável?</Text>  
         </Animatable.View>
         <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Info1')}>
          <Text style={styles.buttonText}>Vamos!</Text>
        </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'#FFF4EF',
  },
  containerHeader:{
    marginTop:'10%',
    marginBottom:'60%',
    paddingStart:'0%',

  },
  containerLogo:{
    flex: 2,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'-50%',
  },
  message:{
    marginTop:'25%',
    fontSize:28,
    fontWeight: 'bold',
    color:'#6C5492',
    textAlign:'center'
    },
    text:{
      marginTop:'0%',
      fontSize:28,
      fontWeight: 'bold',
      color:'#6C5492',
      textAlign:'center'
      },
      button:{
        position:'absolute',
        backgroundColor:'#6C5492',
        borderRadius: 50,
        paddingVertical: 8,
        width:'60%',
        alignSelf:'center',
        bottom:'5%',
        alignItems:'center',
        justifyContent:'center'
      },
      buttonText:{
        fontSize:18,
        color:'#FFF',
        fontWeight: 'bold'
    
      }
})