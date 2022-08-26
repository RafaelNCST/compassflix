import {  Text, View, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React , { useRef, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {styles} from './styles';


export const ListSeason = ({season, episodes}) => {
    const [showContet, setShowConst] = useState(false);
    const animationController = useRef (new Animated.Value(0)).current;

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showContet ? 0 : 1,
            useNativeDriver: true
        };
        Animated.timing(animationController, config).start();
        setShowConst(!showContet);
    };
    
    const arrowTransforms = animationController.interpolate({
        inputRange: [0,1],
        outputRange:['0deg', '180deg']});

return (
    <>
    <TouchableOpacity onPress={() => toggleListItem()} style={styles.formatButtom}>
    <Text style={styles.textButtom}>{season}</Text>
    <Animated.View style={{transform: [{rotateZ:arrowTransforms}]}}>
    <Icon name='expand-more' color={'#FFFFFF'} size={20} style={styles.iconDrop}/>
    </Animated.View>
    </TouchableOpacity>
    <View style={[styles.lineButtom, {backgroundColor: showContet ? '#E9A6A6' : 'rgba(255, 255, 255, 0.5)'}]}/>
    <FlatList 
        data={episodes}
        keyExtractor={(_,index) => index}
        renderItem={({item})=> {
        return(
            <>
            { showContet &&  
            <View style={styles.buttoArea}>
            <View style={styles.seasonAndEpisode}>     
            <Text style={styles.seasonText}> T{item?.season_number}</Text>
            <Text style={styles.episodeText}> E{item?.episode_number}</Text>
            </View> 
            <Text style={styles.nameSerieText}>{item?.name}</Text>
            </View>
        }
            </>
            )}
            }  
            />

    </>
);};
