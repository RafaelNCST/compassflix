import { instance } from '../../../services/api';

export const requestMoviesRated = async (userInfos, sessionId) => {
    let resp = await instance.get(
        `account/${userInfos?.id}/rated/movies?session_id=${sessionId}`,
    );

    return resp;
};

export const requestMoviesFavorite = (userInfos, sessionId) => {
    let resp = instance.get(
        `account/${userInfos?.id}/favorite/movies?session_id=${sessionId}`,
    );

    return resp;
};
