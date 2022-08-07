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
          <Text size="lg" weight="700" sx={{ fontSize: 64, lineHeight: 1.3 }}>
            Get Valuable Data that you need
          </Text>
        </Box>
        <Box mb={32}>
          <Text size="md" weight="500">
            The data you need to protect your closed ones.
            <br />
            The one software you need.
          </Text>
        </Box>
        <Box>
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
        </Box>
      </Hero.Left>
      <Hero.Right>
        <Image src={HeroPng} alt="Picture of the author" />
      </Hero.Right>
    </Hero.Container>
  )
}

export default HeroSection
