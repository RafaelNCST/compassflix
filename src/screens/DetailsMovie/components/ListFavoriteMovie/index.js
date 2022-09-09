import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

export const ListFavoriteMovie = ({
    setButtonListFavorite,
    postAddFavoriteMovie,
    markMovieFavorite,
    setMarkMovieFavorite,
    filterListFilms,
    loadingLists,
}) => {
    return (
        <View style={styles.screenMovieFavorite}>
            <View style={styles.areaMovieFavorite}>
                <View style={styles.headerMovieFavorite}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>
                        Salvar filme em...
                    </Text>
                    <TouchableOpacity
                        onPress={() => setButtonListFavorite(false)}
                    >
                        <Icon name='close' size={18} color={'black'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headLine} />

                <View style={styles.headerListMovie}>
                    {loadingLists && (
                        <FlatList
                            data={filterListFilms}
                            ListEmptyComponent={
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: 150,
                                    }}
                                >
                                    <Text>Sem listas disponíveis</Text>
                                </View>
                            }
                            keyExtractor={(_, index) => index}
                            renderItem={({ item }) => (
                                <View style={styles.areaListMovie}>
                                    <TouchableOpacity
                                        style={styles.buttonMarkFavorite}
                                        onPress={() =>
                                            setMarkMovieFavorite(item?.id)
                                        }
                                    >
                                        <View
                                            style={{
                                                backgroundColor: '#000000',
                                                height: '80%',
                                                width: '80%',
                                                borderRadius: 30,
                                                display:
                                                    markMovieFavorite ===
                                                    item?.id
                                                        ? 'flex'
                                                        : 'none',
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.textListFavorite}>
                                        {(item?.name).toUpperCase()}
                                    </Text>
                                </View>
                            )}
                        />
                    )}
                </View>
                <TouchableOpacity
                    style={[
                        styles.buttonSave,
                        {
                            backgroundColor:
                                filterListFilms == false ? 'gray' : 'black',
                        },
                    ]}
                    onPress={() => postAddFavoriteMovie()}
                    disabled={filterListFilms == false ? true : false}
                >
                    <Text style={styles.textButtonSave}> Salvar </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
