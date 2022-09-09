import { instance } from '../../../services/api';

export const postFavoriteSerie = async (idItens,sessionId,markFavorite) => {
    let resp = await instance
            .post(`account/${idItens}/favorite?&session_id=${sessionId}`, {
            'media_type': 'tv',
            'media_id': idItens,
            'favorite': markFavorite,
        });
        return resp;
    };

export const postRateSerie = async (idItens, sessionId,noteAvaliationSerie) => {
    let resp = await instance .post(`tv/${idItens}/rating?&session_id=${sessionId}`, {
            value: parseFloat(noteAvaliationSerie),
        })
        .catch(error => {
            console.log(error);
        });
        return resp;
    };