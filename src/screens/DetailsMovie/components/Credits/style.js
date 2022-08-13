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
        width: 32,
        borderStyle: 'solid',
        borderColor: '#9C4A8B',
        borderTopWidth: 1,
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
        marginVertical: 5,
    
    },
    name: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'OpenSans-Bold'
    },
    character: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'OpenSans-SemiBold'
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

    },
    listCredits: {
        paddingVertical:3
    }
})