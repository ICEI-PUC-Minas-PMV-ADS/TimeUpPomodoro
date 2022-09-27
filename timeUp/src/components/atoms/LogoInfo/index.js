import { StyleSheet,  View, Image } from 'react-native';
import infoImage from '../../../../assets/time.png';
import { component } from '../../../../assets/component.png';


export const LogoInfo = () =>{
    return (
        <Image style={styles.info} source={infoImage} />
        
    )
}
export const ComponentInfo = () =>{
    return (
       
        <Image style={styles.component} source={component} />
    )
}


const styles = StyleSheet.create({
  
    info: {
      height: 120,
      width: 126,
      

    },
    component:{
        height: 120,
        width: 126,
    }
  });