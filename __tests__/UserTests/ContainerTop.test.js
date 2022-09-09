import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import {
    describe,
    expect,
    jest,
    it,
    afterEach,
    beforeEach,
} from '@jest/globals';

import { ContainerTop } from '../../src/screens/UserPerfil/components/ContainerTop';

let wrapper = null;
let mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe('When render Top Container', () => {
    afterEach(cleanup);

    it('Sucess in renderer', () => {
        const onPressMock = jest.fn();
        render(<ContainerTop logoutApi={onPressMock} />);
    });
});

describe('When render user image', () => {
    afterEach(cleanup);

    const respObject = {
        avatar: {
            tmdb: {
                avatar_path: '/urlImage',
            },
        },
    };

    const userInfosRequest = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(respObject);
            }, 500);
        });
    };

    beforeEach(() => {
        wrapper = render(
            <ContainerTop userInfos={userInfosRequest()} loading={true} />,
        );
    });

    it('Is render user image', () => {
        const image = wrapper.getByHintText('Imagem de Usuário');
        expect(image).toBeTruthy();
    });
    it('Should render anonymous image when api image not found', () => {
        const image = wrapper.getByHintText('Imagem de Usuário');
        expect(image.props.source).toStrictEqual({
            testUri: '../../../src/assets/Images/imagemAnonima.jpg',
        });
    });
    it('Image component render API image', async () => {
        // eslint-disable-next-line no-unused-vars
        await userInfosRequest().then(resp => {
            wrapper = render(<ContainerTop userInfos={resp} loading={true} />);
            const image = wrapper.getByHintText('Imagem de Usuário');
            expect(image.props.source).toStrictEqual({
                uri: 'https://image.tmdb.org/t/p/original/urlImage',
            });
        });
    });
});

describe('When render text user names', () => {
    afterEach(cleanup);
    it('Should renderer name when name exists', async () => {
        const respObject = {
            name: 'RafaelPerfeito',
            username: 'Wellyca',
        };

        const requestUserNames = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(respObject);
                }, 500);
            });
        };

        await requestUserNames().then(resp => {
            wrapper = render(<ContainerTop userInfos={resp} loading={true} />);

            const text = wrapper.getByText('RafaelPerfeito');
            expect(text).toBeTruthy();
        });
    });

    it('Should renderer username when name dont exists', async () => {
        const respObject = {
            name: undefined,
            username: 'RafaelLindo',
        };

        const requestUserNames = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(respObject);
                }, 500);
            });
        };

        await requestUserNames().then(resp => {
            wrapper = render(<ContainerTop userInfos={resp} loading={true} />);

            const text = wrapper.getByText('RafaelLindo');
            expect(text).toBeTruthy;
        });
    });
});

describe('When Number of quantity movies and series render', () => {
    it('Should renderer spinner animation when page is loading', () => {
        wrapper = render(
            <ContainerTop
                activeButton={0}
                rateQuantityMovies={5}
                rateQuantitySeries={0}
                loading={true}
            />,
        );

        const spinner = wrapper.getByTestId('Spinner');
        expect(spinner).toBeTruthy();
    });
    it('Should render quantity Movies when Button movies is activated', () => {
        wrapper = render(
            <ContainerTop
                activeButton={0}
                rateQuantityMovies={5}
                rateQuantitySeries={0}
                loading={false}
            />,
        );

        const container = wrapper.getByText('5');

        expect(container).toBeTruthy();
    });
    it('Should render quantity Series when Button Series is activated', () => {
        wrapper = render(
            <ContainerTop
                activeButton={1}
                rateQuantityMovies={5}
                rateQuantitySeries={0}
                loading={false}
            />,
        );

        const container = wrapper.getByText('0');

        expect(container).toBeTruthy();
    });
});
