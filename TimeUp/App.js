import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppLoadingProp } from 'expo';
import { useFonts, Montserrat_400Regular , Montserrat_500Medium, Montserrat_700Bold  } from '@expo-google-fonts/montserrat';




export  default function App(){
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular ,
     Montserrat_500Medium,
      Montserrat_700Bold
  })
   if(!fontsLoaded){
  return <AppLoadingProp/>
   }

   return (
    <>
    <StatusBar style='light' backgroundColor='#000' translucent='false'/>
    <Routes/>   
    </>
   );
  
}

