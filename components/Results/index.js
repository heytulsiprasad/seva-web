import React from 'react'
import Image from 'next/image'
import { Text, Button, Box } from '@mantine/core'
import { Star } from 'tabler-icons-react'

import { ResultsContainer } from './style'
import Result from './Result'

const Results = ({ results }) => {
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
          currencyCode,
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
            currencyCode={currencyCode}
          />
        )
      )}
    </ResultsContainer>
  )
}

export default Results
