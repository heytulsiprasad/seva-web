import styled from 'styled-components'
import { Box } from '@mantine/core'

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 7.5rem;
`

const Left = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 40%;
`

const Right = styled(Box)``

const Hero = { Container, Left, Right }

export default Hero
