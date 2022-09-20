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
  TextInput,
  NumberInput,
  Radio,
} from '@mantine/core'
import { Calendar } from '@mantine/dates'
import dayjs from 'dayjs'
import { useForm } from '@mantine/form'

import { useStore } from '../../../config/store'
import { results } from '../../../utils/data'
import { mobile } from '../../../Responsive'
const Container = styled.main`
  /* padding: 2rem 7rem; */
  width: 90%;
  margin: 0 auto;
`

const Department = styled.div`
  padding: 1rem;
  background: #e8f8ff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: normal;
  font-size: 1.15rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 400px;
  ${mobile({ width: '360px' })};
  margin-bottom: 10px;

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
  flex-wrap: wrap;

  h4 {
    margin: 1rem 0;
    text-align: center;
  }
  width: 90%;
  margin: 0 auto;
`

const CustomButton = styled.button`
  width: 30%;
  ${mobile({ width: '100%' })};
  margin: 0 auto;
  background-color: #3d7fff;
  height: 50px;
  padding: 4px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  margin-top: 20px;
`

const CustomCalender = styled.div`
  width: 30%;
  margin: 0 auto;
  ${mobile({ width: '100%' })}
`

const CustomTime = styled.div`
  width: 70%;
  margin: 0 auto;
  ${mobile({ width: '100%' })}
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

const CustomHospitalName = styled.div`
  font-size: 50px;
  font-weight: '800';
  ${mobile({ fontSize: '40px' })};
  text-align: center;
`

const CustomDepartment = styled.div`
  font-size: 30px;
  font-weight: '700';
  ${mobile({ fontSize: '20px' })};
  text-align: center;
  margin-bottom: 20px;
`

const CustomDoctors = styled.div`
  /* width: 100%; */
  ${mobile({ width: '100%' })}
  margin: 0 auto;
  margin-bottom: 20px;
`

const Booking = () => {
  const router = useRouter()
  const query = router.query
  const [date, setDate] = useState(null)
  const [time, setTime] = useState('')

  const setRecentBooking = useStore((state) => state.setRecentBooking)

  const hospitalData = useStore((state) => state.hospitalData)
  const setHospitalData = useStore((state) => state.setHospitalData)
  const setSelectedHospital = useStore((state) => state.setSelectedHospital)

  // Run on initial page load
  useEffect(() => {
    setSelectedHospital({ selectedHospital: query.slug })

    const result = results.find((result) => result.slug === query.slug)
    setHospitalData({ hospitalData: result })
  })

  const form = useForm({
    initialValues: {
      name: '',
      guardian: '',
      age: 0,
      address: '',
      gender: '',
    },
  })

  console.log({ query })

  if (query.time && query.date) {
    return (
      <Container>
        <CustomHospitalName>{hospitalData?.title}</CustomHospitalName>
        <CustomDepartment>{query.doctor}</CustomDepartment>
        <CustomDepartment>{query.department}</CustomDepartment>
        <br />
        <h4>
          Slot: {dayjs(query.date).format('DD MMM YYYY')} at {query.time}
        </h4>
        <div style={{ marginTop: '1rem' }}>
          <form
            onSubmit={form.onSubmit((values) => {
              setRecentBooking({
                recentBooking: { ...values, time: query.time },
              })
              router.push('/profile')
            })}
          >
            <TextInput
              label="Name"
              placeholder="Name"
              required
              {...form.getInputProps('name')}
            />
            <TextInput
              mt="sm"
              label="Guardian"
              placeholder="S/W/H/D of"
              required
              {...form.getInputProps('guardian')}
            />
            <TextInput
              mt="sm"
              label="Address"
              placeholder="Address"
              required
              {...form.getInputProps('address')}
            />
            <Radio.Group
              label="Gender"
              required
              {...form.getInputProps('gender')}
            >
              <Radio value="male" label="Male" />
              <Radio value="female" label="Female" />
              <Radio value="others" label="Others" />
            </Radio.Group>
            <NumberInput
              mt="sm"
              label="Age"
              placeholder="Age"
              min={0}
              max={99}
              required
              {...form.getInputProps('age')}
            />
            <CustomButton type="submit">Submit</CustomButton>
          </form>
        </div>
      </Container>
    )
  } else if (query.doctor && query.department) {
    console.log({ date: dayjs(date).format('DD MMM, YYYY'), time })

    const doctor = hospitalData?.doctors.find(
      (doctor) => doctor.name === query.doctor
    )

    // const timings = doctor.timing
    // const allTimes = []

    // timings.forEach((timing) => {})

    return (
      <Container>
        <CustomHospitalName>{hospitalData?.title}</CustomHospitalName>
        <CustomDepartment>{query.doctor}</CustomDepartment>
        <CustomDepartment>{query.department}</CustomDepartment>
        <BookContainer>
          <CustomCalender>
            <h4>Choose Date</h4>
            <Center>
              <Calendar
                value={date}
                onChange={setDate}
                minDate={dayjs(new Date()).toDate()}
              />
            </Center>
          </CustomCalender>
          <CustomTime>
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
                onClick={() => setTime('9:30 am')}
              >
                9:30 am
              </Slot>
            </SimpleGrid>
          </CustomTime>
        </BookContainer>
        <Center sx={{ marginTop: '4rem' }}>
          <CustomButton disabled={!date && !time}>
            <Link
              href={`/hospital/${hospitalData.slug}/booking?department=${
                query.department
              }&doctor=${encodeURIComponent(
                doctor.name
              )}&time=${encodeURIComponent(time)}&date=${encodeURIComponent(
                date
              )}`}
            >
              {`Book an Appointment for ${dayjs(date).format(
                'DD MMM, YYYY'
              )} at ${time}`}
            </Link>
          </CustomButton>
        </Center>
      </Container>
    )
  } else if (query.department) {
    return (
      <Container>
        <CustomHospitalName>{hospitalData?.title}</CustomHospitalName>
        <CustomDepartment>Doctors Available</CustomDepartment>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '90%',
            margin: '0 auto',
            alignItems: 'center',
          }}
        >
          {hospitalData?.doctors?.map((doctor) => (
            <CustomDoctors key={doctor.id}>
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
            </CustomDoctors>
          ))}
        </div>
      </Container>
    )
  } else {
    return (
      <Container>
        <CustomHospitalName>{hospitalData?.title}</CustomHospitalName>
        <CustomDepartment>Departments</CustomDepartment>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            margin: '0 auto',
            alignItems: 'center',
            width: '90%',
          }}
        >
          {hospitalData?.departments?.map((department, id) => (
            <div key={id}>
              <Link
                href={`/hospital/${hospitalData.slug}/booking?department=${department}`}
              >
                <Department>
                  <h4>{department}</h4>
                </Department>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    )
  }

  return null
}

export default Booking
