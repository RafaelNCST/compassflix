import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import * as Styled from './styles';
import { genresColors } from '../../../../helpers/genresObj';

export const Detail = ({ imageMovie, titleMovie, genreMovie, setVisible }) => {
    return (
        <Styled.ModalScreens>
            <Styled.ModalArea>
                <Styled.IconeArea>
                    <Styled.IconeButton onPress={() => setVisible(false)}>
                        <Icon name='clear' size={20} color={'black'} />
                    </Styled.IconeButton>
                </Styled.IconeArea>
                <Styled.InfoModal>
                    <Styled.ImageModal
                        source={{
                            uri: `https://image.tmdb.org/t/p/original${imageMovie}`,
                        }}
                    />
                    <Styled.TitleModal>{titleMovie}</Styled.TitleModal>
                    <Styled.GenresContainer>
                        {genreMovie.map((item, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.genresArea,
                                    {
                                        backgroundColor:
                                            genresColors[item?.name],
                                        borderRadius: 15,
                                    },
                                ]}
                            >
                                <Styled.GenresText>
                                    {(item?.name).length > 8
                                        ? (item?.name).substring(0, 8) + '.'
                                        : item?.name}
                                </Styled.GenresText>
                            </View>
                        ))}
                    </Styled.GenresContainer>
                </Styled.InfoModal>
            </Styled.ModalArea>
        </Styled.ModalScreens>
    );
};
