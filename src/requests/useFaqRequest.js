import useRequest from './useRequest';
const useFaqRequest = () => {
    const { postRequest } = useRequest();

    const getAllFAQS = async () => {
        const mainUrl = 'get_all_faq';
        const faq = await postRequest(mainUrl);
        return await faq;
    }

    return {
        getAllFAQS
    }

};

export default useFaqRequest;
