import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    posterArea: {
        width: '100%',
        height: 130,
    },
    imagePoster: {
        flex: 1
    },
    buttomBack: {
        position: 'absolute',
        top: 15,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoArea: {
        paddingTop: 10,
        paddingLeft: 10,
    },
    perfilArea: {
        width: "90%",
        height: 170,
        flexDirection: 'row',
    },
    imagePerfil: {
        width: 116,
        height: 180,
        marginTop: -30,
        borderRadius: 8
    },
    titleArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    areaDirector: {
        width: '90%',
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        width: 150,
    },
    textAno: {
        color: 'white',
        fontSize: 12
    },
    containerNameAndYear: {
        height: 27,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    textDuration: {
        color: 'white',
        fontSize: 10,
        marginLeft: 25,
    },
    textDirector: {
        color: 'white',
        fontSize: 10,
        alignItems: 'flex-start'
    },
    stroke: {
        fontWeight: 'bold'
    },
    notesArea: {
        flex: 3,
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    textNote: {
        color: '#E9A6A6',
        fontSize: 30
    },
    bottomLike: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    likesQtd: {
        color: 'white',
    },
    areaDescription: {
        width: "90%",
        height: 95,
    },
    scrollDescription: {
        flex: 1
    },
    tagline: {
        color: 'white',
        fontSize: 12,
        lineHeight: 16,
        textAlign: 'justify',
        fontSize: 14,
    },
    textDescription: {
        color: 'white',
        fontSize: 12,
        lineHeight: 20,
        textAlign: 'justify',
        fontSize: 14,
        marginTop: 14
    },
})