
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

modalScreens: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center'
},
modalArea: {
    width: '80%',
    height: 400,
    backgroundColor: '#1C2227',
    borderRadius: 10
},
iconeArea: {
    width: '100%',
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center'
},
iconeButton: {
    marginRight: 10,
    width: 30,
    height: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
},
infoModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
imageModal: {
    width: 116,
    height: 180,
    borderRadius: 8,
},
titleModal: {
    fontSize: 20,
    color: 'white',
    marginVertical: 15,
    fontFamily: 'OpenSans-Bold'
},
genresContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
},
genresArea: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    margin: 3,
    height: 25,
    borderRadius: 15,
},
genresText: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'OpenSans-SemiBold'

}
})