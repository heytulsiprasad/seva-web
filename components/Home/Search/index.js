import React from 'react'
import { Select, TextInput, Button, Text } from '@mantine/core'
import { Search, Filter } from 'tabler-icons-react'

// styles
import { SelectBox, InputBox, UserControls } from './style'

const SearchComponent = ({
  searchText,
  setSearchText,
  updateResults,
  refreshResults,
}) => {
  const onSubmitHandler = (e) => {
    e.preventDefault()
    updateResults()
  }

  return (
    <UserControls as="form" onSubmit={onSubmitHandler}>
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
        <Button type="submit" color="orange" radius="sm" size="lg" mr="md">
          <Text size="md" color="white">
            Submit
          </Text>
        </Button>
        <Button
          type="button"
          variant="outline"
          radius="sm"
          size="lg"
          onClick={refreshResults}
        >
          <Text size="md" color="dark">
            Clear
          </Text>
        </Button>
      </SelectBox>
    </UserControls>
  )
}

export default SearchComponent
