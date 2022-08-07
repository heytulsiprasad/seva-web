import Head from 'next/head'
import { useState, useEffect } from 'react'

import Hero from '../components/Home/Hero'
import Search from '../components/Home/Search'
import Results from '../components/Home/Results'
import SearchMetadata from '../components/Home/Search/Metadata'
import { results as data } from '../utils/data'

const Home = () => {
  const [searchBy, setSearchBy] = useState('all')
  const [searchText, setSearchText] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    let newResults = data

    // Search by category
    if (searchBy) {
      switch (searchBy) {
        case 'all':
          newResults = data
          break
        case 'hospital':
          newResults = data.filter((item) => item.type === 'hospital')
          break
        case 'doctor':
          newResults = data.filter((item) => item.type === 'doctor')
          break
        default:
          newResults = data
      }

      setResults((results) => [...newResults])
    }

    // Search by text
    if (searchText) {
      newResults = data.filter(
        (item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()) > 0
      )

      setResults((results) => [...newResults])
    }
  }, [searchBy, searchText])

  return (
    <>
      <Head>
        <title>Home - Seva</title>
      </Head>
      <Hero />
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        searchBy={searchBy}
        setSearchBy={setSearchBy}
      />
      <SearchMetadata searchBy={searchBy} setSearchBy={setSearchBy} />
      <Results results={results} />
    </>
  )
}

export default Home
