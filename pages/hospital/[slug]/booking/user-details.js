import React, { useState } from 'react'
import { useRouter } from 'next/router'
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
import { showNotification } from '@mantine/notifications'
import { X } from 'tabler-icons-react'
import dayjs from 'dayjs'
import { addDoc, collection, doc } from 'firebase/firestore'

import { db } from '../../../../config/firebase'
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
  const router = useRouter()

  const currentHospital = useStore((state) => state.currentHospital)
  const slotBooking = useStore((state) => state.slotBooking)
  const setSlotBooking = useStore((state) => state.setSlotBooking)
  const setUserBookings = useStore((state) => state.setUserBookings)
  const currentUserId = useStore((state) => state.currentUser.uid)

  const [formData, setFormData] = useState(initialValue)

  const submitHandler = async (e) => {
    e.preventDefault()

    if (!currentUserId) {
      showNotification({
        title: 'Please login first',
        message:
          'Please login/signup in order to book slots using our application',
        color: 'red',
        icon: <X />,
        autoClose: 5000,
      })
    } else {
      setSlotBooking({ slotBooking: { ...slotBooking, details: formData } })

      // Upload data to firestore
      console.log({ currentUserId })

      const detailsRef = collection(db, `users/${currentUserId}/bookings`)
      const { details, slot } = slotBooking

      const newBookedSlot = {
        ...slot,
        ...details,
        photoURL: currentHospital.image[0] || '',
      }

      const docRef = await addDoc(detailsRef, newBookedSlot)
      console.log(`Document written with ID: `, docRef.id)

      setUserBookings({
        userBookings: {
          ...slot,
          ...details,
          photoURL: currentHospital.image[0] || '',
        },
      })

      // Successful
      alert(
        `Thank you, ${slotBooking.details.name}! Your slot is booked at ${
          currentHospital.title
        } on ${dayjs(slotBooking.slot.timeStamp).format('MMM D, YYYY h:mm A')}`
      )
      router.push('/profile')
    }
  }

  return (
    <Container>
      <TextXL>{currentHospital?.title}</TextXL>
      <TextL>{slotBooking?.doctor?.name}</TextL>
      <TextL>{slotBooking?.department}</TextL>
      <br />
      <h4>
        Slot: {dayjs(slotBooking.slot.timeStamp).format('MMM D, YYYY h:mm A')}
      </h4>
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
