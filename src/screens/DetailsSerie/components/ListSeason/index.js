import {  Text, View, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React , { useRef, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {styles} from './styles';


export const ListSeason = ({season, episodes}) => {
    const [showContet, setShowConst] = useState(false);
    const flatListRef = useRef();
    const animationController = useRef (new Animated.Value(0)).current;
    const [areaEpisode] = useState (new Animated.Value(0));

    const toTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }


    const dropDow = () => {
        Animated.timing(areaEpisode,
        {
        toValue:180,
        duration:1000,
        useNativeDriver:false
        }).start();
    };
    const upDown = () => {
        Animated.timing(areaEpisode,
            {
        toValue:0,
        duration:1000,
        useNativeDriver:false
        }).start();
    };
    const stateDrop = () => {
        if(showContet){
            dropDow();
        }else{
            upDown();
        }

    };
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
        outputRange:['180deg', '0deg']});

return (
    <>
    <TouchableOpacity onPress={() => {toggleListItem(); stateDrop(); toTop();}} style={styles.formatButtom}>
    <Text style={styles.textButtom}>{season}</Text>
    <Animated.View style={{transform: [{rotateZ:arrowTransforms}]}}>
    <Icon name='expand-more' color={'#FFFFFF'} size={20} style={styles.iconDrop}/>
    </Animated.View>
    </TouchableOpacity>
    <View style={[styles.lineButtom, {backgroundColor: showContet ? 'rgba(255, 255, 255, 0.5)' : '#E9A6A6'}]}/>
    <Animated.View style={ {overflow:'hidden',height: areaEpisode}}>
    <FlatList 
        ref={flatListRef}
        data={episodes}
        keyExtractor={(_,index) => index}
        renderItem={({item})=> {
        return(
            <>
            <View style={styles.buttoArea}>
            <View style={styles.seasonAndEpisode}>     
            <Text style={styles.seasonText}>T{(item?.season_number) < 10 ? '0'+ (item?.season_number) :(item?.season_number) } |</Text>
            <Text style={styles.episodeText}> E{item?.episode_number < 10 ? '0'+ (item?.episode_number) :(item?.episode_number)}</Text>
            </View> 
            <Text style={styles.nameSerieText}>{item?.name}</Text>
            </View> 
            </>
            );
        }}
            />
            </Animated.View>
    
    </>
);};

