import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

export const MenssageSuccess = ({setButtonListFavorite}) => {
    return(
        <View style={styles.screeSuccess}>
            <View style={styles.areaSucess}>
                <Icon name='check-circle' size={25} color={'black'}/>
                <View style={styles.headerSucess}>
                    <Text>Lista atualizada com sucesso !</Text>
                </View>
                <TouchableOpacity onPress={() => setButtonListFavorite(false)} style={styles.buttomConfirmed}>
                    <Text style={styles.buttomConfirmed}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};