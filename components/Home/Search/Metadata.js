import { Text } from '@mantine/core'

// styles
import { SearchMetadata } from './style'

const Metadata = ({ searchBy, setSearchBy }) => {
  return (
    <SearchMetadata>
      <Text align="center" color="dark" size="sm">
        Showing results for
      </Text>
      <Text align="center" color="dark" weight="500" size="sm">
        &ldquo;
        {searchBy === 'all'
          ? 'Both hospitals and doctors near you'
          : searchBy === 'hospital'
          ? 'Hospitals near you'
          : searchBy === 'doctor'
          ? 'Doctors near you'
          : false}
        &rdquo;
      </Text>
    </SearchMetadata>
  )
}

export default Metadata
