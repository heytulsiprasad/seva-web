import React from 'react'
import { Select, TextInput } from '@mantine/core'
import { Search, Filter } from 'tabler-icons-react'

// styles
import { SelectBox, InputBox, UserControls } from './style'

const SearchComponent = ({
  searchBy,
  setSearchBy,
  searchText,
  setSearchText,
}) => {
  return (
    <UserControls>
      <InputBox>
        <TextInput
          size="lg"
          radius="md"
          value={searchText}
          onChange={(event) => setSearchText(event.currentTarget.value)}
          icon={<Search size={24} strokeWidth={1} />}
          placeholder="Search for doctors or hospitals near by"
        />
      </InputBox>
      <SelectBox>
        <Select
          placeholder="Filter By"
          size="lg"
          radius="md"
          value={searchBy}
          onChange={setSearchBy}
          icon={<Filter size={24} strokeWidth={1} />}
          data={[
            { value: 'all', label: 'All' },
            { value: 'hospital', label: 'Hospitals' },
            { value: 'doctor', label: 'Doctors' },
          ]}
        />
      </SelectBox>
    </UserControls>
  )
}

export default SearchComponent
