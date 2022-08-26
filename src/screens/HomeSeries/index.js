import React, { useEffect, useContext } from 'react';
import { ListSeriesContext } from '../../contexts/listSeriesContext';
import { BodyScreen } from './style';
import { HeaderUserInfos } from '../../components/HeaderUserInfos';
import { ListHome } from '../../components/FlatListHome';

import { useRoute } from '@react-navigation/native';

export const HomeSeries = () => {
    const route = useRoute();

    const {
        requestTvListSeries,
        loadingScrollSeries,
        loadInfiniteScrollSeries,
        loadingSeries,
        lastPageSeries,
        seriesList,
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
