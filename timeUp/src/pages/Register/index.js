import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useState}from 'react';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../fireBase/config';

export default function  Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Login (){
    if(email === '' || password === '')
    {
      Alert.alert('Algo deu errado!','Gentileza preencher todos os campos.');
      return;
    }
  };

async function createUser(){

  await createUserWithEmailAndPassword(auth, email, password)
  .then(value => {
    Alert.alert("Algo deu errado!","Cadastrado  realizado com sucesso!");
    navigation.navigate('SignIn')
  })
  .catch(error =>  Alert.alert("Algo deu errado!","Erro no Cadastrado!"));
  return;
}
 
  return (
    
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}> Cadastro</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}> 
      <Text style={styles.title}>Email</Text>
      <TextInput
      placeholder='Digite um email...' style={styles.input}
      value={email}
      onChangeText={value => setEmail(value)}
      />
      <Text style={styles.title}>Senha</Text>
      <TextInput
      placeholder='Digite sua senha...' style={styles.input}
      secureTextEntry={true}
      value={password}
      onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity style={styles.button}  onPress={() => createUser()}
      onPressIn={Login}>
        <Text  style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRegister}
       onPress={() => navigation.navigate('SignIn')}
       >
        <Text  style={styles.registerText}>Já possui conta? Logar</Text>
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