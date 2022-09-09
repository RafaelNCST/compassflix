import React, { useContext, useEffect } from 'react';

import { BodyScreen } from '../../components/StyledComponents/GlobalStyleds';

import { ListFilmsContext } from '../../contexts/listFilmsContext';
import { ListsContext } from '../../contexts/listsContext';

import { ContainerTop } from './components/ContainerTop';
import { CardsList } from './components/CardsList';
import { ButtonAdd } from './components/ButtonAdd';
import { HeaderContext } from '../../contexts/headerContext';
import { LoginContext } from '../../contexts/loginContext';
import { useState } from 'react';

import { postAPIAddList } from './api/addList';

import { useNavigation } from '@react-navigation/native';

export const ListScreen = () => {
    const { userInfos } = useContext(HeaderContext);
    const {
        getLists,
        createLists,
        loadingScroll,
        handlerInfiniteScroll,
        page,
        totalPages,
        deleteList,
        listState,
        setListState,
        loading,
    } = useContext(ListsContext);

    const { stateFilteredList } = useContext(ListFilmsContext);

    const { sessionId } = useContext(LoginContext);

    const { dataFilmsList } = useContext(ListsContext);

    const [visible, setVisible] = useState(false);
    const [itemID, setItemID] = useState(0);

    const [nameList, setNameList] = useState(null);
    const [descList, setDescList] = useState(null);

    const [visibleAdd, setVisibleAdd] = useState(false);

    const Navigation = useNavigation();

    const handleAddList = () => {
        postAPIAddList(sessionId, nameList, descList);
        setListState(!listState);
        setVisibleAdd(false);
    };

    const handleDeleteList = ListId => {
        deleteList(ListId, sessionId);
        setListState(!listState);
        setVisible(false);
    };

    const activeModalDeleteItem = idList => {
        setVisible(true);
        setItemID(idList);
    };

    useEffect(() => {
        getLists(userInfos?.id, sessionId);
    }, [page, listState, stateFilteredList, dataFilmsList]);

    return (
        <BodyScreen>
            <ContainerTop />
            <CardsList
                createLists={createLists}
                infiniteScrollfn={handlerInfiniteScroll}
                loadingScroll={loadingScroll}
                page={page}
                totalPages={totalPages}
                handleDeleteList={handleDeleteList}
                setListState={setListState}
                visible={visible}
                setVisible={setVisible}
                activeModalDeleteItem={activeModalDeleteItem}
                itemID={itemID}
                loading={loading}
                Navigation={Navigation}
            />
            <ButtonAdd
                handleAddList={handleAddList}
                setNameList={setNameList}
                setDescList={setDescList}
                visibleAdd={visibleAdd}
                setVisibleAdd={setVisibleAdd}
            />
        </BodyScreen>
    );
};
