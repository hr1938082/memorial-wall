import useRequest from "./useRequest";

const useMemorialRequest = () => {
    const { postRequest } = useRequest();

    const CreateMemorial = async (data) => {
        const mainUrl = "user_bord";
        const create = await postRequest(mainUrl, data);
        return await create;
    }

    return {
        CreateMemorial
    }
}

export default useMemorialRequest