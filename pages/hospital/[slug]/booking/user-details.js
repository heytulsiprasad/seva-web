import React, { useState } from 'react'
import {
  Box,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Center,
  SimpleGrid,
  TextInput,
  NumberInput,
  Radio,
} from '@mantine/core'
import dayjs from 'dayjs'

import { useStore } from '../../../../config/store'
import {
  Container,
  Doctor,
  BookContainer,
  CustomButton,
  CustomCalender,
  CustomTime,
  Slot,
  TextXL,
  TextL,
  CustomDoctors,
} from '../../../../styles/js/Booking.styles.js'

const initialValue = {
  name: '',
  guardian: '',
  age: 0,
  address: '',
  gender: '',
}

const UserDetails = () => {
  const currentHospital = useStore((state) => state.currentHospital)
  const slotBooking = useStore((state) => state.slotBooking)
  const setSlotBooking = useStore((state) => state.setSlotBooking)

  const [formData, setFormData] = useState(initialValue)

  const submitHandler = (e) => {
    e.preventDefault()

    setSlotBooking({ slotBooking: { ...slotBooking, details: formData } })

    // TODO: Submit to firestore
  }

  return (
    <Container>
      <TextXL>{currentHospital?.title}</TextXL>
      <TextL>{slotBooking?.doctor?.name}</TextL>
      <TextL>{slotBooking?.department}</TextL>
      <br />
      <h4>Slot: {dayjs(slotBooking.timeStamp).format('MMM D, YYYY h:mm A')}</h4>
      <Box my={24}>
        <form onSubmit={submitHandler}>
          <TextInput
            label="Name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((c) => ({ ...c, name: e.target.value }))
            }
            required
          />
          <TextInput
            mt="sm"
            label="Guardian"
            placeholder="S/W/H/D of"
            required
            value={formData.guardian}
            onChange={(e) =>
              setFormData((c) => ({ ...c, guardian: e.target.value }))
            }
          />
          <TextInput
            mt="sm"
            label="Address"
            placeholder="Address"
            required
            value={formData.address}
            onChange={(e) =>
              setFormData((c) => ({ ...c, address: e.target.value }))
            }
          />
          <Radio.Group
            label="Gender"
            required
            value={formData.gender}
            onChange={(val) => setFormData((c) => ({ ...c, gender: val }))}
          >
            <Radio value="male" label="Male" />
            <Radio value="female" label="Female" />
            <Radio value="others" label="Others" />
          </Radio.Group>
          <NumberInput
            mt="sm"
            label="Age"
            placeholder="Age"
            min={0}
            max={99}
            required
            value={formData.age}
            onChange={(val) => setFormData((c) => ({ ...c, age: val }))}
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </Box>
    </Container>
  )
}

export default UserDetails
