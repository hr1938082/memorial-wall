import { getRequest } from "./Request"

const getCity = async (state) => {
    const uri = `city?state=${state}`
    const city = await getRequest(uri);
    return await city;
}

export {
    getCity
}
