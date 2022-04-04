import type { NextPage } from 'next'
import Head from 'next/head'
import { Menu } from '../src/component/Menu'
import  BarMenu  from '../src/component/BarMenu'
import   Slyder  from '../src/component/Slyder'
import { Service } from '../src/component/Service'
import { Footer } from '../src/component/Footer'
import { Container } from '@mui/material';
import { Modal } from '../src/component/Modal'
import { useState } from 'react'


const ServicePage: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [showTradeInModal, setShowTradeInModal] = useState(false)
    return (
      <>
        <Head>
          <title>OPEL APKOHT SERVICE</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <Menu />
          <BarMenu />
          <Slyder />
          <Service  setShowModal={setShowModal} />
          <Footer />
          {
          showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
          }
     </>
    )
}
export default ServicePage