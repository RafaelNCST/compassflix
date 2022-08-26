import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import { ListSeriesContext } from '../../contexts/listSeriesContext';
import { BodyScreen } from './style';
import { HeaderUserInfos } from '../../components/HeaderUserInfos';
import { ListHome } from '../../components/FlatListHome';

import { styles } from './style';

import { useRoute } from '@react-navigation/native';

export const HomeSeries = () => {
    const route = useRoute();

    //prettier-ignore
    const {
        requestTvListSeries,
        lastPageSeries,
        loadingScrollSeries,
        loadingSeries,
        seriesList,
        loadInfiniteScrollSeries,
    } = useContext(ListSeriesContext);

    useEffect(() => {
        requestTvListSeries();
    }, []);

    useEffect(() => {
        if (loadingScrollSeries) {
            setTimeout(() => requestTvListSeries(), 2000);
        }
    }, [lastPageSeries]);

    return (
        <BodyScreen>
            <HeaderUserInfos strTitle={route?.params?.strTitle} />
            <ListHome
                loading={loadingSeries}
                data={seriesList}
                infiniteScrollFn={loadInfiniteScrollSeries}
                loadingState={loadingScrollSeries}
            />
        </BodyScreen>
    );
};
