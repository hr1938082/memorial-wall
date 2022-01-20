import { useEffect, useState } from 'react'

const useTempWallData = () => {
    const [tempWallData, settempWallData] = useState(
        {
            WallTempImageId: 0,
            BricksId: 0,
            status: false
        }
    );
    const TempWallUpdate = (data) => {
        console.log(data, 'tempppppppppp');
        localStorage.setItem('WallTempImageData', JSON.stringify(data))
        settempWallData(
            {
                WallTempImageId: data.WallTempImageId,
                BricksId: data.BricksId,
                status: true,
            }
        )
    }
    useEffect(() => {
        let TempWallData = localStorage.getItem('WallTempImageData');
        if (TempWallData) {
            TempWallData = JSON.parse(TempWallData);
            settempWallData({
                WallTempImageId: TempWallData.WallTempImageId,
                BricksId: TempWallData.BricksId,
                status: true,
            });
        }

    }, [])
    return {
        tempWallData,
        TempWallUpdate
    }
}

export default useTempWallData
