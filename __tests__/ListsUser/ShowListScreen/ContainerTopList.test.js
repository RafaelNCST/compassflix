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

import { ContainerTop } from '../../../src/screens/ListScreen/components/ContainerTop';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({ goBack: mockedNavigate }),
}));

describe('When Page Show Lists is rendered', () => {
    afterEach(cleanup);
    let wrapper = null;
    beforeEach(() => {
        wrapper = render(<ContainerTop />);
    });
    it('Should render ContainerTop', () => {
        expect(wrapper).toBeTruthy();
    });
    it('Should render and call onPress Back Button', () => {
        const button = wrapper.getByTestId('ArrowBack');
        fireEvent.press(button);
        expect(mockedNavigate).toHaveBeenCalledTimes(1);
    });
    it('Should render arrow icon in back Button', () => {
        const icon = wrapper.getByTestId('ArrowBack');
        expect(icon).toBeTruthy();
    });
    it('Should render Title text', () => {
        const text = wrapper.getByText('Minhas Listas');
        expect(text).toBeTruthy();
    });
});
