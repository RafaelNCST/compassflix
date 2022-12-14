import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

posterArea: {
    width: '100%',
    height: 135,
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

favoriteButtom:{
    position:'absolute',
    backgroundColor:'white',
    width: 40,
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    top:15,
    right:20,
    borderRadius:30
},
perfilArea: {
    width: '100%',
    height: 170,
    alignSelf: 'flex-end',
    flexDirection: 'row',
},
areaButtonsPerfil:{
    width: 132
},
imagePerfil: {
    width: 116,
    height: 180,
    marginTop: -35,
    borderRadius: 8,
    marginLeft: 20
},
buttonAvalution:{
    backgroundColor: '#E9A6A6', 
    width: 116, 
    height: 22, 
    marginRight:19,
    alignItems:'center',  
    borderBottomLeftRadius:5,  
    borderBottomRightRadius:5,
    flexDirection:'row-reverse',
    justifyContent:'center'
},
textAvaliation:{
    fontWeight:'bold',
    color:'black',
    alignItems:'center', 
    justifyContent:'center',
    fontSize:12
},
buttonEdit:{
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10, 
    width: 15, 
    height: 15, 
    backgroundColor: '#C4C4C4',
    bottom:11, 
    left:125,
    bottom:27
},
infoArea: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
},
titleArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
},
containerNameAndYear: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between'
},
textTitle: {
    color: 'white',
    fontSize: 20,
    maxWidth: 180,
    fontFamily: 'OpenSans-Bold'
},
textAno: {
    color: 'white',
    fontSize: 12,
    marginLeft: 10,
    fontFamily: 'OpenSans-Regular'
},
textDuration: {
    color: 'white',
    fontSize: 10,
    paddingRight: 20,
    fontFamily: 'OpenSans-Regular'
},
textDirector: {
    color: 'white',
    fontSize: 10,
    marginTop: -10,
    alignItems: 'flex-start',
    fontFamily: 'OpenSans-Regular'
},
notesArea: {
    flex: 3,
    width: 180,
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
    top:16,
    width: "90%",
    height: 95,
    left:15
},
scrollDescription: {
    flex: 1
},
tagline: {
    color: 'white',
    lineHeight: 16,
    textAlign: 'justify',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular'
},
textDescription: {
    color: 'white',
    lineHeight: 20,
    textAlign: 'justify',
    fontSize: 14,
    marginTop: 14,
    fontFamily: 'OpenSans-Regular'
}
});