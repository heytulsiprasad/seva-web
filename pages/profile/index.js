import React from 'react'
import styled from 'styled-components'
import { currentBooking, previousBookings } from '../../utils/data'
import { SimpleGrid } from '@mantine/core'

import { useStore } from '../../config/store'

// styled components
const ProfileContainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`

const SectionHeading = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #262f41;
`
const CardMain = styled.div`
  padding: 16px;
  gap: 36px;

  width: 422px;
  height: 190px;

  background: #ffffff;
  box-shadow: 3px 4px 32px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  display: flex;
  flex-direction: row;
`

const CardImage = styled.img`
  width: 158px;
  height: 158px;

  background: #e8f8ff;
  border-radius: 12px;
`

const CardImage2 = styled.img`
  width: 127px;
  height: 127px;

  background: #e8f8ff;
  border-radius: 12px;
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const HospitalName = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;

  color: #000000;
`

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Button = styled.button`
  align-items: flex-start;
  padding: 8px 16px;
  gap: 8px;

  width: 182px;
  height: 35px;

  background: #ff792e;
  border-radius: 4px;
  border: none;
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;
`

const CardMain2 = styled.div`
  padding: 16px;

  width: 464px;
  height: 159px;

  background: #ffffff;
  box-shadow: 3px 4px 32px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export default function Profile() {
  console.log(currentBooking.image)

  const recentBooking = useStore((state) => state.recentBooking)

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
                9:00 AM - 9:20 AM
              </div>
            </div>
          </RowDiv>
          <Button>Get location on phone</Button>
        </CardInfo>
      </CardMain>

      <SectionHeading style={{ marginTop: 70 }}>Visit History</SectionHeading>

      <SimpleGrid cols={2}>
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
      </SimpleGrid>
    </ProfileContainer>
  )
}
