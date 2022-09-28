import { useEffect, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import StarRatings from 'react-star-ratings'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import {
  Box,
  Button,
  Text,
  Anchor,
  Card,
  Image as MantineImage,
  Badge,
  Group,
  Grid,
} from '@mantine/core'
import { getDocs, query, collection, where } from 'firebase/firestore'

import Hospital2 from '../../../public/static/hospitals/Hospital2.jpg'
import Hospital3 from '../../../public/static/hospitals/Hospital3.jpg'
import { results } from '../../../utils/data'
import { Body } from '../../../components/Hospital/style'
import HospitalImage from '../../../public/static/hospitals/UPHC_Ghatikia.jpg'
import { useStore } from '../../../config/store'
import { db } from '../../../config/firebase'

const Hospital = () => {
  const router = useRouter()
  const { slug } = router.query

  const [currentData, setCurrentData] = useState(null)

  const currentHospital = useStore((state) => state.currentHospital)
  const setCurrentHospital = useStore((state) => state.setCurrentHospital)
  const setSlotBooking = useStore((state) => state.setSlotBooking)

  const fetchDoctors = useCallback(async (hospitalId) => {
    const doctors = []

    // Fetch doctors
    const doctorsRef = collection(db, `hospital/${hospitalId}/doctors`)
    const doctorsQuery = query(doctorsRef)
    const querySnap = await getDocs(doctorsQuery)

    querySnap.forEach((doc2, idx) => {
      doctors.push({
        id: doc2.id,
        ...doc2.data(),
        available: doc2.data().available,
      })
    })

    return doctors
  }, [])

  const computeDepartments = (doctors) => {
    const departments = {}

    doctors.forEach((doctor) => {
      if (!departments[doctor.department]) {
        departments[doctor.department] = true
      }
    })

    return Object.keys(departments)
  }

  const fetchHospital = useCallback(
    async (slug) => {
      const hospitalRef = collection(db, 'hospital')
      const hospitalQuery = query(hospitalRef, where('slug', '==', slug))
      const querySnapshot = await getDocs(hospitalQuery)

      let hospital = {}

      querySnapshot.forEach(async (doc) => {
        if (doc.data()) {
          const doctors = await fetchDoctors(doc.id)
          const departments = computeDepartments(doctors)

          console.log(doctors)

          hospital = { id: doc.id, ...doc.data(), doctors, departments }
          console.log(hospital)

          setCurrentHospital({ currentHospital: hospital })
        }
      })

      return hospital
    },
    [fetchDoctors, setCurrentHospital]
  )

  useEffect(() => {
    if (slug) {
      fetchHospital(slug)
    }
  }, [slug, fetchHospital])

  return (
    <>
      <Head>
        <title>{currentHospital?.title || 'Hospital'} - Seva</title>
      </Head>
      <Body>
        <Box my={64}>
          <Carousel showArrows={true} autoPlay showThumbs={false}>
            {currentHospital?.image?.map((img, id) => (
              <Image
                key={id}
                src={img}
                alt={currentHospital?.title}
                width="800"
                height="500"
              />
            ))}
          </Carousel>
        </Box>
        <div className="hospitalmain">
          <div style={{ fontWeight: '600', fontSize: 20 }}>
            {currentHospital?.title}
          </div>

          <div style={{ fontWeight: '400', fontSize: 16 }}>
            {currentHospital?.subtitle}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 50,
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: 100,
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 10,
                marginRight: 10,
              }}
            >
              <div
                style={{ fontSize: 12, fontWeight: '600', color: '#8D8D8D' }}
              >
                Minimum Charge
              </div>
              <div
                style={{ fontSize: 16, fontWeight: '600', color: '#606060' }}
              >
                Rs. {currentHospital?.minCharge} /-
              </div>
            </div>
            <div
              style={{
                width: 100,
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 10,
                marginRight: 10,
              }}
            >
              <div
                style={{ fontSize: 12, fontWeight: '600', color: '#8D8D8D' }}
              >
                Timing
              </div>
              <div
                style={{ fontSize: 16, fontWeight: '600', color: '#606060' }}
              >
                {currentHospital?.timing}
              </div>
            </div>
            <div
              style={{
                width: 100,
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 10,
                marginRight: 10,
              }}
            >
              <div
                style={{ fontSize: 12, fontWeight: '600', color: '#8D8D8D' }}
              >
                Daily Patients
              </div>
              <div
                style={{ fontSize: 32, fontWeight: '700', color: '#3D7FFF' }}
              >
                {currentHospital?.dailyPatients}
              </div>
            </div>
            <div
              style={{
                width: 200,
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 10,
                marginRight: 10,
              }}
            >
              <div
                style={{ fontSize: 12, fontWeight: '600', color: '#8D8D8D' }}
              >
                Location
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#606060',
                  marginBottom: 20,
                }}
              >
                {currentHospital?.location}
              </div>
              <StarRatings
                rating={currentHospital?.stars}
                starRatedColor="#F3EA00"
                starDimension="20px"
                numberOfStars={5}
                name="rating"
              />
            </div>
            <div
              style={{
                width: 100,
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 10,
                marginRight: 10,
                justifyContent: 'space-between',
                height: 100,
              }}
            >
              <Button color="orange" radius="sm">
                <Link href={`/hospital/${slug}/booking/department`}>
                  Book Now
                </Link>
              </Button>
              <Button variant="light" radius="sm">
                <Link href="">See Map</Link>
              </Button>
            </div>
          </div>
          <div>
            <h1 style={{ marginBottom: '1rem' }}>List of all doctors</h1>
            <Grid>
              {currentHospital.doctors &&
                currentHospital.doctors.map((doctor) => (
                  <Grid.Col key={doctor.id} span={4}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                      <Card.Section>
                        <MantineImage
                          src={
                            doctor?.image || 'https://i.imgur.com/uGXgJOY.jpeg'
                          }
                          height={200}
                          alt={`Photo of ${doctor.name}`}
                        />
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{doctor.name}</Text>
                      </Group>

                      <Text size="sm" color="dimmed">
                        {doctor.delegation}
                      </Text>

                      <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="md"
                        radius="md"
                      >
                        Book now
                      </Button>
                    </Card>
                  </Grid.Col>
                ))}
            </Grid>
          </div>
        </div>
      </Body>
    </>
  )
}

export default Hospital
