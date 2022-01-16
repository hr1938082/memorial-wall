import useRequest from "./useRequest"

const useCityRequest = () => {

    const { getRequest } = useRequest();

    const getCity = async (state) => {
        const uri = `city?state=${state}`
        const city = await getRequest(uri);
        return await city;
    }

    return {
        getCity
    }
}

export default useCityRequest

