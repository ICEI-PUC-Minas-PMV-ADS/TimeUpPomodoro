import { Children } from 'react';
import {  StyleSheet, Text } from 'react-native';


export const CustomText = ({Children}) => {
return (
    <Text style={styles.tituleText}>
        {Children}
    </Text>
)
}


const styles = StyleSheet.create({
    tituleText: {
      flex: 1,
      backgroundColor: '#F74F43',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });