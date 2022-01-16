import { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useUserData = () => {
    const location = useLocation();
    const history = useHistory();
    const [User, setUser] = useState({
        user: {},
        isAuthenticated: false
    })


    const SaveUserInfo = (data) => {
        localStorage.setItem('0ewfHULiPQ', JSON.stringify(data));
        setUser({ user: data, isAuthenticated: true, });
        history.push('/');
    }

    const ClearLocalStorage = () => {
        localStorage.clear();
        setUser({ user: {}, isAuthenticated: false });
        history.push('/login');
    }

    useLayoutEffect(() => {
        let user = localStorage.getItem('0ewfHULiPQ');
        if (user) {
            user = JSON.parse(user);
            setUser({ user: user, isAuthenticated: true })
            history.push(location.pathname)
        }
    }, []);


    return {
        User,
        SaveUserInfo,
        ClearLocalStorage
    }

}

export default useUserData
