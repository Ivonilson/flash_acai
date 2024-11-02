import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    viewPrincipal: {
        backgroundColor: 'purple',
        paddingLeft: 5
    }, 
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    produtos: {
        fontSize: 18,
        color: 'white',
        textAlign: 'left',
        marginTop: 10,
        marginStart: 5,
        fontWeight: 'bold'
    },
    precoItem: {
        fontSize: 22,
        color: 'white',
        marginStart: 5,
        textAlign: 'left'
    },
    qtdEstoque: {
        fontSize: 15,
        color: 'white',
        marginStart: 5,
        textAlign: 'left'
    }
});

export default estilos;