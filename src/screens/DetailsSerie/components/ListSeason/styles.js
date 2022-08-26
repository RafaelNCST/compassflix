import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({

    formatButtom:{
        marginTop:5,
        flexDirection:'row', 
        width:'90%', 
        height:40, 
        left:15, 
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        overflow:'hidden',
        borderRadius:5 
    },
    textButtom:{
        color:'#FFFFFF', 
        top:8,
        marginLeft:15
    },
    iconDrop:{
        top:8
    },
    lineButtom:{
        left:15, 
        width:'90%', 
        height:5, 
        backgroundColor:'#E9A6A6', 
        bottom:5, 
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
    },
    buttoArea:{
        width:'90%',
        left:15,
        marginVertical:5, 
        backgroundColor:'rgba(255, 255, 255, 0.5)', 
        borderRadius:5
    },
    seasonAndEpisode:{
        flexDirection:'row'
    },
    seasonText:{
        color:'#ffff', 
        marginLeft:15
    },
    episodeText:{
        color:'#ffff'
    },
    nameSerieText:{
        color:'#ffff', marginLeft:15
    }



})