import React, { useContext, useEffect } from 'react';

import { BodyScreen } from '../../components/StyledComponents/GlobalStyleds';

import { ContainerTop } from './components/ContainerTop';
import { CardsList } from './components/CardsList';
import { ButtonAdd } from './components/ButtonAdd';
import { HeaderContext } from '../../contexts/headerContext';
import { ListsContext } from '../../contexts/listsContext';
import { LoginContext } from '../../contexts/loginContext';
import { useState } from 'react';

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
    } = useContext(ListsContext);
    const { sessionId } = useContext(LoginContext);
    const [visible, setVisible] = useState(false);
    const [itemID, setItemID] = useState(0);

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
    }, [page, listState]);

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
            />
            <ButtonAdd />
        </BodyScreen>
    );
};
