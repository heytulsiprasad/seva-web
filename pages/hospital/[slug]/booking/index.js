import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Booking = () => {
  const router = useRouter()

  // This route doesn't need to be displayed
  // Redirect to home page
  useEffect(() => {
    router.push(`/`)
  })

  return <></>
}

export default Booking
