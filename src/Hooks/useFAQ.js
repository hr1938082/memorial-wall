import { useEffect, useState } from "react";
import useFaqRequest from "../requests/useFaqRequest";

const useFAQ = () => {

    const { getAllFAQS } = useFaqRequest();

    const [FAQValues, setFAQValues] = useState({
        values: [],
        isLoading: true,
    });

    const getFaqs = async () => {

        const faq = await getAllFAQS();
        if (faq) {
            setFAQValues({
                values: faq,
                isLoading: false
            })
        }

    }

    useEffect(() => {
        getFaqs();
    }, []);


    const handleToggleActive = (e) => {
        const target = e.currentTarget;
        target.classList.contains('active') ? target.classList.remove('active') : target.classList.add('active');
    }
    return {
        handleToggleActive,
        FAQValues
    }
};

export default useFAQ;
