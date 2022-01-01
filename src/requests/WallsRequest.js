import { getRequest, postRequest } from "./Request";

const getAllWalls = async () => {
    const AllWalls = await getRequest('select_woll');
    return await AllWalls
}

const getWallById = async (id) => {
    const getWall = await postRequest('get_wall', { id: id });
    return await getWall;
}

export {
    getAllWalls,
    getWallById
}