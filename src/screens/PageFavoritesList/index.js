import React, { useState } from 'react';

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
import DATA from './Api-mocks';
import { TextInput } from 'react-native-gesture-handler';

export const PageFavoritesList = () => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [position, setPosition] = useState(true);
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
    return (
        <View style={styles.containerPrincipal}>
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

            <View style={styles.textCenter}>
                <Text style={styles.textFilmes}>Filmes que mudaram</Text>
                <Text style={styles.textFilmes}>a minha vida</Text>
                <Text style={styles.textContent}>
                    Essa é uma lista de filmes que vai mudar a sua vida e gerar
                    reflexão sobre diversos temas. Aproveite para unir o útil ao
                    agradável e usar seu tempo livre para conhecer histórias
                    inspiradoras.
                </Text>
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
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                numColumns={4}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.containerFlastlistImage}
                            onPress={() => setVisibleModal(true)}
                        >
                            <Image
                                style={styles.subContainerFlastlistImage}
                                source={item.image}
                            ></Image>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};
