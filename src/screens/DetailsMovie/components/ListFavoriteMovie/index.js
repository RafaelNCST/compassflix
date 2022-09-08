import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

export const ListFavoriteMovie = ({setButtonListFavorite, postAddFavoriteMovie, markMovieFavorite, listFilmesFavorite, 
    menssageSucess, setMarkMovieFavorite, setMenssageSucess}) => {
    
    const markFilme = () => {
        
    };  

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
                {listFilmesFavorite?.map((item, index)=> (
                    <View key={index} style={styles.areaListMovie}>
                        <TouchableOpacity style={[styles.buttonMarkFavorite, 
                        {backgroundColor: markMovieFavorite === true ?  'black' : 'white'  }]} 
                        onPress={() => postAddFavoriteMovie()}/>
                        <Text style={styles.textListFavorite}>{(item?.name).toUpperCase()}</Text>
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