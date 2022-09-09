import React from 'react';
import * as Styled from './style';

import inactiveMovies from '../../../../assets/Images/moviesGray.png';
import inactiveSeries from '../../../../assets/Images/seriesGray.png';

import activeMovies from '../../../../assets/Images/moviesColored.png';
import activeSeries from '../../../../assets/Images/seriesColored.png';

export const ContainerMid = ({ activeButton, onPress }) => {
    return (
        <Styled.ContainerMid>
            <Styled.ButtonMenu
                testID='button1'
                onPress={() => onPress(0)}
                disabled={activeButton === 0 ? true : false}
                sizeRight={activeButton === 0 ? 1 : 0}
            >
                <Styled.ImageButton
                    accessibilityHint='Imagens do botão Filmes'
                    source={activeButton === 0 ? activeMovies : inactiveMovies}
                />
            </Styled.ButtonMenu>
            <Styled.ButtonMenu
                testID='button2'
                onPress={() => onPress(1)}
                disabled={activeButton === 1 ? true : false}
                sizeLeft={activeButton === 1 ? 1 : 0}
            >
                <Styled.ImageButton
                    accessibilityHint='Imagens do botão Series'
                    source={activeButton === 1 ? activeSeries : inactiveSeries}
                />
            </Styled.ButtonMenu>
        </Styled.ContainerMid>
    );
};
