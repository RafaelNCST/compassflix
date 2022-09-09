import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import { it, expect, describe, afterEach, jest } from '@jest/globals';

import { LogoutButton } from '../../src/screens/UserPerfil/components/LogoutButton';

jest.mock('axios');

describe('When Button Sair Logout is pressed', () => {
    afterEach(cleanup);
    let mockSetVisible = jest.fn();
    it('onPress should be called', () => {
        let wrapper = render(<LogoutButton setVisible={mockSetVisible} />);
        const button = wrapper.getByText('Sair');
        fireEvent.press(button);
        expect(mockSetVisible).toBeCalled();
    });

    it('Render Modal Logout', () => {
        let wrapper = render(<LogoutButton visible={true} />);
        const modal = wrapper.getByTestId('ModalLogout');
        expect(modal.props.visible).toBeTruthy();
    });
});

describe('When Button Cancel is Pressed', () => {
    let wrapper = null;
    let mockSetVisible = jest.fn(() => false);
    it('Shoul call onPress', () => {
        wrapper = render(<LogoutButton setVisible={mockSetVisible} />);
        const button = wrapper.getByText('cancelar');
        fireEvent.press(button);
        expect(mockSetVisible).toHaveBeenCalledWith(false);
    });
    it('Modal should be closed', async () => {
        wrapper = render(<LogoutButton visible={false} />);
        const modal = wrapper.getByTestId('ModalLogout');
        expect(modal.props.visible).toBeFalsy();
    });
});

describe('When Button Sair is Pressed', () => {
    let wrapper = null;
    let logoutApi = jest.fn();
    it('Should call onPress', () => {
        wrapper = render(<LogoutButton logoutApi={logoutApi} />);
        const button = wrapper.getByText('sair');
        fireEvent.press(button);
        expect(logoutApi).toBeCalled();
    });
    it('Buttons should disappear and spinenr animation start', () => {
        wrapper = render(<LogoutButton logoutLoading={true} />);
        const spinner = wrapper.getByTestId('SpinnerMulticolor');
        expect(spinner).toBeTruthy();
    });
});
