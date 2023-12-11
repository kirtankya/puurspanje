import React from 'react'
import Header from '../../common/header'
import Regiio from '../../componets/beste/regiio'
import Van from '../../componets/beste/van'
import Droom from '../../componets/beste/droom'
import Start from '../../componets/beste/start'
import Albar from '../../componets/beste/albar'
import Geen from '../../componets/home/geen'
import Footer from '../../common/footer'

export default function Beste() {
  return (
    <div>
        <Header/>
        <Regiio/>
        <Van/>
        <Droom/>
        <Start/>
        <Albar/>
        <Geen/>
        <Footer/>
    </div>
  )
}
