import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import InfoCards from '../components/InfoCards'
import Search from '../components/Search'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Seva</title>
      </Head>
      <Hero />
      <Search />
    </>
  )
}
