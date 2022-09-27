import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View , SafeAreaView,  Text, Image, Button, Alert
  } from 'react-native';
import { LogoInfo} from '../../components/atoms/LogoInfo/index'
import { Image1 }from '../../../assets/image1.png'
import { Image2 }from '../../../assets/image2.png'



export const HelperScreen = () => {
  return (
    <View style={styles.container}>
      <LogoInfo/>
      <StatusBar style="auto" />
      <Text style={styles.Text}>
              Vamos construir uma rotina
         mais saudável?</Text>
         
         <Button style={styles.button}
                
                title="Next"
                onPress={() => Alert.alert(
                    'Its GeeksforGeeks !')}
           />
           
    </View>
  
                )}


  

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: 'FFF4EF',
      alignItems: 'center',
      justifyContent: 'center',
        position: 'absolute',
        width: 160,
        height: 169,
        left: 127,
        top: 120,
        
    },

    Text:{
      position: 'absolute',
      width: 280,
      height: 130,
      left: -60,
      top: 180,      
      fontSize: 30,
      lineHeight: 36,
      display:"flex",
      alignItems: 'center',
      justifyContent:'center',
      color: '#6C5492',
      flex: 1,
      textAlign: 'center',

    },
    button: {
      
        flex: 1,
        position: 'nonabsolute',
          backgroundColor: '#',
          alignItems: 'center',
          justifyContent: 'center',
          display:"flex",
          top: 10,

    },
   

  });
