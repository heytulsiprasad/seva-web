import React from 'react'
import Image from 'next/image'
import { Text, Button, Box } from '@mantine/core'
import { Star } from 'tabler-icons-react'

import { results } from './../../utils/data'
import Card, { ResultsContainer } from './style'

const Results = () => {
  return (
    <ResultsContainer>
      {results.map(
        ({
          id,
          title,
          subtitle,
          image,
          minCharge,
          timing,
          location,
          stars,
          available,
          currency,
        }) => (
          <Result
            key={id}
            title={title}
            subtitle={subtitle}
            image={image}
            minCharge={minCharge}
            timing={timing}
            location={location}
            stars={stars}
            available={available}
            currency={currency}
          />
        )
      )}
    </ResultsContainer>
  )
}

const Result = ({
  title,
  subtitle,
  image,
  minCharge,
  timing,
  location,
  stars,
  available,
  currency,
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
          <Box sx={{ flexBasis: '50%' }}>
            <Card.InfoHeading>Minimum Charge</Card.InfoHeading>
            <Card.InfoLabel>{minCharge}</Card.InfoLabel>
          </Box>
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
        <div>
          <Button color="orange" disabled={!available}>
            Book Now
          </Button>
        </div>
      </Card.SubmitContainer>
    </Card.RightBox>
  </Card.Container>
)

export default Results
