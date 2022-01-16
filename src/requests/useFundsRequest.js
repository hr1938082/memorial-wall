import useRequest from "./useRequest";

const useFundsRequest = () => {
    const { postRequest, getRequest } = useRequest();

    const createFund = async (data) => {
        const mainUrl = "fd_insert";
        const create = await postRequest(mainUrl, data);
        return await create;
    }

    const SearchFunds = async (data) => {
        const mainUrl = 'fund_search';
        const search = await postRequest(mainUrl, data);
        return await search;
    }

    const getAllFunds = async () => {
        const mainUrl = 'get_all_funds';
        const funds = await getRequest(mainUrl);
        return await funds;
    }

    return {
        createFund,
        SearchFunds,
        getAllFunds
    }
}

export default useFundsRequest
