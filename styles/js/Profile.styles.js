import styled from 'styled-components'

import { mobile } from '../../Responsive'

export const ProfileContainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const SectionHeading = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #262f41;
`
export const CardMain = styled.div`
  padding: 16px;
  gap: 36px;

  width: 422px;
  ${mobile({ width: '90%' })};
  height: 190px;

  background: #ffffff;
  box-shadow: 3px 4px 32px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  display: flex;
  flex-direction: row;
`

export const CardImage = styled.img`
  width: 158px;
  ${mobile({ width: '40%' })};
  height: 158px;

  background: #e8f8ff;
  border-radius: 12px;
`

export const CardImage2 = styled.img`
  width: 127px;
  height: 127px;

  background: #e8f8ff;
  border-radius: 12px;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const HospitalName = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;

  color: #000000;
`

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Button = styled.button`
  align-items: flex-start;
  padding: 8px 16px;
  gap: 8px;

  width: 182px;
  height: 35px;

  background: #ff792e;
  border-radius: 4px;
  border: none;
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;
`

export const CardMain2 = styled.div`
  padding: 16px;

  width: 464px;
  ${mobile({ width: '90%' })};
  height: 159px;

  background: #ffffff;
  box-shadow: 3px 4px 32px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
