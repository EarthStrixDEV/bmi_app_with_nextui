import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/Layout'
import BmiDesc from './components/BmiDesc'
import { useState } from 'react'
import InputUser from './components/InputUser'
import { Input } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [weight ,setWeight] = useState()
  const [height ,setHeight] = useState()
  const [calculate ,setCalculate] = useState(0.0)

  return (
    <>
      <Head>
        <title>iBMI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <InputUser 
          isReadOnly
          weight={weight}
          setWeight={setWeight}
          height={height}
          setHeight={setHeight}
          setCalculate ={setCalculate}
          calculate={calculate}
        />
        <BmiDesc calculate={calculate} />
      </Layout>
    </>
  )
}
