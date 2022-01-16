import useRequest from "./useRequest";

const useTempWallRequest = () => {

    const { postRequest } = useRequest();
    const getTempWall = async (id, userId) => {
        const mainUrl = 'get_temp_img';
        const body = {
            id: id,
            user_id: userId,
        }
        const req = await postRequest(mainUrl, body);
        return await req;
    }

    return { getTempWall };
}

export default useTempWallRequest



