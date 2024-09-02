import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Teste = () => {
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Icon name="edit" size={50} color="red" />
        <Text style={styles.buttonText}>Registrar Venda</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Fecha o modal ao pressionar 'voltar' no Android
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Venda {1}</Text>
            <Text style={styles.modalProduto}>Produto</Text>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.item label="Selecione" value="-" />
              <Picker.item label="Acai 300 ml" value="Acai 300 ml" />
              <Picker.item label="Acai 500 ml" value="Acai 500 ml" />
            </Picker>

            <Text style={styles.modalProduto}>Quantidade</Text>
            <TextInput
              style={styles.input}
              keyboardType='numeric'
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </Modal>
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

export default Teste;
