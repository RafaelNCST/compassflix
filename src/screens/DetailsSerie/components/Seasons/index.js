import { FlatList , View } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { Episode } from '../../components/Episode';

export const Seasons  = ({seasons, listEpisode }) => {
    return (
        <View style={styles.areaDropDown}>
                        <FlatList
                            data={seasons}
                            contentContainerStyle={{marginBottom:30}}
                            keyExtractor={(_, index) => index}
                            renderItem={({ item }) => {
                                return (
                                    <Episode
                                        season={item.name}
                                        episodes={listEpisode}
                                    />
                                );
                            }}
                        />
                    </View>
    );
};



