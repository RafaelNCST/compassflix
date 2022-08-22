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

    const route = useRoute();

    useEffect(() => {
        if (route?.params?.type === 0) {
            setType('rated');
            setProgram('movies');
            firstRunRequest(userInfos?.id, sessionId, 'rated', 'movies');
        } else if (route?.params?.type === 1) {
            setType('rated');
            setProgram('series');
            firstRunRequest(userInfos?.id, sessionId, 'rated', 'tv');
        } else if (route?.params?.type === 2) {
            setType('favorite');
            setProgram('movies');
            firstRunRequest(userInfos?.id, sessionId, 'favorite', 'movies');
        } else if (route?.params?.type === 3) {
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
                {route?.params?.Title}{' '}
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
                    program={program}
                />
            )}
        </BodyScreen>
    );
};
