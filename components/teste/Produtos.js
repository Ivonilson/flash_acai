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

      {produtos.map((produto) => (
        <FlatList 
          data={
            {key: produto.id_prod}
          }
          renderItem={({ item }) => 
          <View>
              <Text style={estilos.produtos}>{produto.descricao} - R$ {produto.preco_unitario}</Text>
              <Image source={Img_acai} style={{width: 100, height: 100}}/>          
          </View>
        }
        />
      ))}
    </ScrollView>
  );
};


