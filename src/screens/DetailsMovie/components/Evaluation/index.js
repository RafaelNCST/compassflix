import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

export const Evaluation = ({ setNote }) => {
    return (
        <View style={styles.areaNote}>
            <View style={styles.areaTitle}>
            <Text style={styles.title}> Faça a sua avaliação ! </Text>
            </View>
            <View style={styles.areaInputNote}>
            <TextInput style={styles.inputNote} /> 
            <Text style={styles.maximo}>/10</Text>
            </View>
            <View style={styles.areaButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setNote(false)}>
                <Text style={styles.textCancelButton}> CANCELAR </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.okButton} onPress={() => setNote(false)}>
                <Text style={styles.textOkButton}>Ok</Text>
            </TouchableOpacity>
            </View>
        </View>

    );
}