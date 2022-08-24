import { ImageBackground, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

areaNote:{
    marginHorizontal:35,
    marginVertical:220,
    width:327, 
    height:166,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    borderRadius:25
},
    areaTitle:{
    flex:1,
},
    title:{
    color:'#000000',
    marginTop:10,
    fontSize:18,
    fontWeight:'bold'
},
    areaInputNote:{
    flex:1,
    flexDirection:'row',
    marginVertical:15,
    alignItems:'center'
},
    inputNote:{
    width: 74,
    height:25, 
    backgroundColor:'rgba(196, 196, 196, 0.35)', 
    borderRadius:30,
    fontSize:15,
    padding:2,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:15,
    
},
    maximo:{
    fontSize:18,
    color:'#000000',
    fontWeight:'bold'
},
    areaButtons:{
    width:290, 
    height:50, 
    alignItems:'center',
    flexDirection:'row', 
    justifyContent:'space-evenly',
    

},
    cancelButton:{
    width:100, 
    height:25, 
    alignItems:'center', 
    borderRadius:5, 
    borderWidth:1
},
    textCancelButton:{
    color:'#000000', 
    justifyContent:'center', 
    alignItems:'center', 
    fontSize:10,
    top:5,
    fontWeight:'bold'
},
    okButton:{
    width:100, 
    height:25, 
    backgroundColor:'black', 
    alignItems:'center', 
    borderRadius:5
},
    textOkButton:{
    color:'white', 
    justifyContent:'center', 
    alignItems:'center', 
    fontSize:10,
    top:5,
    fontWeight:'bold'
}
})