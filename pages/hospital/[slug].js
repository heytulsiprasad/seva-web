import React from 'react'
import { useRouter } from 'next/router'
import StarRatings from 'react-star-ratings'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { Button, Text, Anchor } from '@mantine/core'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { hospitaltext } from '../../utils/data'
import HospitalImage from '../../public/static/hospitals/UPHC_Ghatikia.jpg'
import Hospital2 from '../../public/static/hospitals/Hospital2.jpg'
import Hospital3 from '../../public/static/hospitals/Hospital3.jpg'

const Hospital = () => {
  return (
    <>
      <Head>
        <title>Hospital Page - Seva</title>
      </Head>
      <div>

        <Carousel showArrows={true} autoPlay showThumbs={false}>
          <div>
            <Image src={HospitalImage} />
          </div>
          <div>
            <Image src={Hospital2} />
          </div>
          <div>
            <Image src={Hospital3} />
          </div>
        </Carousel>
        <div className="hospitalmain">
          <div style={{ fontWeight: '600', fontSize: 20 }}>ABC Hospital</div>

          <div style={{ fontWeight: '400', fontSize: 16 }}>
            ABC hospital is best in class
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
                500
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
                9:00 AM - 10:00 PM
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
                Current Queue
              </div>
              <div
                style={{ fontSize: 32, fontWeight: '700', color: '#3D7FFF' }}
              >
                24
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
                Gandhi Nagar, Delhi
              </div>
              <StarRatings
                rating={4}
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
              <Link href={'/'}>
                <Button color="orange" radius="sm" size="md">
                  <Anchor href="https://mantine.dev/" target="_blank">
                    Book Now
                  </Anchor>
                </Button>
              </Link>
              <Link href={'/'}>
                <Button variant="subtle" radius="sm" size="md">
                  <Text size="md" color="orange">
                    See Map
                  </Text>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hospital
