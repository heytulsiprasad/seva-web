import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Center,
  SimpleGrid,
} from '@mantine/core'
import { Calendar } from '@mantine/dates'
import dayjs from 'dayjs'

import { useStore } from '../../../config/store'
import { results } from '../../../utils/data'

const Container = styled.main`
  padding: 2rem 7rem;
`

const Department = styled.div`
  padding: 1rem;
  background: #e8f8ff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: normal;
  font-size: 1.15rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  :hover {
    box-shadow: none;
  }
`

const Doctor = styled.div`
  padding: 1rem;
  background: #e8f8ff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: normal;
  font-size: 1.15rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  :hover {
    box-shadow: none;
  }
`

const BookContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  h4 {
    margin: 1rem 0;
    text-align: center;
  }

  div {
    flex-basis: 50%;
  }
`

const Slot = styled.div`
  border: 2px solid #3d7fff;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#3d7fff' : 'fff')};
`

const Booking = () => {
  const router = useRouter()
  const query = router.query
  const [date, setDate] = useState(null)
  const [time, setTime] = useState('')

  const hospitalData = useStore((state) => state.hospitalData)
  const setHospitalData = useStore((state) => state.setHospitalData)
  const setSelectedHospital = useStore((state) => state.setSelectedHospital)

  // Run on initial page load
  useEffect(() => {
    setSelectedHospital({ selectedHospital: query.slug })

    const result = results.find((result) => result.slug === query.slug)
    setHospitalData({ hospitalData: result })
  })

  if (query.doctor && query.department) {
    console.log({ date: dayjs(date).format('DD MMM, YYYY'), time })

    const doctor = hospitalData?.doctors.find(
      (doctor) => doctor.name === query.doctor
    )

    // const timings = doctor.timing
    // const allTimes = []

    // timings.forEach((timing) => {})

    return (
      <Container>
        <h1>{hospitalData?.title}</h1>
        <h2>{query.doctor}</h2>
        <h4>{query.department}</h4>
        <BookContainer>
          <div className="date-container">
            <h4>Choose Date</h4>
            <Center>
              <Calendar
                value={date}
                onChange={setDate}
                minDate={dayjs(new Date()).toDate()}
              />
            </Center>
          </div>
          <div className="time-container">
            <h4>Choose Time</h4>
            <SimpleGrid cols={2}>
              <Slot
                active={time === '8:00 am'}
                onClick={() => setTime('8:00 am')}
              >
                8:00 am
              </Slot>
              <Slot
                active={time === '8:15 am'}
                onClick={() => setTime('8:15 am')}
              >
                8:15 am
              </Slot>
              <Slot
                active={time === '8:30 am'}
                onClick={() => setTime('8:30 am')}
              >
                8:30 am
              </Slot>
              <Slot
                active={time === '8:45 am'}
                onClick={() => setTime('8:45 am')}
              >
                8:45 am
              </Slot>
              <Slot
                active={time === '9:00 am'}
                onClick={() => setTime('9:00 am')}
              >
                9:00 am
              </Slot>
              <Slot
                active={time === '9:15 am'}
                onClick={() => setTime('9:15 am')}
              >
                9:15 am
              </Slot>
              <Slot
                active={time === '9:30 am'}
                onClick={() => setTime('9:30   am')}
              >
                9:30 am
              </Slot>
            </SimpleGrid>
          </div>
        </BookContainer>
        <Center sx={{ marginTop: '4rem' }}>
          <Button size="xl" disabled={!date && !time}>
            <Link href="/profile">
              {`Book an Appointment for ${dayjs(date).format(
                'DD MMM, YYYY'
              )} at ${time}`}
            </Link>
          </Button>
        </Center>
      </Container>
    )
  } else if (query.department) {
    return (
      <Container>
        <h1>{hospitalData?.title}</h1>
        <h2>Doctors Available</h2>
        <Grid gutter={24} sx={{ marginTop: '2rem' }}>
          {hospitalData?.doctors?.map((doctor) => (
            <Grid.Col key={doctor.id} span={4}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src="https://i.imgur.com/zHNYRjB.jpeg"
                    height={160}
                    alt={`Photo of ${doctor.name}`}
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{doctor.name}</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  {doctor.delegation}
                </Text>
                <Link
                  href={`/hospital/${hospitalData.slug}/booking?department=${
                    query.department
                  }&doctor=${encodeURIComponent(doctor.name)}`}
                >
                  <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    disabled={!doctor.available}
                  >
                    Book now
                  </Button>
                </Link>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    )
  } else {
    return (
      <Container>
        <h1>{hospitalData?.title}</h1>
        <h2>Departments</h2>
        <Grid gutter={24} sx={{ marginTop: '2rem' }}>
          {hospitalData?.departments?.map((department, id) => (
            <Grid.Col span={6} key={id}>
              <Link
                href={`/hospital/${hospitalData.slug}/booking?department=${department}`}
              >
                <Department>
                  <h4>{department}</h4>
                </Department>
              </Link>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    )
  }

  return null
}

export default Booking
