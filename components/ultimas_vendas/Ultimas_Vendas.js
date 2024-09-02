import React from "react";
import { ScrollView, View, Text } from 'react-native';
import estilos from './estilos';

export default function UltimasVendas(props) {

    return (

        <View style={estilos.container}>
            <ScrollView style={estilos.scrollView}>
                    <Text>ÚLTIMAS VENDAS</Text>
            </ScrollView>
        </View>
    )

}

