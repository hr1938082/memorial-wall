import { getRequest } from "./Request"

const getState = async () => {
    const state = await getRequest('state');
    return await state;
}

export {
    getState
}