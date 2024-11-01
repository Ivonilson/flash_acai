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
        marginBottom: 50,
        marginStart: 5,
        marginEnd: 5
    },
    texto: {
        fontSize: 20,
        fontStyle: 'normal',
        color: 'black',
    }
});

export default estilos;