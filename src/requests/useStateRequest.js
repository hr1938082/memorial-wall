import useRequest from "./useRequest"

const useStateRequest = () => {
    const { getRequest } = useRequest();
    const getState = async () => {
        const state = await getRequest('state');
        return await state;
    }

    return {
        getState
    }
}

export default useStateRequest
