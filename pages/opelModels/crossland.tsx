import type { NextPage } from 'next'
import Head from 'next/head'
import { Menu } from '../../src/component/Menu'
import { Footer } from '../../src/component/Footer'
import BarMenu from '../../src/component/BarMenu'
import { BannerCrossland} from '../../src/component/carsModels/Crossland/BannerCrossland'
import { PurchaseMethods} from '../../src/component/carsModels/Zafira/PurchaseMethods'
import { TextCrossland} from '../../src/component/carsModels/Crossland/TextCrossland'
import { Modal } from '../../src/component/Modal'
import { useState } from 'react'

const CrosslandPage: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
    return (
      <>
        <Head>
          <title>OPEL APKOHT Crossland</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <Menu />
          <BarMenu />
          <BannerCrossland setShowModal={setShowModal} />
          <PurchaseMethods setShowModal={setShowModal} />
          <TextCrossland  />
          <Footer  />
          {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }
     </>
    )
}




export default  CrosslandPage