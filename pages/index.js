import Head from 'next/head'
import Image from 'next/image'
import InfoCards from '../components/InfoCards'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Seva</title>
      </Head>
      Hello
      <InfoCards />
    </div>
  )
}
