import React ,{ useContext }from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import { useRoute } from "@react-navigation/native";
import { styles } from './styles';
import { instance } from '../../../../services/api';
import { LoginContext } from "../../../../contexts/loginContext";


export const Evaluation = ({  setNoteAvaliation, setNote, PostRateMovie}) => {
    const { sessionId } = useContext(LoginContext);
    const { idFilmes } = useRoute().params;

    return (
        <View style={styles.areaNote}>
            <View style={styles.areaTitle}>
            <Text style={styles.title}> Faça a sua avaliação ! </Text>
            </View>
            <View style={styles.areaInputNote}>
            <TextInput style={styles.inputNote} keyboardType='numeric' onChangeText={(number) => setNoteAvaliation(number)}/> 
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