import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    
} from 'react-native';
import { listFavorite } from '../../../../helpers/Moks/listFavorite';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

export const ListFavoriteMovie = ({setButtonListFavorite, buttonMarkFavorite, setButtonMarkFavorite}) => {
    return(
        <View style={styles.screenMovieFavorite}>
            <View style={styles.areaMovieFavorite}>
                <View style={styles.headerMovieFavorite}>
                    <Text style={{color:'black', fontWeight:'bold'}}>Salva video em...</Text>
                    <TouchableOpacity onPress={() => setButtonListFavorite(false)}>
                        <Icon name='close' size={18} color={'black'}/>
                    </TouchableOpacity>
                </View>
            <View style={styles.headLine}/>
            <View style={styles.headerListMovie}>
            <ScrollView>
                {listFavorite.map((item, index)=> (
                    <View key={index} style={styles.areaListMovie}>
                        <TouchableOpacity style={[styles.buttonMarkFavorite, {backgroundColor: !buttonMarkFavorite ?  'white' : 'black' }]} onPress={() => setButtonMarkFavorite(true)}/>
                        <Text style={styles.textListFavorite}>{(item.name).toUpperCase()}</Text>
                    </View>
                ))}
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.buttonSave} onPress={() => setButtonListFavorite(false)}>
                <Text style={styles.textButtonSave}> Salvar </Text>
            </TouchableOpacity>
            </View>
        </View>
    )}