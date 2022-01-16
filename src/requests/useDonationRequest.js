import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

import useRequest from "./useRequest";

const useDonationRequest = () => {
    const { User } = useContext(UserContext);
    const { postRequest } = useRequest();

    const getDonationById = async (data) => {
        const mainUrl = 'get_donation';
        const donation = await postRequest(mainUrl, data);
        return await donation;
    }

    const createDonation = async (fundId, donation) => {
        const data = {
            fund_id: fundId,
            user_id: User.user.id,
            donation: donation
        }
        const mainUrl = 'do_insert';
        const create = await postRequest(mainUrl, data);
        return await create;
    }

    return {
        getDonationById,
        createDonation,
    }
}

export default useDonationRequest
