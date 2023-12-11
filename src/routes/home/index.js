import React from 'react'
import Header from '../../common/header'
import Herobanner from '../../componets/home/herobanner'
import Puurspanje from '../../componets/home/puurspanje'
import Spanje from '../../componets/home/spanje'
import Best from '../../componets/home/best'
import Waroom from '../../componets/home/waroom'
import Consta from '../../componets/home/consta'
import Kris from '../../componets/home/kris'
import Makelar from '../../componets/home/makelar'
import Team from '../../componets/home/team'
import Geen from '../../componets/home/geen'
import Footer from '../../common/footer'

export default function Home() {
  return (
    <div>
        <Header/>
        <Herobanner/>
        <Puurspanje/>
        <Spanje/>
        <Best/>
        <Waroom/>
        <Consta/>
        <Kris/>
        <Makelar/>
        <Team/>
        <Geen/>
        <Footer/>
    </div>
  )
}
