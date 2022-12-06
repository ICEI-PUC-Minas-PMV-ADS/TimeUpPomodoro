import React from "react";
import { View,Text, Image, StyleSheet} from "react-native";
import { useTheme } from "../../NightMode/themes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import logo from "../../../../src/assets/logoTimeUp.png";

export default function Topo(){

    const { dark, colors, setScheme } = useTheme();

    const toggleTheme = () => {
        dark ? setScheme("light") : setScheme("dark");
    };

    return <View style={[estilos.topo, { backgroundColor: colors.background }]}>
        
        <Text style={estilos.atividades}>Atividades</Text>
        <Text style={estilos.legenda}>Quais são as suas atividades hoje?</Text>


    </View>

}

    //estilos da logo e frases
    
    const estilos = StyleSheet.create({

        topo: {
            backgroundColor: "#FFF4EF",
            padding: 16,
            //flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        imagem: {
           //width: 10,
            height: 28,
            //flex: 2,
            //marginBottom:'-3%',  
            
           
        },
        atividades: {
            //flex:  1,
            marginTop: 24,
            fontSize: 26,
            lineHeight: 42,
            fontWeight: 'bold',
            color: '#696969',
            
        },
        legenda: {
            //fontSize: 16,
            //lineHeight: 26,
            //flex: 1,
            color: '#A3A3A3',


        }

    });
    
    
    




