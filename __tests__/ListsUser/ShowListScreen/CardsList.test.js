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

import { CardsList } from '../../../src/screens/ListScreen/components/CardsList';

describe('When Page Show List is rendered and lists exists', () => {
    afterEach(cleanup);
    let wrapper = null;
    let mockedHandleDeleteList = null;
    let handlerInfiniteScroll = null;
    let activeModalDeleteItem = null;

    beforeEach(() => {
        let mockedList = [
            { id: 0, name: 'Lista 1', item_count: 12 },
            { id: 1, name: 'Lista 2', item_count: 12 },
            { id: 2, name: 'Lista 3', item_count: 12 },
        ];
        mockedHandleDeleteList = jest.fn();
        handlerInfiniteScroll = jest.fn();
        activeModalDeleteItem = jest.fn();
        wrapper = render(
            <CardsList
                createLists={mockedList}
                handleDeleteList={mockedHandleDeleteList}
                handlerInfiniteScroll={handlerInfiniteScroll}
                activeModalDeleteItem={activeModalDeleteItem}
                page={1}
                totalPages={2}
            />,
        );
    });
    it('should render itens in list with names', () => {
        const list1 = wrapper.getByText('Lista 1');
        const list2 = wrapper.getByText('Lista 2');
        const list3 = wrapper.getByText('Lista 3');
        expect(list1).toBeTruthy();
        expect(list2).toBeTruthy();
        expect(list3).toBeTruthy();
    });
    it('should render itens in list with number of filmes', () => {
        const lists = wrapper.getAllByText('12 FILMES');
        lists.forEach(item => {
            expect(item).toBeTruthy();
        });
    });
    it('Should render once time when number of pages is one', () => {
        const list = wrapper.getByTestId('flatlistCards');
        expect(list.props.onEndReached).toEqual(handlerInfiniteScroll);
    });
    it('Should render more films when number of pages is more than one', () => {
        let mockedList = [
            { id: 0, name: 'Lista 1', item_count: 12 },
            { id: 1, name: 'Lista 2', item_count: 12 },
            { id: 2, name: 'Lista 3', item_count: 12 },
        ];
        mockedHandleDeleteList = jest.fn();
        handlerInfiniteScroll = jest.fn();
        wrapper = render(
            <CardsList
                createLists={mockedList}
                handleDeleteList={mockedHandleDeleteList}
                handlerInfiniteScroll={handlerInfiniteScroll}
                page={1}
                totalPages={1}
            />,
        );
        const list = wrapper.getByTestId('flatlistCards');
        expect(list.props.onEndReached).toEqual(null);
    });
    describe('render delete item button', () => {
        it('Render icon', () => {
            const deleteButton = wrapper.getAllByTestId('DeleteIcon');
            deleteButton.forEach(item => {
                expect(item).toBeTruthy();
            });
        });
        it('should call onPress', () => {
            const deleteButton = wrapper.getAllByTestId('DeleteIcon');
            deleteButton.forEach(item => {
                fireEvent.press(item);
                expect(activeModalDeleteItem).toBeCalled();
            });
        });
    });
});

describe('When Page Show List is rendered and lists dont exists', () => {
    afterEach(cleanup);
    let wrapper = null;

    beforeEach(() => {
        let mockedList = [];
        let mockedHandleDeleteList = jest.fn();
        wrapper = render(
            <CardsList
                createLists={mockedList}
                handleDeleteList={mockedHandleDeleteList}
            />,
        );
    });

    it('should render Blank list message', () => {
        const text = wrapper.getByText(
            'Você ainda não possui nenhuma lista :(',
        );
        expect(text).toBeTruthy();
    });
});
describe('When item is rendered and List is loading', () => {
    afterEach(cleanup);
    let wrapper = null;
    let loadingScroll = true;

    beforeEach(() => {
        let mockedList = [];
        let mockedHandleDeleteList = jest.fn();
        wrapper = render(
            <CardsList
                createLists={mockedList}
                handleDeleteList={mockedHandleDeleteList}
                loadingScroll={loadingScroll}
            />,
        );
    });
    it('Should render spinner loading', () => {
        const spinner = wrapper.getByTestId('SpinnerMulticolor');
        expect(spinner).toBeTruthy();
    });
});
