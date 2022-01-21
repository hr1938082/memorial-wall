import { useEffect, useState } from 'react'
import useMemorialRequest from '../requests/useMemorialRequest';
import { useParams } from 'react-router-dom';
import useGiftRequest from '../requests/useGiftRequest';

const useWallHomePage = () => {
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const { getMemorial } = useMemorialRequest();
    const { getAllGifts } = useGiftRequest();
    const [wallHomePage, setwallHomePage] = useState({
        value: {},
        isLoading: true,
    });
    const [Gifts, setGifts] = useState({
        values: [],
        isLoading: true
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
    const handleOpen = async () => {
        setOpen(true);
        const gift = await getAllGifts();
        if (gift) {
            setGifts({ values: gift, isLoading: false });
        }
    };
    const handleClose = () => {
        setOpen(false);
        setGifts({ values: [], isLoading: true });
    };

    return {
        wallHomePage,
        open,
        handleOpen,
        handleClose,
        Gifts
    }
}

export default useWallHomePage
