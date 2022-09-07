import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import {
    describe,
    expect,
    jest,
    it,
    afterEach,
    beforeEach,
} from '@jest/globals';

import {
    Title1Movies,
    Title2Movies,
    Title1Series,
    Title2Series,
} from '../../src/screens/UserPerfil/components/ContainerBottom/helpers/titles';

import { ContainerBottom } from '../../src/screens/UserPerfil/components/ContainerBottom';

import { HeaderContext } from '../../src/contexts/headerContext';

jest.mock(
    '../../src/screens/UserPerfil/components/ContainerBottom/helpers/titles',
);

describe('When User Page open, Button Container', () => {
    let wrapper = null;
    let userInfos = null;
    afterEach(cleanup);

    it('Sucess in renderer Bottom container?', () => {
        userInfos = jest.fn();
        render(
            <HeaderContext.Provider value={userInfos}>
                <ContainerBottom loading={true} />
            </HeaderContext.Provider>,
        );
    });

    describe('When Button movies is activated and loading page is true', () => {
        afterEach(cleanup);

        beforeEach(() => {
            let userInfos = jest.fn();
            wrapper = render(
                <HeaderContext.Provider value={userInfos}>
                    <ContainerBottom activeButton={0} loading={true} />
                </HeaderContext.Provider>,
            );
        });
        it('should render title films favorits', () => {
            const text = wrapper.getByText(Title2Movies);
            expect(text).toBeTruthy();
        });
        it('should render title films Avaliation', () => {
            const text = wrapper.getByText(Title1Movies);
            expect(text).toBeTruthy();
        });
        it('should render spinner while loading data', () => {
            const spinner = wrapper.getAllByTestId('Spinner');
            expect(spinner).toBeTruthy();
        });
    });

    describe('When Button Series is activated and loading page is true', () => {
        afterEach(cleanup);

        beforeEach(() => {
            let userInfos = jest.fn();
            wrapper = render(
                <HeaderContext.Provider value={userInfos}>
                    <ContainerBottom activeButton={1} loading={true} />
                </HeaderContext.Provider>,
            );
        });
        it('should render title Series favorits', () => {
            const text = wrapper.getByText(Title2Series);
            expect(text).toBeTruthy();
        });
        it('should render title Series Avaliation', () => {
            const text = wrapper.getByText(Title1Series);
            expect(text).toBeTruthy();
        });
        it('should render spinner while loading data', () => {
            const spinner = wrapper.getAllByTestId('Spinner');
            expect(spinner).toBeTruthy();
        });
    });

    describe('When Button Movies is activated and loading page is false', () => {
        afterEach(cleanup);
        const dataFavoritesMovies = [
            { poster_path: '/HGJDasRyD18kl4FhoCNQuWxWu5cBLM.jpg' },
            { poster_path: '/phTUDRyD18kasdasdadasd215cB2Ms.jpg' },
        ];

        const dataAvaliationFilms = [
            { poster_path: '/HGJDasRyD18kl4FhoCNQuWxWu5cBLM.jpg', rating: 8.5 },
            { poster_path: '/phTUDRyD18kasdasdadasd215cB2Ms.jpg', rating: 5.5 },
            { poster_path: '/pIkRysdadasd123Wu53213231LMsdd.jpg', rating: 9.5 },
        ];

        beforeEach(() => {
            userInfos = jest.fn();
            wrapper = render(
                <HeaderContext.Provider value={userInfos}>
                    <ContainerBottom
                        activeButton={0}
                        loading={false}
                        dataFavoritesMovies={dataFavoritesMovies}
                        dataAvaliationFilms={dataAvaliationFilms}
                        dataFavoritesSeries={undefined}
                        dataAvaliationSeries={undefined}
                    />
                </HeaderContext.Provider>,
            );
        });
        it('should render favorites films images', () => {
            const image = wrapper.getAllByHintText('Imagem Favorito');
            expect(image).toBeTruthy();
        });
        it('should render avaliation films images', () => {
            const image = wrapper.getAllByHintText('Imagem Avaliado');
            expect(image).toBeTruthy();
        });

        it('add favorite films in blank space data when data is lower than 4', () => {
            const blank = wrapper.getAllByTestId('ButtonAddFavorites');
            expect(blank).toBeTruthy();
        });
        it('add avaliation films in blank space data when data is lower than 5', () => {
            const blank = wrapper.getAllByTestId('buttonAddAvaliation');
            expect(blank).toBeTruthy();
        });
    });

    describe('When Button Series is activated and loading page is false', () => {
        afterEach(cleanup);
        const dataFavoritesSeries = [
            { poster_path: '/HGJDasRyD18kl4FhoCNQuWxWu5cBLM.jpg' },
            { poster_path: '/phTUDRyD18kasdasdadasd215cB2Ms.jpg' },
        ];

        const dataAvaliationSeries = [
            { poster_path: '/HGJDasRyD18kl4FhoCNQuWxWu5cBLM.jpg', rating: 8.5 },
            { poster_path: '/phTUDRyD18kasdasdadasd215cB2Ms.jpg', rating: 5.5 },
            { poster_path: '/pIkRysdadasd123Wu53213231LMsdd.jpg', rating: 9.3 },
        ];

        beforeEach(() => {
            userInfos = jest.fn();
            wrapper = render(
                <HeaderContext.Provider value={userInfos}>
                    <ContainerBottom
                        activeButton={1}
                        loading={false}
                        dataFavoritesMovies={undefined}
                        dataAvaliationFilms={undefined}
                        dataFavoritesSeries={dataFavoritesSeries}
                        dataAvaliationSeries={dataAvaliationSeries}
                    />
                </HeaderContext.Provider>,
            );
        });
        it('should render favorites series images', () => {
            const image = wrapper.getAllByHintText('Imagem Favorito');
            expect(image).toBeTruthy();
        });
        it('should render avaliation series images', () => {
            const image = wrapper.getAllByHintText('Imagem Avaliado');
            expect(image).toBeTruthy();
        });

        it('add favorite series in blank space data when data is lower than 4', () => {
            const blank = wrapper.getAllByTestId('ButtonAddFavorites');
            expect(blank).toBeTruthy();
        });
        it('add avaliation series in blank space data when data is lower than 5', () => {
            const blank = wrapper.getAllByTestId('buttonAddAvaliation');
            expect(blank).toBeTruthy();
        });
        it('should render icon and avaliation bellow of images avaliation', () => {
            const icon = wrapper.getAllByHintText('Icone Estrela');
            const note = wrapper.getByText('9.3/10');
            expect(icon).toBeTruthy();
            expect(note).toBeTruthy();
        });
    });

    describe('When Button Blank space add is pressed', () => {
        let NavigationBlankData = null;
        describe('Movies', () => {
            afterEach(cleanup);
            const dataFavoritesMovies = [
                { poster_path: '/HGJDasRyD18kl4FhoCNQuWxWu5cBLM.jpg' },
                { poster_path: '/phTUDRyD18kasdasdadasd215cB2Ms.jpg' },
            ];

            const dataAvaliationFilms = [
                {
                    poster_path: '/HGJDasRyD18kl4FhoCNQuWxWu5cBLM.jpg',
                    rating: 8.5,
                },
                {
                    poster_path: '/phTUDRyD18kasdasdadasd215cB2Ms.jpg',
                    rating: 5.5,
                },
                {
                    poster_path: '/pIkRysdadasd123Wu53213231LMsdd.jpg',
                    rating: 9.5,
                },
            ];

            beforeEach(() => {
                userInfos = jest.fn();
                NavigationBlankData = jest.fn();
                wrapper = render(
                    <HeaderContext.Provider value={userInfos}>
                        <ContainerBottom
                            activeButton={0}
                            loading={false}
                            dataFavoritesMovies={dataFavoritesMovies}
                            dataAvaliationFilms={dataAvaliationFilms}
                            dataFavoritesSeries={undefined}
                            dataAvaliationSeries={undefined}
                            NavigationBlankData={NavigationBlankData}
                        />
                    </HeaderContext.Provider>,
                );
            });
            it('Call onPress Button with navigation for home movies favorites', () => {
                const blank = wrapper.getAllByTestId('ButtonAddFavorites');
                blank.forEach(item => {
                    fireEvent.press(item);
                    expect(NavigationBlankData).toBeCalled();
                });
            });

            it('Call onPress Button with navigation for home movies avaliation', () => {
                const blank = wrapper.getAllByTestId('buttonAddAvaliation');
                blank.forEach(item => {
                    fireEvent.press(item);
                    expect(NavigationBlankData).toBeCalled();
                });
            });
        });

        describe('Series', () => {
            afterEach(cleanup);
            const dataFavoritesSeries = [
                { poster_path: '/HGJDasRyD18kl4FhoCNQuWxWu5cBLM.jpg' },
                { poster_path: '/phTUDRyD18kasdasdadasd215cB2Ms.jpg' },
            ];

            const dataAvaliationSeries = [
                {
                    poster_path: '/HGJDasRyD18kl4FhoCNQuWxWu5cBLM.jpg',
                    rating: 8.5,
                },
                {
                    poster_path: '/phTUDRyD18kasdasdadasd215cB2Ms.jpg',
                    rating: 5.5,
                },
                {
                    poster_path: '/pIkRysdadasd123Wu53213231LMsdd.jpg',
                    rating: 9.5,
                },
            ];

            beforeEach(() => {
                NavigationBlankData = jest.fn();
                userInfos = jest.fn();
                wrapper = render(
                    <HeaderContext.Provider value={userInfos}>
                        <ContainerBottom
                            activeButton={1}
                            loading={false}
                            dataFavoritesMovies={undefined}
                            dataAvaliationFilms={undefined}
                            dataFavoritesSeries={dataFavoritesSeries}
                            dataAvaliationSeries={dataAvaliationSeries}
                            NavigationBlankData={NavigationBlankData}
                        />
                    </HeaderContext.Provider>,
                );
            });
            it('Call onPress Button with navigation for home series favorites', () => {
                const blank = wrapper.getAllByTestId('ButtonAddFavorites');
                blank.forEach(item => {
                    fireEvent.press(item);
                    expect(NavigationBlankData).toBeCalledWith();
                });
            });

            it('Call onPress Button with navigation for home series avaliation', () => {
                const blank = wrapper.getAllByTestId('buttonAddAvaliation');
                blank.forEach(item => {
                    fireEvent.press(item);
                    expect(NavigationBlankData).toBeCalled();
                });
            });
        });
    });

    describe('Button See More', () => {
        afterEach(cleanup);
        let Navigation = null;
        let OpenPageAvaliation = null;
        let OpenPageFavorites = null;
        beforeEach(() => {
            userInfos = jest.fn();
            wrapper = render(
                <HeaderContext.Provider value={userInfos}>
                    <ContainerBottom loading={true} />
                </HeaderContext.Provider>,
            );
        });

        it('Render All texts Button see more', () => {
            const text = wrapper.getAllByText('Ver Mais');
            expect(text).toBeTruthy();
        });

        describe('When button movies is activated', () => {
            afterEach(cleanup);
            Navigation = {
                navigate: jest.fn(),
            };
            beforeEach(() => {
                userInfos = jest.fn();
                OpenPageAvaliation = jest.fn(() => Navigation.navigate);
                OpenPageFavorites = jest.fn(() => Navigation.navigate);
                wrapper = render(
                    <HeaderContext.Provider value={userInfos}>
                        <ContainerBottom
                            loading={true}
                            activeButton={0}
                            Navigation={Navigation}
                            OpenPageAvaliation={OpenPageAvaliation}
                            OpenPageFavorites={OpenPageFavorites}
                        />
                    </HeaderContext.Provider>,
                );
            });
            it('call onPress when button is pressed with favorites', () => {
                const button = wrapper.getByHintText(
                    'botão ver mais favoritos',
                );
                fireEvent.press(button);
                expect(OpenPageFavorites).toBeCalled();
            });
            it('call onPress when button is pressed with avaliations', () => {
                const button = wrapper.getByHintText(
                    'botão ver mais avaliados',
                );
                fireEvent.press(button);
                expect(OpenPageAvaliation).toBeCalled();
            });
        });

        describe('When Button Series is activated', () => {
            afterEach(cleanup);
            beforeEach(() => {
                userInfos = jest.fn();
                Navigation = {
                    navigate: jest.fn(),
                };
                OpenPageAvaliation = jest.fn(() => Navigation.navigate);
                OpenPageFavorites = jest.fn(() => Navigation.navigate);
                wrapper = render(
                    <HeaderContext.Provider value={userInfos}>
                        <ContainerBottom
                            activeButton={1}
                            loading={true}
                            Navigation={Navigation}
                            OpenPageAvaliation={OpenPageAvaliation}
                            OpenPageFavorites={OpenPageFavorites}
                        />
                    </HeaderContext.Provider>,
                );
            });
            it('call onPress when button is pressed with favorites', () => {
                const button = wrapper.getByHintText(
                    'botão ver mais favoritos',
                );
                fireEvent.press(button);
                expect(OpenPageFavorites).toBeCalled();
            });
            it('call onPress when button is pressed with avaliations', () => {
                const button = wrapper.getByHintText(
                    'botão ver mais avaliados',
                );
                fireEvent.press(button);
                expect(OpenPageAvaliation).toBeCalled();
            });
        });
    });
});
