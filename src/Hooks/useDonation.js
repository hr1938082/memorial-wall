import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDonationRequest from '../requests/useDonationRequest';



const useDonation = () => {
    const { id } = useParams();
    const { getDonationById, createDonation } = useDonationRequest();
    const [donation, setdonation] = useState({
        values: [],
        isLoading: true,
    });
    const [Donate, setDonate] = useState(10);
    const [Validation, setValidation] = useState({
        error: false,
        helperText: ""
    })
    const getDonation = async () => {
        setdonation({ values: [], isLoading: true });
        const donation = await getDonationById({ fund_id: id });
        if (donation) {
            setdonation({ values: donation, isLoading: false });
        }
    }

    useEffect(() => {
        getDonation();
    }, []);

    const handleChangeDonate = (e) => {
        const value = e.target.value;
        setDonate(value);
    }

    const onSubmit = async () => {
        const fundId = id;
        const donation = Donate;
        if (donation < 10) {
            setValidation({ error: true, helperText: "Minimun Amount is 10" });
        }
        else {

            setValidation({ error: false, helperText: "" });
            const create = await createDonation(fundId, donation);
            if (create) {
                getDonation();
            }
        }
    }

    return {
        donation,
        Donate,
        handleChangeDonate,
        onSubmit,
        Validation,
    }
}

export default useDonation
