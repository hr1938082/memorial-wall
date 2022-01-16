import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import useSearchResultRequest from "../requests/useSearchResultRequest";

const useSearchResult = () => {
    const { getSearchResultsByData } = useSearchResultRequest();
    const location = useLocation();
    const [Results, setResults] = useState({
        value: [],
        isLoading: true,
    });
    const getResults = async () => {
        const collapse = document.getElementById('AdPanel');
        collapse.classList.remove('show');
        setResults({ value: [], isLoading: true });
        const result = await getSearchResultsByData(location.state);
        if (result) {
            setResults({ value: result, isLoading: false })
        }

    }
    useEffect(() => {
        console.log(location.state);
        getResults();
    }, [location])

    return {
        Results
    }

}

export default useSearchResult
