import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    castArea: {
        marginTop: 27,
        marginBottom: 15,
        width: 60,
        alignSelf: 'flex-start',
        marginLeft: 15
    },
    castTitle: {
        height: 25,
        width: 60,
        backgroundColor: '#9C4A8B',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textCast: {
        color: 'white',
    },
    spaceCast: {
        marginHorizontal: 10,
        marginTop: 7,
        backgroundColor: '#9C4A8B',
        width: 30,
        height: 1,
        alignSelf: 'center'
    },
    cast: {
        width: '90%',
        flex: 1
    },
    areaItens: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        marginVertical: 5
    },
    name: {
        color: 'white',
        fontSize: 14
    },
    character: {
        color: 'white',
        fontSize: 12
    },
    imageActors: {
        width: 52,
        height: 54,
        marginRight: 10
    },
    imagePerfilActors: {
        width: 48,
        height: 48,
        borderRadius: 30
    },
    actor: {
        justifyContent: 'center',
    }
})