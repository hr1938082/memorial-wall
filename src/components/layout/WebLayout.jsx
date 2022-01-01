import React from 'react'
import WebFooter from './footer/WebFooter'
import WebNavbar from './navbar/WebNavbar'
import { TempWallData } from '../../Context/TempWallIDataContext';
import useTempWallData from '../../Hooks/useTempWallData';

const WebLayout = (props) => {
    const tempWall = useTempWallData();
    return (
        <TempWallData.Provider value={tempWall}>
            <div className="web-layout">
                <WebNavbar />
                <section>
                    {props.children}
                </section>
                <WebFooter />
            </div>
        </TempWallData.Provider>
    )
}

export default WebLayout
