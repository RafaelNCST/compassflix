import { instance } from '../../../services/api';


export const getDetailSerie = async (idItens) => {
    let resp = await instance.get(`tv/${idItens}?&language=pt-BR`,
    ); 
    return resp;
    };

export const getEpisode = async (idItens) => {
    let resp = await instance.get(`/tv/${idItens}/season/1?&language=pt-BR`,
    );
    return resp;
    };

export const getStatesSerie = async (idItens, sessionId) => {
    let resp = await instance
        .get(`tv/${idItens}/account_states?&session_id=${sessionId}`,
        );
    return resp;
    };