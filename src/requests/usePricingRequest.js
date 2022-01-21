import useRequest from './useRequest';

const usePricingRequest = () => {
    const { postRequest } = useRequest();
    const getAllPricing = async () => {
        const mainUrl = 'get_all_price';
        const pricing = await postRequest(mainUrl);
        return await pricing;
    }

    return {
        getAllPricing
    }
};

export default usePricingRequest;
