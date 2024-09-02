import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground } from "react-native";
import estilos from './estilos';
import Img_acai from '../../assets/img_acai.jpg'

//import Logo from '../../assets/logo_.png';

export default function TelaInicial(props) {
    return (
        <View style={estilos.container}>
            <View style={estilos.view1}>
                <Text style={estilos.textoTitulo }>FLASH AÇAÍ</Text>
                 <View style={estilos.view2}>
                    <Image source={Img_acai} style={estilos.imagemAcai}></Image>
                 </View>
            </View>
        </View>

    )
}