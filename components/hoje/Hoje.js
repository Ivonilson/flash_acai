import {React, useCallback, useState} from "react";
import { ScrollView, View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import estilos from './estilos';
const api = require('../api/api')


export default function Hoje(props) {

    const [vendas, setVendas] = useState([]) 

    useFocusEffect(
        useCallback(() => {

        const fetchVendas = async () => {
            try {
                const response = await fetch(api.ultimasVendas())
                const data = await response.json()
                setVendas(data)
                console.log('entrou no try de vendas')
                console.log(vendas)
            } catch (error) {
                console.log('Erro ao carregar as vendas: ', error)
            }
        }
        fetchVendas()
    }, [props.route.params?.key])
    )

    function formatarData(data) {
        const dataobj = new Date(data)
        //const dia = String(dataobj.getDate()).padStart(2, '0');  // Obtém o dia e garante que tenha dois dígitos
        //const mes = String(dataobj.getMonth() + 1).padStart(2, '0');  // Obtém o mês (adiciona +1 porque janeiro é 0)
        //const ano = dataobj.getFullYear().toString().slice(2);  // Obtém o ano
        const hora = dataobj.getHours();
        const minutos = dataobj.getMinutes();
        const segundos = dataobj.getSeconds();

        return `${hora}h${minutos}m${segundos}s'`
    }

    return (

        <View style={estilos.container}>
            <ScrollView style={estilos.scrollView}>
                {vendas.length > 0 && <Text>Total em vendas do dia (R$){vendas[0].total.toFixed(2)}</Text>}
                        <FlatList 
                            data = {vendas}
                            keyExtractor={(item) => item.id_prod.toString()}
                            renderItem={({item}) => 
                                <View>
                                    <Text>{item.quant} {item.descricao} - R${item.valor_total.toFixed(2)} - {formatarData(item.data_registro)} - {item.usuario}</Text>
                                </View>
                            }
                        />
            </ScrollView>
        </View>
    )

}

