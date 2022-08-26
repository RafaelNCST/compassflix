import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import { ListSeriesContext } from '../../contexts/listSeriesContext';
import { BodyScreen } from './style';
import { HeaderUserInfos } from '../../components/HeaderUserInfos';
import { ListHome } from '../../components/FlatListHome';

import { styles } from './style';

export const HomeSeries = () => {
    const [seriesList, setSeriesList] = useState([]);
    const {
        changeInfiniteScrollLoading,
        loadingScroll,
        changeLoadingPage,
        lastPage,
        changeTitleName,
    } = useContext(ListHomeContext);

    const requestMovieListFilms = async () => {
        await instance
            .get(`tv/popular?&language=pt-BR&page=${lastPage}`)
            .then(resp => {
                setSeriesList([...seriesList, ...resp.data.results]);
                changeLoadingPage(false);
            })
            .finally(() => changeInfiniteScrollLoading(false));
    };

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
