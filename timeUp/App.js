import React from 'react';
import { StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';
import { ThemeProvider } from './src/pages/NightMode/themes';
import Topo from "./src/pages/Infos/listaTodo/Topo";

export default function App() {
  
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar barStyle="default"/>
        <Routes/>
      </NavigationContainer>
    </ThemeProvider>
  );

}



