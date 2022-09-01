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

import { ContainerMid } from '../../src/screens/UserPerfil/components/ContainerMid';

describe('Test Mid Container: 0 is Movies and 1 is Series', () => {
    afterEach(cleanup);
    let wrapper = null;
    let onPressMock = null;
    let activeButton = null;

    it('Mid Container is renderer?', () => {
        render(<ContainerMid />);
    });

    describe('Testing Button Movies Actived', () => {
        afterEach(cleanup);

        beforeEach(() => {
            onPressMock = jest.fn();
            wrapper = render(
                <ContainerMid activeButton={0} onPress={onPressMock} />,
            );
        });

        it('Should call onPress in Button Series when Button Movies is actived', () => {
            const button2 = wrapper.getByTestId('button2');
            fireEvent.press(button2);
            expect(onPressMock).toBeCalled();
        });
        it('Should not call onPress in ButtonMovies when ButtonMovies is already Actived', () => {
            const button1 = wrapper.getByTestId('button1');
            fireEvent.press(button1);
            expect(onPressMock).not.toBeCalled();
        });
        it('Should render movie image colored when button movies is activated', () => {
            const imageActivated = wrapper.getByHintText(
                'Imagens do botão Filmes',
            );
            expect(imageActivated.props.source).toEqual({
                testUri: '../../../src/assets/Images/moviesColored.png',
            });
        });
        it('Should render Series image gray when button Movies is activated', () => {
            const imageInactive = wrapper.getByHintText(
                'Imagens do botão Series',
            );
            expect(imageInactive.props.source).toEqual({
                testUri: '../../../src/assets/Images/seriesGray.png',
            });
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
        it('Should render Series image colored when button Series is activated', () => {
            const imageActivated = wrapper.getByHintText(
                'Imagens do botão Series',
            );
            expect(imageActivated.props.source).toEqual({
                testUri: '../../../src/assets/Images/seriesColored.png',
            });
        });
        it('Should render Movies image gray when button Series is activated', () => {
            const imageInactive = wrapper.getByHintText(
                'Imagens do botão Filmes',
            );
            expect(imageInactive.props.source).toEqual({
                testUri: '../../../src/assets/Images/moviesGray.png',
            });
        });
    });
});
