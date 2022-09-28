import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
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
import { Calendar } from '@mantine/dates'
import dayjs from 'dayjs'
import { useForm } from '@mantine/form'
import * as R from 'rambda'

import { useStore } from '../../../../config/store'
import {
  Container,
  Doctor,
  BookContainer,
  CustomButton,
  CustomCalender,
  CustomTime,
  Slot,
  CustomHospitalName,
  CustomDepartment,
  CustomDoctors,
} from '../../../../styles/js/Booking.styles.js'

// Pages
import Department from './department'

const Booking = () => {
  const router = useRouter()
  // const query = router.query
  // const [date, setDate] = useState(null)
  // const [time, setTime] = useState('')

  const slotBooking = useStore((state) => state.slotBooking)
  const setSlotBooking = useStore((state) => state.setSlotBooking)
  // const currentHospital = useStore((state) => state.currentHospital)
  // const setCurrentHospital = useStore((state) => state.setCurrentHospital)

  // const form = useForm({
  //   initialValues: {
  //     name: '',
  //     guardian: '',
  //     age: 0,
  //     address: '',
  //     gender: '',
  //   },
  // })

  /**
   * slotBooking: {
   *   department: "",
   *   doctor: "",
   *   dateTime: "",
   *   details: {}
   * }
   */

  // Fill form
  // TODO: Probably should go to another route: ie /booking/fill-form etc
  // if (query.time && query.date) {
  //   return (
  //     <Container>
  //       <CustomHospitalName>{currentHospital?.title}</CustomHospitalName>
  //       <CustomDepartment>{query.doctor}</CustomDepartment>
  //       <CustomDepartment>{query.department}</CustomDepartment>
  //       <br />
  //       <h4>
  //         Slot: {dayjs(query.date).format('DD MMM YYYY')} at {query.time}
  //       </h4>
  //       <div style={{ marginTop: '1rem' }}>
  //         <form
  //           onSubmit={form.onSubmit((values) => {
  //             setUserBookings({
  //               recentBooking: { ...values, time: query.time },
  //             })
  //             router.push('/profile')
  //           })}
  //         >
  //           <TextInput
  //             label="Name"
  //             placeholder="Name"
  //             required
  //             {...form.getInputProps('name')}
  //           />
  //           <TextInput
  //             mt="sm"
  //             label="Guardian"
  //             placeholder="S/W/H/D of"
  //             required
  //             {...form.getInputProps('guardian')}
  //           />
  //           <TextInput
  //             mt="sm"
  //             label="Address"
  //             placeholder="Address"
  //             required
  //             {...form.getInputProps('address')}
  //           />
  //           <Radio.Group
  //             label="Gender"
  //             required
  //             {...form.getInputProps('gender')}
  //           >
  //             <Radio value="male" label="Male" />
  //             <Radio value="female" label="Female" />
  //             <Radio value="others" label="Others" />
  //           </Radio.Group>
  //           <NumberInput
  //             mt="sm"
  //             label="Age"
  //             placeholder="Age"
  //             min={0}
  //             max={99}
  //             required
  //             {...form.getInputProps('age')}
  //           />
  //           <CustomButton type="submit">Submit</CustomButton>
  //         </form>
  //       </div>
  //     </Container>
  //   )

  return <h1>Hello World</h1>
}

export default Booking
