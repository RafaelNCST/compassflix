import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import {
    it,
    expect,
    describe,
    afterEach,
    jest,
    beforeEach,
} from '@jest/globals';

import { ModalRemoveItem } from '../../src/components/ModalRemoveItem';

describe('When Modal is render', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = render(<ModalRemoveItem text='Deseja remover a lista?' />);
    });
    it('correct question text should render', () => {
        const text = wrapper.getByText('Deseja remover a lista?');
        expect(text).toBeTruthy();
    });
});

describe('When Button Cancel is Pressed', () => {
    afterEach(cleanup);
    let wrapper = null;
    let mockSetVisible = jest.fn(() => false);
    it('Shoul call onPress', () => {
        wrapper = render(<ModalRemoveItem setVisible={mockSetVisible} />);
        const button = wrapper.getByText('cancelar');
        fireEvent.press(button);
        expect(mockSetVisible).toHaveBeenCalledWith(false);
    });
    it('Modal should be closed', async () => {
        wrapper = render(<ModalRemoveItem visible={false} />);
        const modal = wrapper.getByTestId('ModalLogout');
        expect(modal.props.visible).toBeFalsy();
    });
});

describe('When Button Sair is Pressed', () => {
    afterEach(cleanup);
    let wrapper = null;
    let handleDeleteList = jest.fn();
    it('Should call onPress', () => {
        wrapper = render(
            <ModalRemoveItem handleDeleteList={handleDeleteList} />,
        );
        const button = wrapper.getByText('sair');
        fireEvent.press(button);
        expect(handleDeleteList).toBeCalled();
    });
});
