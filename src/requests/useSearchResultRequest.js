import useRequest from './useRequest'

const useSearchResultRequest = () => {
    const { postRequest } = useRequest();

    const getSearchResultsByData = async (data) => {
        const mainUrl = 'search';
        const result = await postRequest(mainUrl, data);
        return await result;
    }

    return {
        getSearchResultsByData,
    }
}

export default useSearchResultRequest
