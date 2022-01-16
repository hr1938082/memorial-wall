import useRequest from "./useRequest";

const useUserRequest = () => {
    const { postRequest } = useRequest();
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

    return {
        Signup,
        Login
    }

}

export default useUserRequest

