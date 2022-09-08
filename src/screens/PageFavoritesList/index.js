import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    Image,
    Animated,
    TouchableOpacity,
    FlatList,
    Modal,
} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { BodyScreen } from '../../components/StyledComponents/GlobalStyleds';
import { BackButton } from '../../components/StyledComponents/BackButton';
import { BlankList } from '../../components/BlankList';
import { instance } from '../../services/api';

export const PageFavoritesList = () => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [position, setPosition] = useState(true);

    const [dataFilmsList, setDataFilmsList] = useState([]);
    const [infosList, setInfosList] = useState({});

    const [pos] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
    function toggle() {
        setPosition(!position);
        Animated.spring(pos.x, {
            toValue: position ? 39 : 0,
            speed: 2,
            bounciness: 0,
            useNativeDriver: true,
        }).start();
    }

    const handleGetFilmListDetails = async () => {
        const result = await instance
            .get('list/8216268?language=pt-BR')
            .catch(error => console.log(error));

        setDataFilmsList(result?.data?.items);
        setInfosList(result?.data);
    };

    useEffect(() => {
        handleGetFilmListDetails();
    }, []);

    return (
        <BodyScreen>
            <View
                style={{
                    width: '100%',
                    alignItems: 'flex-end',
                    padding: 20,
                }}
            >
                <BackButton />
                <View style={styles.subContainerAnimated}>
                    <Animated.View
                        style={[
                            styles.buttonAnimated,
                            { transform: [{ translateX: pos.x }] },
                        ]}
                    />
                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            hitSlop={{ left: 8, right: 8, top: 8, bottom: 8 }}
                            onPress={() => {
                                toggle();
                            }}
                        >
                            <Icon
                                name='remove-red-eye'
                                size={20}
                                color={position ? '#FFFFFF' : '#09101D'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            hitSlop={{ left: 8, right: 8, top: 8, bottom: 8 }}
                            onPress={() => {
                                toggle();
                            }}
                        >
                            <Icon
                                name='open-in-full'
                                size={20}
                                color={position ? '#09101D' : '#FFFFFF'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.textCenter}>
                <Text style={styles.textFilmes}>{infosList?.name}</Text>
                <Text style={styles.textContent}>{infosList?.description}</Text>
            </View>
            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
                style={styles.modalScreens}
            >
                <View style={styles.modalarea}>
                    <Text style={styles.modalTextOne}>Atenção!</Text>
                    <Text style={styles.modalTextTwo}>
                        Deseja mesmo remover o filme?
                    </Text>

                    <View style={styles.modalBottons}>
                        <TouchableOpacity
                            onPress={() => setVisibleModal(false)}
                            style={styles.modalBottonsOne}
                        >
                            <Text style={styles.modalBottonsTextOne}>Não</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalBottonsTwo}>
                            <Text style={styles.modalBottonsTextTwo}>Sim</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View
                style={{
                    flex: 3,
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <FlatList
                    data={dataFilmsList}
                    keyExtractor={(_, index) => index}
                    ListEmptyComponent={
                        <BlankList BlankText='Não há filmes nessa lista ainda :(' />
                    }
                    numColumns={4}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={styles.containerFlastlistImage}
                                onPress={
                                    position
                                        ? null
                                        : () => setVisibleModal(true)
                                }
                            >
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: 30,
                                        width: 18,
                                        height: 18,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'absolute',
                                        zIndex: 1,
                                        top: -5,
                                        right: -5,
                                        display: position ? 'none' : 'flex',
                                    }}
                                >
                                    <Icon
                                        name='remove'
                                        color='rgba(236, 38, 38, 1)'
                                        size={13}
                                    />
                                </View>
                                <Image
                                    style={styles.subContainerFlastlistImage}
                                    source={{
                                        uri: `https://image.tmdb.org/t/p/original${item?.poster_path}`,
                                    }}
                                ></Image>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </BodyScreen>
    );
};
