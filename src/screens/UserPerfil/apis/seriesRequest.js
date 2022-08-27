import { instance } from '../../../services/api';

export const requestSeriesRated = (idUser, sessionID) => {
    let resp = instance.get(
        `account/${idUser}/rated/tv?session_id=${sessionID}`,
    );

    return resp;
};

export const requestSeriesFavorite = (idUser, sessionID) => {
    let resp = instance.get(
        `account/${idUser}/favorite/tv?session_id=${sessionID}`,
    );

    return resp;
};
