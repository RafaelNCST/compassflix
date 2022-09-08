import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screenMovieFavorite:{
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor:'rgba(0, 0, 0, 0.8)'
    },
    areaMovieFavorite:{
        top:250,
        width:375, 
        height:232, 
        backgroundColor:'white', 
        borderTopLeftRadius:15, 
        borderTopRightRadius:15
    },
    headerMovieFavorite:{
        margin:10, 
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    headLine:{
        width:375, 
        height:2, 
        backgroundColor:'#BEBEBE'
    },
    headerListMovie:{
        height:150
    },
    areaListMovie:{
        flexDirection:'row', 
        alignItems:'center', 
        margin:8
    },
    buttonMarkFavorite:{
        width:30, 
        height:30, 
        borderRadius:15, 
        borderWidth:1
    },
    textListFavorite:{
        color:'black'
    },
    buttonSave:{
        borderRadius:5, 
        justifyContent:'center', 
        alignItems:'center', 
        alignSelf:'center', 
        width:82, 
        height:20, 
        backgroundColor:'black'
    },
    textButtonSave:{
        color:'white'
    }

});