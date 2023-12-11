import React from 'react'
import Regio1 from '../../componets/regio/regio1'
import Header from '../../common/header'
import Image from '../../componets/regio/images'
import Meer from '../../componets/regio/meer'
import Geen from '../../componets/home/geen'
import Footer from '../../common/footer'
export default function Regio() {
    return (
        <div>
            <Header />
            <Regio1 />
            <Image/>
            <Meer/>
           <Geen/>
           <Footer/>
        </div>
    )
}
