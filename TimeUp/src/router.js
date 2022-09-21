import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator}from '@react-navigation/stack';
import { Feather} from '@expo/vector-icons';

import Home  from './pages/Home';
import Detail from './pages/Detail';





 const Stack =  createStackNavigator();

 function Routes(){
    return(
            <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="detail" component={Detail}/>
            </Stack.Navigator>
            </NavigationContainer>
    );
 }

 

 export  default  Routes;