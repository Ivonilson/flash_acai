import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Text, View, Modal, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
const api = require('../api/api');

console.log(api.produtos())

export default function Venda (props) {

    const [modalVisibleLogin, setModalVisibleLogin] = useState(false);
    const [modalVisibleLancarItem, setModalVisibleLancarItem] = useState(false);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const [produtos, setProdutos] = useState([]);
    const [selectedValueProduto, setSelectedValueProduto] = useState('');
    const [selectedValueQuant, setSelectedValueQuant] = useState('');

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

    const handlePress = () => {
        setModalVisibleLogin(true);
    };

    const handleCadastrarVenda = async () => {
        try {
            const data = {
                cod_produto: codigo_produto,
                produto: selectedValueProduto,
                quantidade: selectedValueQuant,
                usuario: username
            }

            const response = await fetch(api.cadVenda, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                const result = await response.json()
                alert('Venda gravada com sucesso!', result)
            }
        } catch(error) {
                alert('Erro: ', error)
        }
      };

    const handleLogin = async () => {
        //console.log(typeof username, username);
        //console.log(typeof password, password);

        const loginData = {username, password}
        //console.log(typeof loginData, loginData)

        try {
            const response = await fetch(api.login(), {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(loginData),
        })

        //console.log('Response Status:', response.status);

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text()
        console.log('Response text: ', text)

        try {
            const data = JSON.parse(text)

            if(data.success){
                //Alert.alert('Sucesso', 'Login realizado com sucesso!');
                setPassword('')
                setModalVisibleLogin(false)
                setModalVisibleLancarItem(true)
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
           
            <Modal  // Modal de Autenticação de usuário
                animationType ="slide"
                transparent={true}
                visible={modalVisibleLogin}
                onRequestClose={() => setModalVisibleLogin(false)}
            >

                <View style={estilos.modalContainer}>
                    <View style={estilos.modalContent}>
                    <Text style={estilos.modalTitle}>Autenticação</Text>
                        <Text style={estilos.modalProduto}>Usuário</Text>
                        <TextInput 
                            style={estilos.input}
                            onChangeText={setUsername}
                            placeholder = 'Nome do usuário'
                        />

                        <Text style={estilos.modalProduto}>Senha</Text>
                        <TextInput 
                            style={estilos.input}
                            value={password}
                            onChangeText={setPassword}
                            keyboardType='numeric'
                            secureTextEntry={true}
                            placeholder = 'Senha'
                        />

                        <TouchableOpacity style={estilos.saveButton} onPress={handleLogin}>
                            <Text style={estilos.saveButtonText}>Continuar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilos.cancelButton} onPress={() => {setModalVisibleLogin(false), setPassword('')} }>
                            <Text style={estilos.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>           
            </Modal>

           
            <Modal  //Modal de registro de venda
                animationType="slide"
                transparent={true}
                visible={modalVisibleLancarItem}
                onRequestClose={() => setModalVisibleLancarItem(false)} // Fecha o modal ao pressionar 'voltar' no Android
             >
                <View style={estilos.modalContainer}>
                    <View style={estilos.modalContent}>
                        <Text style={estilos.modalTitle}>{username}</Text>
                        <Text style={estilos.modalTitle}>Registrar Venda</Text>
                        <Text style={estilos.textoInput}>Produto</Text>
                        <Picker
                            selectedValue={selectedValueProduto}
                            style={estilos.picker}
                            onValueChange={(itemValue) => setSelectedValueProduto(itemValue)}
                        >
                            <Picker.item label="Selecione" value="-" />
                            {produtos.map((produto) => (
                                <Picker.item  label={produto.id_prod + ' ' + produto.descricao + ' ' + produto.unidade_medida} value={produto.id_prod} key={produto.id_prod} />
                            ))}
                        </Picker>

                        <Text style={estilos.textoInput}>Quantidade</Text>
                        <Picker
                            selectedValue={selectedValueQuant}
                            style={estilos.picker}
                            onValueChange={(itemValue) => setSelectedValueQuant(itemValue)}
                        >
                            <Picker.item label="Selecione" value="-" />
                            
                            {[...Array(30).keys()].slice(1).map((index) => (
                                 <Picker.item  label={`${index}`} value={index} key={index} />
                            ))}
            
                        </Picker>
                        
                        <TouchableOpacity style={estilos.saveButton} onPress={handleCadastrarVenda}>
                            <Text style={estilos.saveButtonText}>Gravar</Text>
                        </TouchableOpacity>
                         <TouchableOpacity style={estilos.cancelButton} onPress={() => {setModalVisibleLancarItem(false), setSelectedValueProduto(''), setSelectedValueQuant('')} }>
                            <Text style={estilos.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
          
                </View>
            </Modal>

        </View>
    );
};

