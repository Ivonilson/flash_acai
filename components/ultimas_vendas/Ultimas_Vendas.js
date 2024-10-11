import {React, useEffect, useState} from "react";
import { ScrollView, View, Text, FlatList } from 'react-native';
import estilos from './estilos';
const api = require('../api/api')


export default function UltimasVendas(props) {

    const [vendas, setVendas] = useState([]) 

    useEffect(() => {
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
    }, [])

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
                                    <Text>Nome: {venda.id_prod} - Data: {venda.data_registro} - Vendedor: {venda.usuario}</Text>
                                </View>
                            }
                        
                        />
                    ))}                    
            </ScrollView>
        </View>
    )

}

