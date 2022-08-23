import React ,{ useContext }from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import { useRoute } from "@react-navigation/native";
import { styles } from './styles';
import { instance } from '../../../../services/api';
import { LoginContext } from "../../../../contexts/loginContext";


export const Evaluation = ({ avaliation, setAvaliation, setNote}) => {
    const { sessionId } = useContext(LoginContext);
    const { idFilmes } = useRoute().params;

    const PostRateMovie = async () => {
        await instance.post(`movie/${idFilmes}/rating?session_id=${sessionId}`, {
            "value": parseFloat(avaliation)
        }) .then((resp) => {
                setAvaliation(resp?.value);
            })
            .catch((error) => {
                if(error.response){
                    console.log(error.response.data);
                }else if(error.request){
                    console.log(error.request.data);
                }else{
                    console.log('Error', error.message);
                }
            })
        }

        const captureText = (number) => {
            setAvaliation(number)
        }

    return (
        <View style={styles.areaNote}>
            <View style={styles.areaTitle}>
            <Text style={styles.title}> Faça a sua avaliação ! </Text>
            </View>
            <View style={styles.areaInputNote}>
            <TextInput style={styles.inputNote} keyboardType='numeric' onChangeText={(number) => captureText(number)}/> 
            <Text style={styles.maximo} >/10</Text>
            </View>
            <View style={styles.areaButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setNote(false)}>
                <Text style={styles.textCancelButton}> CANCELAR </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.okButton} onPress={ () => PostRateMovie()}>
                <Text style={styles.textOkButton}>Ok</Text>
            </TouchableOpacity>
            </View>
        </View>

    );
}