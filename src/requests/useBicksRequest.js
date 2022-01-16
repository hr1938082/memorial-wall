import useRequest from "./useRequest"

const useBicksRequest = () => {
    const { getRequest } = useRequest();
    const getBricks = async () => {
        const Bricks = await getRequest('bricks');
        return await Bricks;
    }

    return {
        getBricks
    }
}

export default useBicksRequest


