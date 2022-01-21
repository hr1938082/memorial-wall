import { useEffect, useState } from 'react';
import usePricingRequest from '../requests/usePricingRequest';
const usePricing = () => {
    const { getAllPricing } = usePricingRequest();
    const [PricingValues, setPricingValues] = useState({
        values: [],
        isLoading: true
    });

    const getPricing = async () => {
        const pricing = await getAllPricing();
        if (pricing) {
            setPricingValues({ values: pricing, isLoading: false });
        }
    }

    useEffect(() => {
        getPricing();
    }, []);


    return {
        PricingValues
    }
};

export default usePricing;
