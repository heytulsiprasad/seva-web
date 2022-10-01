import React from 'react'
import Link from 'next/link'
import { Button, Card, Group, Image, Text } from '@mantine/core'
import dayjs from 'dayjs'
import * as R from 'rambda'
import { useRouter } from 'next/router'

import { useStore } from '../../../../config/store'
import {
  Container,
  TextXL,
  TextL,
  DoctorsContainer,
  CustomDoctors,
} from '../../../../styles/js/Booking.styles'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Doctor = () => {
  const router = useRouter()

  const currentHospital = useStore((state) => state.currentHospital)
  const slotBooking = useStore((state) => state.slotBooking)
  const setSlotBooking = useStore((state) => state.setSlotBooking)
  const department = slotBooking?.department

  const onSubmit = (doctorId) => {
    // Persist doctor to state
    setSlotBooking({ slotBooking: { ...slotBooking, doctorId } })

    router.push(`/hospital/${currentHospital.slug}/booking/slot`)
  }

  return (
    <Container>
      <TextXL>{currentHospital?.title}</TextXL>
      <TextL>Doctors Available</TextL>
      <DoctorsContainer>
        {currentHospital.doctors &&
          currentHospital.doctors
            .filter((item) => item.department === department)
            .map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onSubmit={() => onSubmit(doctor.id)}
              />
            ))}
      </DoctorsContainer>
    </Container>
  )
}

const DoctorCard = ({ doctor, onSubmit }) => {
  console.log(doctor)

  const daysAvailable = []

  for (const day in doctor.available) {
    if (doctor.available[day]) {
      daysAvailable.push(capitalizeFirstLetter(day))
    }
  }

  return (
    <CustomDoctors>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={doctor.image}
            height={160}
            alt={`Photo of ${doctor.name}`}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{doctor.name}</Text>
        </Group>

        <Text size="sm" color="dimmed">
          {doctor.delegation}
        </Text>

        <Text size="sm">
          {daysAvailable.length > 0
            ? `Available on: ${daysAvailable.join(', ')}`
            : 'Not Available'}
        </Text>
        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          disabled={!daysAvailable.length}
          onClick={() => onSubmit(doctor)}
        >
          Book now
        </Button>
      </Card>
    </CustomDoctors>
  )
}

export default Doctor
