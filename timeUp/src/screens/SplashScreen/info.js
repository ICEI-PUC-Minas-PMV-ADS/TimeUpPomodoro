import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View , SafeAreaView,  Text, Image, Button 
  } from 'react-native';
import { LogoInfo, ComponentInfo} from '../../components/atoms/LogoInfo/index'




export const HelperScreen = () => {
  return (
    <View style={styles.container}>
      <LogoInfo/>
      <StatusBar style="auto" />
      <Text style={styles.Text}>
              Vamos construir uma rotina
         mais saudável?</Text>
         <ComponentInfo/>
       
    </View>
   
  );
}

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: 'FFF4EF',
      alignItems: 'center',
      justifyContent: 'center',
        position: 'absolute',
        width: 160,
        height: 169,
        left: 127,
        top: 218,
        border: '1px solid',
    },

    Text:{
position: 'absolute',
width: 280,
height: 130,
left: -60,
top: 250,

fontFamily:'Poppins',
fontSize: 30,
lineHeight: 36,
display:"flex",
alignItems: 'center',
justifyContent:'center',
color: '#6C5492',
flex: 1,


    }

  });
