import {React, useCallback, useState} from "react";
import { ScrollView, View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import estilos from './estilos';
const api = require('../api/api')


export default function UltimasVendas(props) {

    const [vendas, setVendas] = useState([]) 

    useFocusEffect(
        useCallback(() => {

        const fetchVendas = async () => {
            try {
                const response = await fetch(api.ultimasVendas())
                const data = await response.json()
                setVendas(data)
                console.log('entrou no try de vendas')
            } catch (error) {
                console.log('Erro ao carregar as vendas: ', error)
            }
        }
        fetchVendas()
    }, [props.route.params?.key])
    )

    function formatarData(data) {
        const dataobj = new Date(data)
        const dia = String(dataobj.getDate() + 1).padStart(2, '0');  // Obtém o dia e garante que tenha dois dígitos
        const mes = String(dataobj.getMonth() + 1).padStart(2, '0');  // Obtém o mês (adiciona +1 porque janeiro é 0)
        const ano = dataobj.getFullYear();  // Obtém o ano

        return `${dia}/${mes}/${ano}`;
    }

    return (

        <View style={estilos.container}>
            <ScrollView style={estilos.scrollView}>
                    <Text>ÚLTIMAS VENDAS</Text>
                    {vendas.map((venda) => (
                        <FlatList 
                            data = {[
                                {key: venda.id_prod}
                            ]}

                            renderItem={({item}) => 
                                <View>
                                    <Text>Nome: {venda.id_prod} - Data: {formatarData(venda.data_registro)} - Vendedor: {venda.usuario}</Text>
                                </View>
                            }
                        
                        />
                    ))}                    
            </ScrollView>
        </View>
    )

}

