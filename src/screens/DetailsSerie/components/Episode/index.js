import { Text, View, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import {styles} from './styles';

export const Episode = ({ season, episodes}) => {
    const [showContet, setShowConst] = useState(false);
    const flatListRef = useRef();
    const animationController = useRef(new Animated.Value(0)).current;
    const [areaEpisode] = useState(new Animated.Value(0));

    const toTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    };

    const dropDow = () => {
        Animated.timing(areaEpisode, {
            toValue: 190,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
    const upDown = () => {
        Animated.timing(areaEpisode, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
    const stateDrop = () => {
        if (showContet) {
            upDown();
        } else {
            dropDow();
        }
    };
    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showContet ? 0 : 1,
            useNativeDriver: true,
        };
        Animated.timing(animationController, config).start();
        setShowConst(!showContet);
    };

    const arrowTransforms = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    toggleListItem();
                    stateDrop();
                    toTop();
                }}
                style={styles.formatButtom}
            >
                <Text style={styles.textButtom}>{season}</Text>
                <Animated.View
                    style={{ transform: [{ rotateZ: arrowTransforms }] }}
                >
                    <Icon
                        name='expand-more'
                        color={'#FFFFFF'}
                        size={20}
                        style={styles.iconDrop}
                    />
                </Animated.View>
            </TouchableOpacity>
            <View
                style={[
                    styles.lineButtom,
                    {
                        backgroundColor: showContet
                            ? '#E9A6A6'
                            : 'rgba(255, 255, 255, 0.5)',
                    },
                ]}
            />
            <Animated.View style={{ overflow: 'hidden', height: areaEpisode }}>
                <FlatList
                    ref={flatListRef}
                    contentContainerStyle={{marginBottom:30}}
                    data={episodes}
                    keyExtractor={(_, index) => index}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <View style={styles.buttoArea}>
                                    <View style={styles.seasonAndEpisode}>
                                        <Text style={styles.seasonText}>
                                            T
                                            {item?.season_number < 10
                                                ? '0' + item?.season_number
                                                : item?.season_number}{' '}
                                            |
                                        </Text>
                                        <Text style={styles.episodeText}>
                                            {' '}
                                            E
                                            {item?.episode_number < 10
                                                ? '0' + item?.episode_number
                                                : item?.episode_number}
                                        </Text>
                                    </View>
                                    <Text style={styles.nameSerieText}>
                                        {item?.name}
                                    </Text>
                                </View>
                            </>
                        );
                    }}
                />
            </Animated.View>
        </>
    );
};
