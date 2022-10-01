import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { SimpleGrid } from '@mantine/core'
import * as R from 'rambda'

import { useStore } from '../config/store'
import { currentBooking, previousBookings } from '../utils/data'
import {
  ProfileContainer,
  SectionHeading,
  CardMain,
  CardImage,
  CardImage2,
  CardInfo,
  HospitalName,
  RowDiv,
  Button,
  CardMain2,
} from '../styles/js/Profile.styles'

export default function Profile() {
  const router = useRouter()
  const currentUser = useStore((state) => state.currentUser)

  const isAuthenticated = !R.isEmpty(currentUser)

  useEffect(() => {
    console.log({ isAuthenticated })

    // Allow if authenticated
    if (!isAuthenticated) {
      router.push('/')
    } else {
      // Fetch data from firestore
    }
  }, [isAuthenticated, router])

  return (
    <ProfileContainer>
      <SectionHeading>Upcoming bookings</SectionHeading>

      <CardMain>
        <CardImage src={currentBooking.image} />
        <CardInfo>
          <HospitalName>UPHC Ghatikia</HospitalName>
          <RowDiv>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{ fontSize: 12, fontWeight: '600', color: '#8D8D8D' }}
              >
                Queue no.
              </div>
              <div
                style={{ fontSize: 32, fontWeight: '700', color: '#3D7FFF' }}
              >
                25
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', width: 75 }}
            >
              <div
                style={{ fontSize: 12, fontWeight: '600', color: '#8D8D8D' }}
              >
                Timing slot
              </div>
              <div
                style={{ fontSize: 16, fontWeight: '700', color: '#606060' }}
              >
                9:00 AM
              </div>
            </div>
          </RowDiv>
          <Button>Get location on phone</Button>
        </CardInfo>
      </CardMain>

      <SectionHeading style={{ marginTop: 70 }}>Visit History</SectionHeading>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {previousBookings.map((booking, key) => {
          return (
            <CardMain2 key={key}>
              <CardImage2 src={currentBooking.image} />
              <CardInfo>
                <HospitalName>{booking.hospitalName}</HospitalName>
                <RowDiv>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: '#8D8D8D',
                      }}
                    >
                      Queue no.
                    </div>
                    <div
                      style={{
                        fontSize: 32,
                        fontWeight: '700',
                        color: '#3D7FFF',
                      }}
                    >
                      {booking.queueNum}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: 75,
                      flexWrap: 'wrap',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: '#8D8D8D',
                      }}
                    >
                      Timing slot
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: '700',
                        color: '#606060',
                      }}
                    >
                      {booking.timingSlot}
                    </div>
                  </div>
                </RowDiv>
              </CardInfo>
            </CardMain2>
          )
        })}
      </div>
    </ProfileContainer>
  )
}
