import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

export const Evaluation = ({ setNote }) => {
    return (
        <View style={styles.areaNote}>
            <Text style={{color:'#000000'}}> Faça sua avaliação ! </Text>
            <View style={{flexDirection:'row', marginTop:15}}>
            <TextInput style={{width: 74, height:21, backgroundColor:'rgba(196, 196, 196, 0.35)', borderRadius:30}} /> 
            <Text>/10</Text>
            </View>
            <View style={{ width:290, height:50, alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity style={{width:83.22, height:20.22, alignItems:'center', borderRadius:5, borderWidth:1}} onPress={() => setNote(false)}>
                <Text style={{color:'#000000', justifyContent:'center', alignItems:'center', fontSize:10}}> CANCELAR </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:83.22, height:20.22, backgroundColor:'black', alignItems:'center', borderRadius:5}} onPress={() => setNote(false)}>
                <Text style={{color:'white', justifyContent:'center', alignItems:'center', fontSize:10}}>Ok</Text>
            </TouchableOpacity>
            </View>
        </View>

    );
}