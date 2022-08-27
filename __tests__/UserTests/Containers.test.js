import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';
import {
    describe,
    expect,
    jest,
    it,
    afterEach,
    beforeEach,
} from '@jest/globals';

import { ContainerTop } from '../../src/screens/UserPerfil/components/ContainerTop';
import { ContainerMid } from '../../src/screens/UserPerfil/components/ContainerMid';
import { ContainerBottom } from '../../src/screens/UserPerfil/components/ContainerBottom';

import { HeaderContext } from '../../src/contexts/headerContext';
import { LoginContext } from '../../src/contexts/loginContext';

describe('Test Mid Container: 0 is Movies and 1 is Series', () => {
    let wrapper = null;
    let onPressMock = null;
    let activeButton = null;

    afterEach(cleanup);

    it('Mid Container is renderer?', () => {
        activeButton = jest.fn();
        onPressMock = jest.fn();
        const { debug } = render(
            <ContainerMid activeButton={activeButton} onPress={onPressMock} />,
        );
        debug();
    });

    describe('Testing Button Movies Actived', () => {
        afterEach(cleanup);

        beforeEach(() => {
            activeButton = 0;
            onPressMock = jest.fn();
            wrapper = render(
                <ContainerMid
                    activeButton={activeButton}
                    onPress={onPressMock}
                />,
            );
        });

        it('Should call onPress in ButtonSeries when ButtonMovies is actived', () => {
            const button2 = wrapper.getByTestId('button2');
            fireEvent.press(button2);
            expect(onPressMock).toBeCalled();
        });
        it('Should not call onPress in ButtonMovies when ButtonMovies is already Actived', () => {
            const button1 = wrapper.getByTestId('button1');
            fireEvent.press(button1);
            expect(onPressMock).not.toBeCalled();
        });
    });

    describe('Testing Button Series Actived', () => {
        afterEach(cleanup);

        beforeEach(() => {
            activeButton = 1;
            onPressMock = jest.fn();
            wrapper = render(
                <ContainerMid
                    activeButton={activeButton}
                    onPress={onPressMock}
                />,
            );
        });

        it('Should call onPress in ButtonMovies when buttonSeries is activated', () => {
            const button1 = wrapper.getByTestId('button1');
            fireEvent.press(button1);
            expect(onPressMock).toBeCalled();
        });
        it('Should not call onPress in ButtonSeries when ButtonSeries is already activated', () => {
            const button2 = wrapper.getByTestId('button2');
            fireEvent.press(button2);
            expect(onPressMock).not.toBeCalled();
        });
    });
});

describe('Bottom Container: testing buttons and titles ', () => {
    let userInfos = null;
    let data = null;
    let activeButton = null;
    let wrapper = null;

    afterEach(cleanup);

    it('Sucess in renderer Bottom container?', () => {
        userInfos = jest.fn();
        data = jest.fn();
        activeButton = jest.fn();
        render(
            <HeaderContext.Provider value={userInfos}>
                <ContainerBottom
                    activeButton={activeButton}
                    dataAvaliationFilms={data}
                    dataFavoritesSeries={data}
                    loading={true}
                />
            </HeaderContext.Provider>,
        );
    });

    describe('Text Title', () => {
        afterEach(cleanup);
        beforeEach(() => {
            userInfos = jest.fn();
            data = jest.fn();
            activeButton = 0;
            wrapper = render(
                <HeaderContext.Provider value={userInfos}>
                    <ContainerBottom
                        activeButton={activeButton}
                        dataAvaliationFilms={data}
                        dataFavoritesSeries={data}
                        loading={true}
                    />
                </HeaderContext.Provider>,
            );
        });

        it('Render All Titles', () => {
            const text = wrapper.getAllByTestId('TitleText');
            expect(text).toBeTruthy();
        });
    });

    describe('Button See More', () => {
        afterEach(cleanup);
        beforeEach(() => {
            userInfos = jest.fn();
            data = jest.fn();
            activeButton = 0;
            wrapper = render(
                <HeaderContext.Provider value={userInfos}>
                    <ContainerBottom
                        activeButton={activeButton}
                        dataAvaliationFilms={data}
                        dataFavoritesSeries={data}
                        loading={true}
                    />
                </HeaderContext.Provider>,
            );
        });

        it('Render All titles Button see more', () => {
            const text = wrapper.getAllByText('Ver Mais');
            expect(text).toBeTruthy();
        });
    });
});

describe('Top Container', () => {
    let userInfos = null;
    let data = null;
    let activeButton = null;
    let sessionId = jest.fn();
    let wrapper = null;
    let mockLogoutApi = null;
    let changeSessionID = jest.fn();

    afterEach(cleanup);

    it('Sucess in renderer Top container?', () => {
        userInfos = jest.fn();
        data = jest.fn();
        activeButton = jest.fn();
        mockLogoutApi = jest.fn();
        render(
            <LoginContext.Provider value={(sessionId, changeSessionID)}>
                <HeaderContext.Provider value={userInfos}>
                    <ContainerTop
                        userInfos={userInfos}
                        rateQuantityMovies={data}
                        rateQuantitySeries={data}
                        activeButton={0}
                        loading={true}
                        logoutApi={mockLogoutApi}
                    />
                    ,
                </HeaderContext.Provider>
            </LoginContext.Provider>,
        );
    });

    describe('Image User', () => {
        afterEach(cleanup);
        beforeEach(() => {
            userInfos = jest.fn();
            sessionId = jest.fn();
            data = jest.fn();
            activeButton = 0;
            wrapper = render(
                <LoginContext.Provider value={(sessionId, changeSessionID)}>
                    <HeaderContext.Provider value={userInfos}>
                        <ContainerTop
                            userInfos={undefined}
                            rateQuantityMovies={data}
                            rateQuantitySeries={data}
                            activeButton={0}
                            loading={true}
                            logoutApi={mockLogoutApi}
                        />
                        ,
                    </HeaderContext.Provider>
                </LoginContext.Provider>,
            );
        });

        it('Is render user image?', () => {
            const image = wrapper.getByHintText('Imagem de Usuário');
            expect(image).toBeTruthy();
        });
        it('Image container with correct source??', () => {
            const image = wrapper.getByHintText('Imagem de Usuário');
            expect(image.props.source).toStrictEqual({
                testUri: '../../../src/assets/Images/imagemAnonima.jpg',
            });
        });
    });
});
