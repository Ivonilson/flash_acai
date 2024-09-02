import React, {useState} from 'react';
import { TouchableOpacity, Text, View, Modal, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';

const Venda = () => {

    const [modalVisibleLogin, setModalVisibleLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        setModalVisibleLogin(true);
    };

    const handleLogin = async () => {
        console.log(typeof username, username);
        console.log(typeof password, password);

        const loginData = {username, password}
        console.log(typeof loginData, loginData)

        try {
            const response = await fetch('https://abgsolucoes.tec.br/api/login.php', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(loginData),
        })

        console.log('Response Status:', response.status);

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text()
        console.log('Response text: ', text)

        try {
            const data = JSON.parse(text)

            if(data.success){
                Alert.alert('Sucesso', 'Login realizado com sucesso!');
            } else {
                Alert.alert('Erro', data.error || 'Usuário ou senha inválidos.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Resposta inválida do servidor: ' + error.message);
        }

        } catch(error) {
            Alert.alert('Erro', 'Houve um problema ao tentar realizar o login: ' + error.message);
            console.log(error.message)
        }
    }

    return (
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.button} onPress={handlePress}>
                <Icon name="edit" size={50} align='center' color="purple" style={{ marginLeft: 70 }} />
                <Text style={estilos.buttonText}>Registrar Venda</Text>
            </TouchableOpacity>

            <Modal
                animationType ="slide"
                transparent={true}
                visible={modalVisibleLogin}
                onRequestClose={() => setModalVisibleLogin(false)}
            >

                <View style={estilos.modalContainer}>
                    <View style={estilos.modalContent}>
                        <Text style={estilos.modalProduto}>Usuário</Text>
                        <Picker
                            selectedValue={username}
                            style={estilos.picker}
                            onValueChange={(itemValue) => setUsername(itemValue)}
                        >
                            <Picker.item label="Selecione" value=""/>
                            <Picker.item label="user1" value="user1" />
                            <Picker.item label="user2" value="user2" />
                        </Picker>

                        <TextInput 
                            style={estilos.input}
                            value={password}
                            onChangeText={setPassword}
                            keyboardType='numeric'
                            placeholder = 'digite a senha'
                        />

                        <TouchableOpacity style={estilos.saveButton} onPress={handleLogin}>
                            <Text style={estilos.saveButtonText}>Continuar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilos.cancelButton} onPress={() => setModalVisibleLogin(false)}>
                            <Text style={estilos.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>           
            </Modal>
        </View>

    );
};

export default Venda;

