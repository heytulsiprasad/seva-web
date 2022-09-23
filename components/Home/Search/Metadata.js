import { Text } from '@mantine/core'

// styles
import { SearchMetadata } from './style'

const Metadata = () => {
  return (
    <SearchMetadata>
      <Text align="center" color="dark" size="sm">
        Showing results for
      </Text>
      <Text align="center" color="dark" weight="500" size="sm">
        &ldquo; Hospitals near you &rdquo;
      </Text>
    </SearchMetadata>
  )
}

export default Metadata
