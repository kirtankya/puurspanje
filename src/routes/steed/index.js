import React from 'react'
import Header from '../../common/header'
import Steed1 from '../../componets/steed/steed'
import Image from '../../componets/steed/image'
import Wonen from '../../componets/steed/wonen'
import Murcia from '../../componets/steed/Murcia'
import Geen from '../../componets/home/geen'
import Footer from '../../common/footer'


export default function Steed() {
  return (
    <div>
      <Header />
      <Steed1 />
      <Image />
      <Wonen />
      <Murcia />
      <Geen />
      <Footer/>
    </div>
  )
}
