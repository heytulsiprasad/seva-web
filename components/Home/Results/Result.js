import React from 'react'
import Image from 'next/image'
import { Text, Button, Box, Anchor } from '@mantine/core'
import { Star } from 'tabler-icons-react'
import { showNotification } from '@mantine/notifications'

import Card from './style'
import Link from 'next/link'

const Result = ({
  title,
  slug,
  subtitle,
  image,
  minCharge,
  timing,
  location,
  stars,
  available,
}) => (
  <Card.Container>
    <Card.LeftBox>
      <Image
        style={{ borderRadius: 12 }}
        src={image}
        alt={title}
        height="300"
        width="225"
      />
    </Card.LeftBox>
    <Card.RightBox>
      <Card.HeadingContainer>
        <Card.Heading>{title}</Card.Heading>
        {subtitle && <Card.SubHead>{subtitle}</Card.SubHead>}
      </Card.HeadingContainer>
      <Card.MetaDataContainer>
        <Card.InfoBox>
          <Card.CustomHeader>
            <Card.InfoHeading>Minimum Charge</Card.InfoHeading>
            <Card.InfoLabel>Rs. {minCharge} /-</Card.InfoLabel>
          </Card.CustomHeader>
          <Box>
            <Card.InfoHeading>Timing</Card.InfoHeading>
            <Card.InfoLabel>{timing}</Card.InfoLabel>
          </Box>
        </Card.InfoBox>
        <Box mt={18}>
          <Card.InfoHeading>Location</Card.InfoHeading>
          <Card.InfoLabel>{location}</Card.InfoLabel>
        </Box>
      </Card.MetaDataContainer>
      <Card.SubmitContainer>
        <Card.RatingBox>
          <Star size={16} strokeWidth={2} color={'#F3EA00'} fill={'#F3EA00'} />
          <Card.Rating>{stars}</Card.Rating>
        </Card.RatingBox>
        <Button color="orange" disabled={!available}>
          <Link href={`/hospital/${slug}`}>Book Now</Link>
        </Button>
      </Card.SubmitContainer>
    </Card.RightBox>
  </Card.Container>
)

export default Result
