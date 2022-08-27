import React, { useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../../contexts/headerContext';
import { LoginContext } from '../../contexts/loginContext';
import { ListSeeMoreContext } from '../../contexts/listsSeeMoreContext';

import * as Styled from './style';

import { ListSeeMore } from '../../components/FlatListSeeMore';
import { SpinnerMultiColor } from '../../components/SpinnerMultiColor';
import { BackButton } from '../../components/StyledComponents/BackButton';

import { BodyScreen } from '../../components/StyledComponents/GlobalStyleds';

import { useRoute } from '@react-navigation/native';

export const PageSeeMore = () => {
    const { userInfos } = useContext(HeaderContext);

    const { sessionId } = useContext(LoginContext);

    const [type, setType] = useState();
    const [program, setProgram] = useState();

    const {
        requestMoviesRated,
        loadingScroll,
        lastPage,
        arrayData,
        loadInfiniteScroll,
        totalPages,
        firstRunRequest,
        loadingPage,
    } = useContext(ListSeeMoreContext);

    const { Title, TypeButton } = useRoute()?.params;

    const checkNavigation = () => {
        if (TypeButton == 0 || TypeButton == 2) {
            return 'DetailUserMovie';
        } else {
            return 'DetailUserSerie';
        }
    };

    useEffect(() => {
        if (TypeButton === 0) {
            setType('rated');
            setProgram('movies');
            firstRunRequest(userInfos?.id, sessionId, 'rated', 'movies');
        } else if (TypeButton === 1) {
            setType('rated');
            setProgram('series');
            firstRunRequest(userInfos?.id, sessionId, 'rated', 'tv');
        } else if (TypeButton === 2) {
            setType('favorite');
            setProgram('movies');
            firstRunRequest(userInfos?.id, sessionId, 'favorite', 'movies');
        } else if (TypeButton === 3) {
            setType('favorite');
            setProgram('series');
            firstRunRequest(userInfos?.id, sessionId, 'favorite', 'tv');
        }
    }, []);

    useEffect(() => {
        if (type && program && loadingScroll) {
            requestMoviesRated(userInfos?.id, sessionId, type, program);
        }
    }, [lastPage]);

    return (
        <BodyScreen>
            <BackButton />
            <Styled.TextTitle color={'#FFFFFF'}>
                {Title}{' '}
                <Styled.TextTitle color={'#E9A6A6'}>
                    {userInfos?.name || userInfos?.username}
                </Styled.TextTitle>
                !
            </Styled.TextTitle>
            {loadingPage ? (
                <SpinnerMultiColor
                    Loadingstate={loadingPage}
                    size={30}
                    color={'#FFFFFF'}
                    flexNumber={1}
                />
            ) : (
                <ListSeeMore
                    data={arrayData}
                    loadingScroll={loadingScroll}
                    totalPages={totalPages}
                    loadInfiniteScroll={loadInfiniteScroll}
                    lastPage={lastPage}
                    type={type}
                    TypeButton={checkNavigation}
                    program={program}
                />
            )}
        </BodyScreen>
    );
};
