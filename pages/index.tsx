import type { GetServerSideProps, NextPage } from 'next'
import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Menu } from '../src/component/Menu'
import { Login } from '../src/component/Login'
import { MainBanner } from '../src/component/MainBanner'
import { Video } from '../src/component/Video'
import { OurAdvantages  } from '../src/component/OurAdvantages'
import { Model } from '../src/component/Model'
import  Gallery from '../src/component/Gallery'
import { Footer } from '../src/component/Footer'
import { TradeIn } from '../src/component/TradeIn'
import { SalesComponent } from '../src/component/Sales'
import  BottomMainManner  from '../src/component/BottomMainManner'
import { Modal } from '../src/component/Modal'
import { TradeinModal } from '../src/component/ModalTwo'
import { useState } from 'react'
import BarMenu from '../src/component/BarMenu'
import db, { Sales } from '../prisma'
import { WeDo } from '../src/component/WeDo'
import {ServiceIndexPage} from '../src/component/ServiceIndexPage'
import {HowItWorks} from '../src/component/HowItWorks'
import {Statistic} from '../src/component/Statistic'
import { ModelRow} from '../src/component/ModelRow'
import { Map} from '../src/component/Map'
import {Config} from '../src/component/Config'
import {Config2} from '../src/component/Config2'



const Home: NextPage<{ sales: Sales[] }> = ({ sales }) => {
  const [showModal, setShowModal] = useState(false)
  const [showTradeInModal, setShowTradeInModal] = useState(false)
  return (
    <>
      <Head>
        <title>OPEL АРКОНТ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <BarMenu />
      <MainBanner />
      {/* <Video /> */}
      <WeDo />
      {/* <Config setShowModal={setShowModal}/> */}
      <Config2 setShowModal={setShowModal}/>
      <ServiceIndexPage setShowModal={setShowModal} />
      {/* <BottomMainManner /> */}
      <OurAdvantages   setShowModal={setShowModal}/>
      <SalesComponent sales={sales} setShowModal={setShowModal} />
      <ModelRow  setShowModal={setShowModal}/>
      <HowItWorks />
      <Statistic />
      <TradeIn setShowTradeInModal={setShowTradeInModal} />
      <Gallery />
      <Map />
      <Footer />
      {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }

      {
        showTradeInModal && <TradeinModal showTradeInModal={showTradeInModal} setShowTradeInModal={setShowTradeInModal} />
      }
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sales = await db.sales.findMany({
    where: {
      active: true
    }
  })
  return {
    props: {
      sales:JSON.parse(JSON.stringify(sales)),
    }
  }
}