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
                <Text style={estilos.dataAtual}>Brasília, {new Date().toLocaleDateString()}.</Text>
                {vendas.length > 0 ? <Text style={estilos.total}>Total de vendas no dia (R$): {vendas[0].total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Text> : <Text style={estilos.nenhumRegistro}>Nenhum registro até o momento.</Text>}
                        <FlatList 
                            data = {vendas}
                            keyExtractor={(item) => item.id_prod.toString()}
                            renderItem={({item}) => 
                                <View>
                                    <Text style={estilos.itens}>{item.descricao} ({item.quant}) - R${item.valor_total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} - {formatarData(item.data_registro)} - {item.usuario}</Text>
                                    <View style={estilos.linha}></View>
                                </View>
                            }
                        />
                {vendas.length > 0 && <Text style={estilos.total}></Text>}
            </ScrollView>
        </View>
    )

}

