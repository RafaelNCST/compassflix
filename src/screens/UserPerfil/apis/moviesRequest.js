import { instance } from '../../../services/api';

export const requestMoviesRated = async (userInfos, sessionId) => {
    let resp = await instance.get(
        `account/${userInfos?.id}/rated/movies?session_id=${sessionId}`,
    );

    return resp;
};
