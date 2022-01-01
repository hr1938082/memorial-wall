import { postRequest } from "./Request";


const getTempWall = async (id, userId) => {
    const mainUrl = 'get_temp_img';
    const body = {
        id: id,
        user_id: 1,
    }
    const req = await postRequest(mainUrl, body);
    return await req;
}

export { getTempWall };

