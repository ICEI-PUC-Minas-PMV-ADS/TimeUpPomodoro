import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'
export default function  Info1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInY"
        source={require('../../../assets/tomate.png')}
        style={{width:"80%"}}
        resizeMode="contain"/>
      </View>
      <Animatable.View animation="fadeInRight" delay={500} style={styles.containerHeader}>
         <Text style={styles.text}>Conforme a metodologia Pomodoro, acreditamos que descanso é essencial para uma boa produtividade</Text>  
         </Animatable.View>
         <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Info2')}>
          <Text style={styles.buttonText}>Próximo</Text>
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
    marginTop:'11%',
    marginBottom:'70%',
    paddingStart:'0%',

  },
  containerLogo:{
    flex: 2,  
    alignItems:'flex-end',
    marginBottom:'-110%',
  },
    text:{
    
      fontSize:28,
      fontWeight: 'bold',
      color:'#fff',
      textAlign:'right',
      width:'50%',
      bottom:'-25%',
      left:'47%'
    
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