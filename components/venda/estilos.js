import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
        //flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 5,
        marginEnd: 5,
        backgroundColor: 'purple'
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        //borderColor: 'red',
        // borderWidth: 2,
        marginBottom: 4,
    },
    buttonText: {
        color: 'purple',
        fontSize: 25,
        textAlign: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
    },
    modalContent: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalProduto: {
        textAlign: 'left',
        //backgroundColor: 'red',
        width: '100%'

    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
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
        borderWidth: 2,
        borderColor: 'red',
        width: '50%',
        marginBottom: 20
    },
    cancelButtonText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        borderColor: 'black',
        borderWidth: 0.5,
        height: 50,
        width: '100%',
        marginBottom: 10,
        textAlign: 'center'
    },
    textoInput: {
        marginBottom: 5,
        fontSize: 16,
        textAlign: 'left',
        //borderWidth: 2,
        //borderColor: 'red',
        width: '100%',
        fontWeight: 'bold'
    }
});

export default estilos;