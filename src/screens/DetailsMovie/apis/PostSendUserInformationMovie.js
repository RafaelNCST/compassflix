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
    export const postRateMovie = async (idItens ,sessionId, noteAvaliation ) => {
        let resp = instance
                .post(`movie/${idItens}/rating?session_id=${sessionId}`, {
                    'value': parseFloat(noteAvaliation), 
                    })
                .catch(error => {
                    setVerification(true);
                    setNoteAvaliation('');
                    if (error?.response?.status === 400) {
                    setMenssagError('A nota deve ser de 0,50 a 10');
                    }
                    });
                return resp;
            };