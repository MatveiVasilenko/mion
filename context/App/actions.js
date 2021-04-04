import { USER_TOKEN } from './creators';

export const createToken = (user) => ({
    type: USER_TOKEN,
    payload: user
})