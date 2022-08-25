import React ,{ useContext }from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

export const EvaluationSerie = ({setAssessmentSerie, setNoteAvaliatioSerie, noteAvaliationSerie, validationNoteSerie, menssagErrorSerie, verificationSerie, setVerificationSerie}) => {

    return (
        <View style={styles.areaNote}>
                <View style={styles.areaTitle}>
                <Text style={styles.title}> Faça a sua avaliação ! </Text>
                </View>
                <View style={styles.areaInputNote}>
                <Icon style={{left:15}}name='create' color={'#C4C4C4'} size={12} />
                <TextInput style={styles.inputNote} keyboardType='numeric' value={noteAvaliationSerie} onChangeText={(number) => {setNoteAvaliatioSerie(number), setVerificationSerie(false)}}/> 
                <Text style={styles.maximo} >/10</Text>
                </View>
                <View>
                    {verificationSerie && <Text style={styles.menssagError}>{menssagErrorSerie}</Text>}
                </View>
                <View style={styles.areaButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={() => setAssessmentSerie(false)}>
                    <Text style={styles.textCancelButton}> CANCELAR </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.okButton} onPress={() => validationNoteSerie()}>
                    <Text style={styles.textOkButton}>OK</Text>
                </TouchableOpacity>
                </View>
        </View>

    );
};




