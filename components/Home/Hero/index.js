import Image from 'next/image'
import { Button, Text, Box } from '@mantine/core'

// assets
import HeroPng from '../../../public/static/doctor-in-canvas.png'

// styles
import Hero from './style'

const HeroSection = () => {
  return (
    <Hero.Container>
      <Hero.Left>
        <Box mb={36}>
          <Hero.CustomBigText>
            Get Valuable Data that you need
          </Hero.CustomBigText>
        </Box>
        <Box mb={32}>
          <Hero.CustomSmallText>
            The data you need to protect your closed ones.
            <br />
            The one software you need.
          </Hero.CustomSmallText>
        </Box>
        <Hero.CustomButtonSection>
          <Button color="orange" radius="sm" size="md">
            <Text size="md" color="white">
              Book Now
            </Text>
          </Button>
          <Button variant="subtle" radius="sm" size="md">
            <Text size="md" color="orange">
              Explore
            </Text>
          </Button>
        </Hero.CustomButtonSection>
      </Hero.Left>
      <Hero.Right>
        <Image src={HeroPng} alt="Picture of the author" />
      </Hero.Right>
    </Hero.Container>
  )
}

export default HeroSection