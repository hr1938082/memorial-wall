import { postRequest } from "./Request";


const Signup = async (data) => {
    const mainUrl = 'signup'
    const res = await postRequest(mainUrl, data);
    return await res;
}

const Login = async (data) => {
    const mainUrl = 'login';
    const res = await postRequest(mainUrl, data);
    return await res;
}

export {
    Signup,
    Login
}