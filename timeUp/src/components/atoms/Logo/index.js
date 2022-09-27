import { StyleSheet,  View, Image } from 'react-native';
import logoImage from '../../../../assets/logo.png';


export const Logo = () =>{
    return (
        <Image style={styles.logo} source={logoImage}/>
    )
}


const styles = StyleSheet.create({
  
    logo: {
      height: 44,
      width: 126,
    
    }
  });