import { instance } from '../../../services/api';

export const getDetail = async (idItens) => {
    let resp = await instance.get(`movie/${idItens}?&language=pt-BR`,
    );
    return resp;
        
};

export const  getStates = async (idItens, sessionId) => {
    let resp = await instance.get(`movie/${idItens}/account_states?&session_id=${sessionId}`,
    );
    return resp;
};

export const getCast = async (idItens) => {
    let resp = await instance.get(`movie/${idItens}/credits?&language=pt-BR`,
    );
    return resp;
};

export const getNameListMovie = async (sessionId) => {
    let resp = await instance.get(`account/13749934/lists?&session_id=${sessionId}`
    );
    return resp;
};