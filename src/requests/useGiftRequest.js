import useRequest from "./useRequest";

const useGiftRequest = () => {
    const { postRequest } = useRequest();
    const getAllGifts = async () => {
        const mainUrl = 'gift_store';
        const gifts = await postRequest(mainUrl, { state: "" });
        return await gifts
    }

    return {
        getAllGifts
    }
};

export default useGiftRequest;
