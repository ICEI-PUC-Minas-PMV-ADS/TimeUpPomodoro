import React from 'react'
import {
    StyleSheet, Text, View, 
    TouchableOpacity, Dimensions,
} from 'react-native'
import { useTheme } from "../NightMode/themes";

export default function ModalPicker(props) {
const OPTIONS = ['Atividades', 'Notas']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const {dark} = useTheme();
    
    
    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }

    const option = OPTIONS.map((option, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(option)}
            >
                <Text style={styles.text}>
                    {option}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            
            <View style={[styles.modal, { width: WIDTH - 250, height: HEIGHT / 5 }]} 
            placeholderTextColor={ dark ? "#FFF4EF85" : "#47151585"}>
                
                    {option}
                
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom:'-25%',
        right: '20%'
    },
    modal: {
        backgroundColor: "#FF9C9C",
        borderRadius: 32,
    },
    option: {
        alignItems: 'flex-start',

    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }

})
