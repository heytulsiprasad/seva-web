import React from 'react'
import { Input, Badge, Select } from '@mantine/core'
import { Search, Filter } from 'tabler-icons-react'

// styles
import { SearchBox, SelectBox, InputBox } from './style'

const SearchComponent = () => {
  return (
    <SearchBox>
      <InputBox>
        <Input
          size="lg"
          radius="md"
          icon={<Search size={24} strokeWidth={1} />}
          placeholder="Search for doctors or hospitals near by"
        />
      </InputBox>
      <SelectBox>
        <Select
          placeholder="Filter By"
          size="lg"
          radius="md"
          icon={<Filter size={24} strokeWidth={1} />}
          data={[
            { value: 'all', label: 'All' },
            { value: 'hospital', label: 'Hospitals' },
            { value: 'doctor', label: 'Doctors' },
            { value: 'pricing', label: 'Pricing' },
          ]}
        />
      </SelectBox>
    </SearchBox>
  )
}

export default SearchComponent
