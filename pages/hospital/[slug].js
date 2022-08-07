import React from 'react'
import { useRouter } from 'next/router'
import StarRatings from 'react-star-ratings'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {
  Button,
  Text,
  Anchor,
  Card,
  Image as MantineImage,
  Badge,
  Group,
  Grid,
} from '@mantine/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Hospital2 from '../../public/static/hospitals/Hospital2.jpg'
import Hospital3 from '../../public/static/hospitals/Hospital3.jpg'

import { results } from '../../utils/data'
import { Body } from '../../components/Hospital/style'
import { hospitaltext } from '../../utils/data'
import HospitalImage from '../../public/static/hospitals/UPHC_Ghatikia.jpg'

const Hospital = () => {
  const router = useRouter()
  const { slug } = router.query

  const hospitalData = results.find((result) => result.slug === slug)

  console.log(hospitalData)

  return (
    <>
      <Head>
        <title>Hospital Page - Seva</title>
      </Head>
      <Body>
        <Carousel showArrows={true} autoPlay showThumbs={false}>
          <div>
            <Image src={HospitalImage} alt="Image 1" />
          </div>
          <div>
            <Image src={Hospital2} alt="Image 2" />
          </div>
          <div>
            <Image src={Hospital3} alt="Image 3" />
          </div>
        </Carousel>
        <div className="hospitalmain">
          <div style={{ fontWeight: '600', fontSize: 20 }}>
            {hospitalData.title}
          </div>

          <div style={{ fontWeight: '400', fontSize: 16 }}>
            {hospitalData.subtitle}
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
                {hospitalData.minCharge}
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
                {hospitalData.timing}
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
                {hospitalData.dailyPatients}
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
                {hospitalData.location}
              </div>
              <StarRatings
                rating={hospitalData.stars}
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
                <Link href="/">Book Now</Link>
              </Button>
              <Button variant="light" radius="sm">
                <Link href="">See Map</Link>
              </Button>
            </div>
          </div>
          <div>
            <h1 style={{ marginBottom: '1rem' }}>List of all doctors</h1>
            <Grid>
              {hospitalData.doctors.map((doctor) => (
                <Grid.Col key={doctor.id} span={4}>
                  <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                      <MantineImage
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

                    <Button
                      variant="light"
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                    >
                      <Link href="">Book now</Link>
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
