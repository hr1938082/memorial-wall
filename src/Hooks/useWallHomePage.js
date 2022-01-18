import { useEffect, useState } from 'react'
import useMemorialRequest from '../requests/useMemorialRequest';
import { useParams } from 'react-router-dom';

const useWallHomePage = () => {
    const { id } = useParams();
    const { getMemorial } = useMemorialRequest();
    const [wallHomePage, setwallHomePage] = useState({
        value: {},
        isLoading: true,
    });
    const GetMemorial = async () => {
        const memorial = await getMemorial(id);
        if (memorial) {
            setwallHomePage({ value: memorial[0], isLoading: false });
        }
    }
    useEffect(() => {
        GetMemorial();
    }, []);

    return {
        wallHomePage
    }
}

export default useWallHomePage
