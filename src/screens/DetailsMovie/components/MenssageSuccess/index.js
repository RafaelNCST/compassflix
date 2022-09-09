import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './style';

export const MenssageSuccess = ({ handleModalsOnCheckedApi }) => {
    return (
        <View style={styles.screeSuccess}>
            <View style={styles.areaSucess}>
                <Icon name='check-circle' size={25} color={'black'} />
                <View style={styles.headerSucess}>
                    <Text style={styles.textSucess}>
                        Lista atualizada com sucesso!
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => handleModalsOnCheckedApi()}
                    style={styles.buttomConfirmed}
                >
                    <Text style={styles.textConfirmed}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
