import styled from 'styled-components'
import { mobile } from '../../Responsive'

export const Container = styled.main`
  /* padding: 2rem 7rem; */
  width: 90%;
  margin: 0 auto;
`

export const DepartmentItem = styled.button`
  padding: 1rem;
  background: #e8f8ff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: normal;
  font-size: 1.15rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 400px;
  ${mobile({ width: '360px' })};
  margin-bottom: 10px;
  border: none;

  :hover {
    box-shadow: none;
  }
`

export const Departments = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  width: 90%;
`

export const Doctor = styled.div`
  padding: 1rem;
  background: #e8f8ff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: normal;
  font-size: 1.15rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  :hover {
    box-shadow: none;
  }
`

export const BookContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  h4 {
    margin: 1rem 0;
    text-align: center;
  }
  width: 90%;
  margin: 0 auto;
`

export const CustomButton = styled.button`
  width: 30%;
  ${mobile({ width: '100%' })};
  margin: 0 auto;
  background-color: #3d7fff;
  height: 50px;
  color: #fff;
  padding: 4px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const CustomCalender = styled.div`
  width: 50%;
  margin: 0 auto;
  ${mobile({ width: '100%' })}
`

export const CustomTime = styled.div`
  width: 50%;
  margin: 0 auto;
  ${mobile({ width: '100%' })}
`

export const SlotBox = styled.div`
  border: 2px solid #3d7fff;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#3d7fff' : 'fff')};
`

export const TextXL = styled.div`
  font-size: 50px;
  font-weight: '800';
  ${mobile({ fontSize: '40px' })};
  text-align: center;
`

export const TextL = styled.div`
  font-size: 30px;
  font-weight: '700';
  ${mobile({ fontSize: '20px' })};
  text-align: center;
  margin-bottom: 20px;
`

export const CustomDoctors = styled.div`
  ${mobile({ width: '100%' })}
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 15rem;
`

export const DoctorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 4rem auto;
  align-items: center;
`
