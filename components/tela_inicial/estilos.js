import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrarp: 'wrap',
        backgroundColor: 'purple',
        alignItems: 'center',
        //borderWidth: 2,
        //borderColor: 'red'
    },
    view1: {
        marginBottom: 10,
        alignItems: 'center',
        width: '100%'
    },
    viewLogo: {
        //width: '100%',
        height: '18%',
        backgroundColor: 'red'
    },
    logo: {
        flex: 1,
        flexDirection: 'row',
        width: '30%',
        height: '18%',
        justifyContent: 'flex-start',
        borderColor: 'yellow',
        borderWidth: 2
    },
    view2: {
        flex: 1,
        //paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100%'
    },
    textoTitulo: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        paddingLeft: 65,
        paddingRight: 65,
        paddingTop: 20,
        paddingBottom: 20,
        //marginEnd: 35,
        //marginStart: 35
    }, 
    imagemAcai: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
});

export default estilos;