import { instance } from '../../../services/api';

export const requestSeriesRated = async (idUser, sessionID) => {
    return await instance.get(
        `account/${idUser}/rated/tv?session_id=${sessionID}`,
    );
};

export const requestSeriesFavorite = async (idUser, sessionID) => {
    return await instance.get(
        `account/${idUser}/favorite/tv?session_id=${sessionID}`,
    );
};
