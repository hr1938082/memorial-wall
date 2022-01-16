import { useEffect, useState } from 'react';
import useStateRequest from '../requests/useStateRequest';
import useCityRequest from '../requests/useCityRequest'
import { useHistory } from 'react-router-dom';

const useAdvanceSearch = () => {
    const history = useHistory();
    const { getState } = useStateRequest();
    const { getCity } = useCityRequest();
    const [SearchValues, setSearchValues] = useState({
        id: "",
        memorial_for: "",
        first_name: "",
        last_name: "",
        nick_name: "",
        city: "",
        state: "",
        birthday: "",
        wall: ""
    });
    const [selectValues, setselectValues] = useState({
        state: [],
        city: [],
    })

    const State = async () => {
        const state = await getState();
        if (state) {
            setselectValues({ state: state, city: [] });
        }
    }
    useEffect(() => {
        State()
    }, [])

    const handleChangeState = async (e) => {
        const city = await getCity(e.target.value);
        if (city) {
            setselectValues((prev) => {
                return {
                    ...prev,
                    city: city
                }
            })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSearchValues((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const onSubmit = () => {
        history.push({
            pathname: "/search",
            state: SearchValues
        })
    }



    return {
        SearchValues,
        handleChange,
        selectValues,
        handleChangeState,
        onSubmit
    }
}

export default useAdvanceSearch
