import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
        alignItems: 'center'
    },
    scrollView: {
        //borderWidth: 1,
        //borderColor: 'red',
        minWidth: 350,
        marginBottom: 40,
        marginStart: 5,
        marginEnd: 5,
        backgroundColor: 'purple',
        padding: 10
    },
    texto: {
        fontSize: 20,
        fontStyle: 'normal',
        color: 'black',
    },
    total: {
        fontSize: 20,
        color: 'white',
        marginBottom: 8,
        fontWeight: 'bold'
    },
    itens: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
        marginTop: 10
    },
    linha: {
        height: 1,
        backgroundColor: 'white',
        width: '100%'
    },
    dataAtual: {
        color: 'white',
        marginTop: 0
    },
    nenhumRegistro: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default estilos;