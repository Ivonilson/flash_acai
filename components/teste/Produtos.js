import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, FlatList, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilos from './estilos';
import Img_acai from '../../assets/img_acai.jpg'
const api = require('../api/api');

export default function Produtos (props) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(api.produtos());
        const data = await response.json();
        setProdutos(data);
        console.log('ok')
      } catch (error) {
        console.log('Erro ao carregar produtos: ', error)
      }
    }
    fetchProdutos()
  }, [])

  return (
    <ScrollView style={estilos.viewPrincipal}>
        <FlatList 
          data={produtos}
          keyExtractor={(item) => item.id_prod.toString()}
          renderItem={({item}) => 
          <View>
              <Text style={estilos.produtos}>{item.descricao}</Text>
              <Text style={estilos.precoItem}>R$ {item.preco_unitario}</Text>
              <Text style={estilos.qtdEstoque}>Estoque: {item.quantidade_estoque}</Text>
         
          </View>
        }
        />
    </ScrollView>
  );
};


