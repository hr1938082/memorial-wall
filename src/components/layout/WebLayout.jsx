import React from 'react'
import WebFooter from './footer/WebFooter'
import WebNavbar from './navbar/WebNavbar'

const WebLayout = (props) => {
    return (
        <div className="web-layout">
            <WebNavbar />
            <section>
                {props.children}
            </section>
            <WebFooter />
        </div>
    )
}

export default WebLayout
