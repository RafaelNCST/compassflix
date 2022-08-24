import React ,{ useContext }from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

export const Evaluation = ({  setNoteAvaliation, setNote, PostRateMovie}) => {

    return (
        <View style={styles.areaNote}>
            <View style={styles.areaTitle}>
            <Text style={styles.title}> Faça a sua avaliação ! </Text>
            </View>
            <View style={styles.areaInputNote}>
            <Icon style={{left:15}}name='create' color={'#C4C4C4'} size={12} />
            <TextInput style={styles.inputNote} keyboardType='numeric' onChangeText={(number) => setNoteAvaliation(number)}/> 
            <Text style={styles.maximo} >/10</Text>
            </View>
            <View style={styles.areaButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setNote(false)}>
                <Text style={styles.textCancelButton}> CANCELAR </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.okButton} onPress={ () => PostRateMovie()}>
                <Text style={styles.textOkButton}>OK</Text>
            </TouchableOpacity>
            </View>
        </View>

    );
}