import useRequest from "./useRequest";

const useMemorialRequest = () => {
    const { postRequest } = useRequest();

    const CreateMemorial = async (data) => {
        const mainUrl = "user_bord";
        const create = await postRequest(mainUrl, data);
        return await create;
    }

    const getMemorial = async (data) => {
        const mainUrl = "get_memorial";
        const get = await postRequest(mainUrl, { id: data });
        return await get;
    }

    return {
        CreateMemorial,
        getMemorial
    }
}

export default useMemorialRequest