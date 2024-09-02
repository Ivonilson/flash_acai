import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
        //flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        Margin: 4,
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
    input: {
        borderColor: 'purple',
        borderWidth: 1,
        height: 50,
        width: '50%',
        marginBottom: 20,
        textAlign: 'center'
    }
});

export default estilos;