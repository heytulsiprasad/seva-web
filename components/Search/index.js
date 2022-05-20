import React from 'react'
import { Input, Badge } from '@mantine/core'
import { BrandTwitter } from 'tabler-icons-react'

const Search = () => {
  return (
    <Input
      icon={<BrandTwitter size={16} />}
      placeholder="Your social media"
      rightSectionWidth={70}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSection={
        <Badge color="blue" variant="filled">
          Bhubaneswar
        </Badge>
      }
    />
  )
}

export default Search
