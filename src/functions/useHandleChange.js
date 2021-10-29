const useHandleChange = () => {
    const handleTextFeilds = (e, State) => {
        const { name, value } = e.target;
        State((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleCheckBox = (e, State, value) => {
        const name = e.target.name;
        const val = value;
        State((prev) => {
            return {
                ...prev,
                [name]: !val
            }
        })
    }
    const handlePassIcon = (val, state) => {
        state(!val);
    }
    return {
        handleTextFeilds,
        handleCheckBox,
        handlePassIcon
    }
}

export default useHandleChange
