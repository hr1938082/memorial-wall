import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import useCityRequest from '../requests/useCityRequest';
import useFundsRequest from '../requests/useFundsRequest';
import useStateRequest from '../requests/useStateRequest';

const useFund = () => {
    const history = useHistory();
    const { getCity } = useCityRequest();
    const { createFund } = useFundsRequest();
    const { getState } = useStateRequest();
    const defaultValidation = { error: false, helperText: ' ' }
    const [funValues, setfunValues] = useState({
        first_name: '',
        last_name: '',
        nick_name: '',
        state: 0,
        city: 0,
        born: '',
        passed: '',
        location: '',
        donation: 10,
    });
    const [SelectValues, setSelectValues] = useState({
        state: [],
        city: [],
        isLoading: true
    });
    const [validation, setvalidation] = useState({
        first_name: defaultValidation,
        last_name: defaultValidation,
        nick_name: defaultValidation,
        state: defaultValidation,
        city: defaultValidation,
        born: defaultValidation,
        passed: defaultValidation,
        location: defaultValidation,
        donation: defaultValidation,
    })
    const [SubmitLoading, setSubmitLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const State = async () => {
        const state = await getState();
        if (state) {
            setSelectValues({ state: state, city: [], isLoading: false })
        }
    }

    useEffect(() => {
        State();
    }, [])

    const City = async (stateId) => {
        const city = await getCity(stateId);
        if (city) {
            setSelectValues((prev) => {
                return {
                    ...prev,
                    city: city
                }
            })
        }
    }
    const handleChangeText = (e) => {
        const { name, value } = e.target;


        setfunValues((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
        if (name === 'state') {
            City(value);
        }
        if (name === 'donation') {
            if (isNaN(parseFloat(value))) {

                setvalidation((prev) => {
                    return {
                        ...prev,
                        donation: { error: true, helperText: 'Only Numbers are allowed' }
                    }
                })
            }
            else {
                setvalidation((prev) => {
                    return {
                        ...prev,
                        donation: { error: false, helperText: '' }
                    }
                })

            }
        }

    }
    const validatorFx = () => {
        let error = false;
        let first_name = defaultValidation;
        let last_name = defaultValidation;
        let nick_name = defaultValidation;
        let state = defaultValidation;
        let city = defaultValidation
        let born = defaultValidation;
        let passed = defaultValidation;
        let location = defaultValidation;
        let donation = defaultValidation;
        if (!(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u).test(funValues.first_name)) {
            first_name = { error: true, helperText: "Please write a valid First Name" };
            error = true;
        }
        if (!(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u).test(funValues.last_name)) {
            last_name = { error: true, helperText: "Please write a valid Last Name" };
            error = true;
        }
        if (!(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u).test(funValues.nick_name)) {
            nick_name = { error: true, helperText: "Please write a valid Nick Name" };
            error = true;
        }
        if (funValues.state === 0) {
            state = { error: true, helperText: "Select any State" };
            error = true;
        }
        if (funValues.city === 0) {
            city = { error: true, helperText: "Select any City" };
            error = true;
        }

        if (funValues.born === '') {
            born = { error: true, helperText: "Select Birth Date" };
            error = true
        }

        if (funValues.passed === '') {
            passed = { error: true, helperText: "Select Passed Date" };
            error = true;
        }
        if (funValues.location === '') {
            location = { error: true, helperText: "Provide Location" }
            error = true;
        }
        if (isNaN(parseFloat(funValues.donation))) {
            donation = { error: true, helperText: "Only Numbers are allowed" }
        } else if (funValues.donation < 10) {
            donation = { error: true, helperText: "Minimum Amount is 10" }
            error = true;
        }
        setvalidation({
            first_name: first_name,
            last_name: last_name,
            nick_name: nick_name,
            state: state,
            city: city,
            born: born,
            passed: passed,
            location: location,
            donation: donation
        });

        return error;
    }
    const handleSubmit = async () => {
        if (!validatorFx() && validation.donation.error !== true) {
            setSubmitLoading(true);
            const create = await createFund(funValues);
            if (create) {
                setSubmitLoading(false);
                setOpen(true)
            }
        }
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const handleClose = () => setOpen(false);
    return {
        funValues,
        handleChangeText,
        SelectValues,
        validation,
        handleSubmit,
        SubmitLoading,
        style,
        open,
        handleClose
    }
}

export default useFund
