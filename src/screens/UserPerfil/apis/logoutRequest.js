import { instance } from '../../../services/api';

export const logoutRequest = async sessionId => {
    let resp = await instance
        .delete('authentication/session', {
            data: { session_id: sessionId },
        })
        .catch(error => {
            console.log(error);
        });

    return resp;
};
