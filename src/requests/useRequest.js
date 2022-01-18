import { useContext } from "react";
import { UserContext } from '../Context/UserContext'

const useRequest = () => {
    const { User } = useContext(UserContext);
    const baseUrl = 'http://104.248.174.124:5000/';
    const requestValidator = (data) => {
        if (data) {
            if (data.status === true) {
                if (Object.keys(data).length > 1) {
                    return data.data;
                }
                else {
                    return data.status;
                }
            }
            else {
                return data;
            }
        }
        else {
            console.log('Request Failed');
        }
    }
    const getRequest = async (uri) => {
        const req = await fetch(`${baseUrl}${uri}`, {
            headers: {
                "Authorization": User.user.token,
                "Accept": "application/json",
            },
        });
        const res = await req.json(req);
        return requestValidator(await res);
    }

    const postRequest = async (uri, body) => {
        const req = await fetch(baseUrl + uri, {
            headers: {
                "Authorization": User.user.token,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            method: 'POST',
            body: JSON.stringify(body)
        })
        const res = req.json();
        return requestValidator(await res);
    }

    return {
        getRequest,
        postRequest
    }
}

export default useRequest
