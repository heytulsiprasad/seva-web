import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import Hero from '../components/Hero'
import InfoCards from '../components/InfoCards'
import Search from '../components/Search'
import SearchMetadata from '../components/Search/Metadata'
import styles from '../styles/Home.module.css'

function Home() {
  const [searchBy, setSearchBy] = useState(null)
  const [results, setResults] = useState(null)

  return (
    <>
      <Head>
        <title>Home - Seva</title>
      </Head>
      <Hero />
      <Search searchBy={searchBy} setSearchBy={setSearchBy} />
      <SearchMetadata searchBy={searchBy} setSearchBy={setSearchBy} />
    </>
  )
}

export default Home
