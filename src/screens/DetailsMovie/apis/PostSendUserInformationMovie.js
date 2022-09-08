import { instance } from '../../../services/api';

    export const postFavoriteMovie = async (idItens,sessionId,markFavorite) => {
        let resp = await instance
                .post(`account/${idItens}/favorite?&session_id=${sessionId}`, {
                'media_type': 'movie',
                'media_id': idItens,
                'favorite': markFavorite,
            });
            return resp;
        };