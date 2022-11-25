import React from 'react';
import { StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';
import { ThemeProvider } from './src/pages/nigthmode_test/themes';

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



