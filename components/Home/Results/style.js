import styled from 'styled-components'
import { Box, Text } from '@mantine/core'
import { mobile } from '../../../Responsive'
export const ResultsContainer = styled(Box)`
  /* padding: 4rem 8rem; */
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(34.5625rem, 1fr));
  grid-gap: 2rem;
`

const Container = styled(Box)`
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 3px 4px 32px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  ${mobile({ width: '360px' })}
`

const CustomHeader = styled.div`
width: 50%;
${mobile({ width: '100%' })};
margin-bottom: 10px;
`

const LeftBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
  margin-right: 2rem;
`

const RightBox = styled(Box)`
  flex-basis: 50%;
  width: 15.625rem;
  height: 100%;
  display: grid;
  width: 100%;
  grid-template-colums: repeat(3fr);
  grid-gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`

const HeadingContainer = styled(Box)``

const Heading = styled(Text)`
  font-size: 1.25rem;
  font-weight: 600;
`

const SubHead = styled(Text)`
  color: #b1b1b1;
  font-size: 12px;
  font-weight: 600;
`

const MetaDataContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`

const InfoBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`

const SubmitContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`

const InfoHeading = styled(Text)`
  color: #8d8d8d;
  font-size: 12px;
  font-weight: 600;
`

const InfoLabel = styled(Text)`
  color: #606060;
  font-size: 16px;
  font-weight: 600;
`

const RatingBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Rating = styled(Box)`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  margin-left: 6px;
`

const Card = {
  Container,
  LeftBox,
  RightBox,
  HeadingContainer,
  Heading,
  MetaDataContainer,
  SubmitContainer,
  SubHead,
  InfoBox,
  InfoHeading,
  InfoLabel,
  RatingBox,
  Rating,
  CustomHeader
}

export default Card