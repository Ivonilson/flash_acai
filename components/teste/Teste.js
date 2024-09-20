import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Teste (props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handlePress = () => {
    setModalVisible(true); // Abre o modal
  };

  const handleSave = () => {
    // Lógica para salvar os dados do formulário
    //console.log(`Valor do campo: ${inputValue}`);
    //console.log(`Valor selecionado: ${selectedValue}`);
    setModalVisible(false); // Fecha o modal após salvar
  };

  return (
    <View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalProduto: {
    textAlign: 'left',
    //backgroundColor: 'red',
    width: '100%'

  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '50%',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  cancelButton: {
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    fontSize: 16,
    color: 'red',
  },
});

