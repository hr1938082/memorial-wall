import { getRequest } from "./Request"

const getBricks = async () => {
    const Bricks = await getRequest('bricks');
    return await Bricks;
}

export {
    getBricks
}
