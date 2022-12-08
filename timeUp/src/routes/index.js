import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Infos from '../pages/Infos'
import Info1 from '../pages/Infos/info1'
import Info2 from '../pages/Infos/info2'
import Info3 from '../pages/Infos/info3'
import Info4 from '../pages/Infos/info4'
import Time from '../pages/Timer'

import ListaTodo from '../pages/Infos/listaTodo'
import Home from '../pages/Notas/Home/home'
import Notas from '../pages/Notas/Notas/notas'
import StickyNotes from '../pages/StickyNotes'


const Stack = createNativeStackNavigator()


export default function Routes(){
    return(
    
        <Stack.Navigator initialRouteName='Welcome'>
      
            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
            />
        
            
            <Stack.Screen
            name="Infos"
            component={Infos}        
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Info1"
            component={Info1}        
            options={{headerShown: false}}
            /><Stack.Screen
            name="Info2"
            component={Info2}        
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Info3"
            component={Info3}        
            options={{headerShown: false}}
            />
             <Stack.Screen
            name="Info4"
            component={Info4}        
            options={{headerShown: false}}
            />
            <Stack.Screen
                name="ListaTODO"
                component={ListaTodo}        
                options={{headerShown: false}}
            />
            <Stack.Screen
              name="Notas"
             component={Notas}
            options={{ headerShown: false }}
              />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
              />
              
          <Stack.Screen
            name="Time"
            component={Time}        
            options={{headerShown: false}}
            />
            <Stack.Screen
              name="StickyNotes"
              component={StickyNotes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />
           
        </Stack.Navigator>
          
    
    )

}

