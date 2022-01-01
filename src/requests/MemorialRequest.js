import { postRequest } from "./Request";

const CreateMemorial = async (data) => {
    const mainUrl = "user_bord";
    const create = await postRequest(mainUrl, data);
    return await create;
}

export {
    CreateMemorial
}