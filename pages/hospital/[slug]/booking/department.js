import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@mantine/core'
import { useRouter } from 'next/router'

import { useStore } from '../../../../config/store'
import {
  Container,
  TextXL,
  TextL,
  Departments,
  DepartmentItem,
} from '../../../../styles/js/Booking.styles'

const Department = () => {
  const router = useRouter()
  const currentHospital = useStore((state) => state.currentHospital)
  const slotBooking = useStore((state) => state.slotBooking)
  const setSlotBooking = useStore((state) => state.setSlotBooking)

  const submitDepartment = (dept) => {
    console.log('Booked Department')

    setSlotBooking({
      slotBooking: { department: dept, hospitalId: currentHospital.id },
    })

    router.push(`/hospital/${currentHospital.slug}/booking/doctor`)
  }

  return (
    <Container>
      <TextXL>{currentHospital?.title || 'No hospital found'}</TextXL>
      <TextL>Departments</TextL>
      <Departments>
        {currentHospital.departments &&
          currentHospital.departments.map((item, id) => (
            <DepartmentItem key={id} onClick={() => submitDepartment(item)}>
              <h4>{item}</h4>
            </DepartmentItem>
          ))}
      </Departments>
    </Container>
  )
}

export default Department
