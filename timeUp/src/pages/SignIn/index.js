import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button,  Alert} from 'react-native';
import React, { useState} from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';
import {  signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../firebase/config";




export default function  SignIn() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Login (){
    if(email === '' || password === '')
    {
      Alert.alert('Algo deu errado!','Gentileza preencher todos os campos.');
      return 
    }
  };
async function login(){

  await signInWithEmailAndPassword(auth, email, password)
  .then(value => {
    let user= value.user;  
    navigation.navigate('Infos', {idUser: user.uid})
  })
 .catch(error => Alert.alert("Ops!","Email ou senha incorretos!"));
   return;

}
  return (
    
      
    
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}> Bem-Vindo(a)</Text>
      </Animatable.View>

     <Animatable.View animation="fadeInUp" style={styles.containerForm}> 
    
      <Text style={styles.title}>Email</Text>
      <TextInput value={email}
      onChangeText={value => setEmail(value)}
      placeholder='Digite um email...' style={styles.input}
      />
      <Text style={styles.title}>Senha</Text>
      <TextInput value={password}
      onChangeText={value => setPassword(value)}
      placeholder='Digite sua senha...'  secureTextEntry={true} style={styles.input}    
      />
      
      <TouchableOpacity style={styles.button}
      onPress={() => login()}
      onPressIn={Login}>
        <Text  style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
     
    
      <TouchableOpacity style={styles.buttonRegister}
       onPress={() => navigation.navigate('Register')}>
        <Text  style={styles.registerText}>Não possui um conta? Cadastre-se</Text>
      
      </TouchableOpacity>
    

      </Animatable.View>
    </View>
  
  )
 
}


const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'#F74F43',
  },
  containerHeader:{
    marginTop:'14%',
    marginBottom:'8%',
    paddingStart:'5%',
  },
  message:{
  fontSize:28,
  fontWeight: 'bold',
  color:'#FFF'
  },
containerForm:{
  backgroundColor:"#FFF",
  flex:1,
  borderTopLeftRadius:25,
  borderTopRightRadius:25,
  paddingStart:'5%',
  paddingEnd:'5%',
},
title:{
  fontSize:20,
  marginTop:28,
},
input:{
  borderBottomWidth:1,
  height:40,
  marginBottom:12,
  fontSize:16,
},
button:{
  backgroundColor:'#F74F43',
  width:'100%',
  borderRadius:4,
  paddingVertical:8,
  marginTop:14,
  justifyContent:'center',
  alignItems:'center',
},
buttonText:{
  color:'#FFF',
  fontSize:18,
  fontWeight:'bold',
},
buttonRegister:{
  marginTop:14,
  alignSelf:'center',  
},
registerText:{
  color:'#a1a1a1'
}
})