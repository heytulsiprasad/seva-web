import Head from 'next/head'
import { useState, useEffect } from 'react'
import {
  onSnapshot,
  collection,
  where,
  query,
  getDocs,
} from 'firebase/firestore'

import { useStore } from './../config/store'
import { db } from './../config/firebase'
import Hero from '../components/Home/Hero'
import Search from '../components/Home/Search'
import Results from '../components/Home/Results'
import SearchMetadata from '../components/Home/Search/Metadata'
import { results as data } from '../utils/data'

const Home = () => {
  const [searchText, setSearchText] = useState('')

  // TODO: Remove this state and use global state only
  // Anti pattern: Store same data in local and global state
  const [results, setResults] = useState([])

  const setAllHospitals = useStore((state) => state.setAllHospitals)

  // Automatically syncs from backend if there's new hospitals
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'hospital'),
      (querySnapshot) => {
        const allHospitals = []

        querySnapshot.forEach((doc) => {
          if (doc.data()) {
            allHospitals.push({ id: doc.id, ...doc.data() })
          }
        })

        // Store in local and global state
        setResults([...allHospitals])
        setAllHospitals({ allHospitals })
      }
    )

    return () => unsubscribe()
  }, [setAllHospitals])

  // Runs on press submit
  const updateResults = async () => {
    const hospitalRef = collection(db, 'hospital')
    const q = query(
      hospitalRef,
      where('title', '>=', searchText),
      where('title', '<=', searchText + '\uf8ff')
    )

    onSnapshot(q, (snapshot) => {
      let data = []
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
      })
      // console.log(data)
      setResults(data)
    })
  }

  // Get latest hospital results on clear

  // TODO: Remove auto sync code, because after refresh
  // useEffect might not be working
  const refreshResults = async () => {
    const q = query(collection(db, 'hospital'), where('title', '!=', null))
    const querySnapshot = await getDocs(q)

    const newResults = []

    if (searchText) {
      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          newResults.push({ id: doc.id, ...doc.data() })
        }
      })

      setResults(newResults)
      setSearchText('')
    }
  }

  return (
    <>
      <Head>
        <title>Home - Seva</title>
      </Head>
      <Hero />
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        updateResults={updateResults}
        refreshResults={refreshResults}
      />
      <Results results={results} />
    </>
  )
}

export default Home
