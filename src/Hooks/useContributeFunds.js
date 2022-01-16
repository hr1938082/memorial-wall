import { useState, useEffect } from 'react';
import useFundsRequest from '../requests/useFundsRequest';

const useContributeFunds = () => {
    const { SearchFunds, getAllFunds } = useFundsRequest();
    const [Search, setSearch] = useState('');
    const [SearchValue, setSearchValue] = useState({
        values: [],
        isLoading: true
    });

    const getFunds = async () => {
        const funds = await getAllFunds();
        if (funds) {
            setSearchValue({ values: funds, isLoading: false });
        }
    }

    useEffect(() => {
        getFunds();
    }, [])

    const handleChangeSearch = async (e) => {
        const value = e.target.value
        setSearch(value);
        setSearchValue({ values: [], isLoading: true });
        const Search = await SearchFunds({ search: value });
        if (Search) {
            setSearchValue({ values: Search, isLoading: false });
        }
    };

    return {
        Search,
        handleChangeSearch,
        SearchValue
    }
}

export default useContributeFunds
