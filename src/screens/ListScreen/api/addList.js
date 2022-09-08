import { instance } from '../../../services/api';

export const postAPIAddList = (sessionID, nameList, descList) => {
    instance.post(`list?session_id=${sessionID}`, {
        name: nameList,
        description: descList,
        language: 'pt-BR',
    });
};
