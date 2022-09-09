import { instance } from '../../../services/api';

export const requestMoviesRated = async (userInfos, sessionId) => {
    return await instance.get(
        `account/${userInfos?.id}/rated/movies?session_id=${sessionId}`,
    );
};

export const requestMoviesFavorite = async (userInfos, sessionId) => {
    return instance.get(
        `account/${userInfos?.id}/favorite/movies?session_id=${sessionId}`,
    );
};
