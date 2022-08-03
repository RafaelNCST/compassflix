import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bodyScreen:{
        alignItems: 'center',
        flex:1,
        width:'100%',
        backgroundColor:'black'
    },
    posterArea:{
        width:'100%',
        height:150,
        
    },
    imagePoster:{
        flex:1
    },
    perfilArea:{
    width:"90%",
    height:150,
    marginTop:-30,
    flexDirection:'row',
    alignItems: 'center',

    },
    titleArea:{
        width:"82%",
        backgroundColor:'black',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'baseline',
        flexWrap:'wrap',

    },
    areaDirector:{
        width:'85%',
        alignSelf:'flex-start'
    },
    textTitle:{
        color:'white',
        fontSize:20
    },
    textAno:{
        color:'white',
        fontSize:10
    },
    textDuration:{
        color:'white',
        fontSize:7
    },
    textDirector:{
        color:'white',
        fontSize:8,
    },
    notesArea:{
        width:'60%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'baseline'

    },
    textNote:{
        color:'#E9A6A6',
        fontSize:30
    },
    areaDescription:{
        width:"90%",
        marginTop:30
    },
    textDescription:{
        color:'white',
    },
    castArea:{
        width:'90%',
        marginTop:50
    },
    castTitle:{
        height:25,
        width:60,
        backgroundColor:'#9C4A8B',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
    },
    textCast:{
        color:'white',
        
    }
})