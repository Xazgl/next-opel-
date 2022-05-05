import type { NextPage } from 'next'
import Head from 'next/head'
import { Menu } from '../../src/component/Menu'
import { Footer } from '../../src/component/Footer'
import BarMenu from '../../src/component/BarMenu'
import { BannerGrandland} from '../../src/component/carsModels/Grandland/BannerGrandland'
import { PurchaseMethods} from '../../src/component/carsModels/Zafira/PurchaseMethods'
import { TextGrandland} from '../../src/component/carsModels/Grandland/TextGrandland'
import { Modal } from '../../src/component/Modal'
import { useState } from 'react'

const GrandlandPage: NextPage = () => {
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
          <BannerGrandland setShowModal={setShowModal} />
          <PurchaseMethods setShowModal={setShowModal} />
          <TextGrandland />
          <Footer  />
          {
        showModal && <Modal showModal={showModal} setShowModal={setShowModal} />
      }
     </>
    )
}




export default  GrandlandPage