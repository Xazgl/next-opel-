import type { NextPage } from 'next'
import Head from 'next/head'
import { Menu } from '../../src/component/Menu'
import { Footer } from '../../src/component/Footer'
import BarMenu from '../../src/component/BarMenu'
import { BannerVivaro} from '../../src/component/carsModels/Vivaro/BannerVivaro'
import { PurchaseMethods} from '../../src/component/carsModels/Zafira/PurchaseMethods'
import { TextVivaro} from '../../src/component/carsModels/Vivaro/TextVivaro'
import { Modal } from '../../src/component/Modal'
import { useState } from 'react'

const VivaroPage: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
    return (
      <>
        <Head>
          <title>OPEL APKOHT Vivaro</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <Menu />
          <BarMenu />
          <BannerVivaro setShowModal={setShowModal} />
          <PurchaseMethods setShowModal={setShowModal} />
          <TextVivaro />
          <Footer  />
          {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }
     </>
    )
}




export default  VivaroPage