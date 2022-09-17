import styled from 'styled-components'
import { Box } from '@mantine/core'
import { mobile, tablet } from '../../../Responsive'

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 2rem 2rem 2rem 7.5rem; */
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
`

const CustomBigText = styled.div`
width: 100%;
align-items: center;
  font-size: 50px;
  text-align: left;
  font-weight: 800;
  ${mobile({ fontSize: '30px', textAlign: 'center' })}
`

const CustomButtonSection = styled.div`
margin: 0;
${mobile({ margin: '0 auto' })}
`

const CustomSmallText = styled.div`
  font-size: 30px;
  text-align: left;
  /* font-weight: 800; */
  ${mobile({ fontSize: '20px', textAlign: 'center' })}
`

const Left = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 40%;
  /* width: 40%; */
  ${mobile({ flexBasis: '100%' })}
`

const Right = styled(Box)`
flex-basis: 40%;
${mobile({ flexBasis: '100%' })}
`

const Hero = {
  Container,
  Left, Right, CustomBigText, CustomSmallText, CustomButtonSection
}

export default Hero