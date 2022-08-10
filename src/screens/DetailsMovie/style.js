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
    buttomBack:{
        marginTop:-135,
        width:40,
        height:40,
        borderRadius:30,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    areBottom:{
        width:"90%",
    },
    perfilArea:{
    width:"90%",
    height:150,
    flexDirection:'row',
    alignItems: 'center',

    },
    imagePerfil:{
        width: 116,
        height: 182, 
        marginTop: -50, 
        borderRadius: 10 
    },
    titleArea:{
        width:"85%",
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems: 'baseline',
        flexWrap:'wrap'

    },
    areaDirector:{
        width:'90%',

    },
    textTitle:{
        color:'white',
        fontSize:18
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
        alignItems:'flex-start'
    },
    notesArea:{
        width:'50%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'baseline'

    },
    textNote:{
        color:'#E9A6A6',
        fontSize:30
    },
    bottomLike:{
        flexDirection:'column',
        alignItems:'center'
    },
    likesQtd:{
        color:'white',
    },
    areaDescription:{
        width:"90%",
        height:100,

    },
    scrollDescription:{
        flex:1
    },
    textDescription:{
        color:'white',
        fontSize:12
    },
    castArea:{
        marginVertical:30,
        width:'90%',
        
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
    },
    spaceCast:{
        marginHorizontal:10,
        marginTop:7,
        backgroundColor:'#9C4A8B',
        width:40,
        height:1
        
    },
    cast:{
        
        width:'90%'
    }
})