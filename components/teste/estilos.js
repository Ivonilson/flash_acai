import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    viewPrincipal: {
        backgroundColor: 'purple'
    }, 
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    produtos: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    }
});

export default estilos;