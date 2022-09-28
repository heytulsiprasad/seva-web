/**
 *
availability: {
	monday: [ { start: 08:00, end: 10:00 } ]
}

Globals: n ⇒ time per slot

⚠ Also check for already booked slots with this doctor and don’t show them here. 
  Or has every slots limit raised to 5, so each slot can have 5 patients.

1. Check for current date and see if that doctor is available
2. If no, show no available slots. If yes, proceed.
3. There should be one master array for time slots, which will be used to replenish the time slots.
4. Loop over one day’s timing array and do `end - start` to find hours.
5. Divide that time gap with `n` and show time slots at particular times
6. When booked, store `time, date, doctor and department` and sync with firestore.

 */

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Center, SimpleGrid, Button, Text } from '@mantine/core'
import { Calendar } from '@mantine/dates'
import dayjs from 'dayjs'

import { useStore } from '../../../../config/store'
import {
  Container,
  Doctor,
  BookContainer,
  CustomButton,
  CustomCalender,
  CustomTime,
  SlotBox,
  TextXL,
  TextL,
  CustomDoctors,
} from '../../../../styles/js/Booking.styles.js'

const dayNumberMap = {
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
  7: 'sunday',
}

const timePerSlotInMinutes = 15

const Slot = () => {
  const router = useRouter()

  const currentHospital = useStore((state) => state.currentHospital)
  const slotBooking = useStore((state) => state.slotBooking)
  const setSlotBooking = useStore((state) => state.setSlotBooking)

  // Fill this array with all the slots
  // slot => { startAt: '08:00:00', registered: 3 }
  const [timeSlots, setTimeSlots] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const computeSlots = () => {
    const timeBatches = []

    if (selectedDate) {
      const day = dayNumberMap[dayjs(selectedDate).day()]

      // Check if doctor available on that day
      // timing can be either `null` or [{ start: xxx, end: yyy }]
      const timing = slotBooking.doctor.available[day]

      // When timing exists, create slots
      if (timing) {
        timing.forEach((item) => {
          const startPt = dayjs(item.start)
          const endPt = dayjs(item.end)

          const differenceInMinutes = endPt.diff(startPt, 'minutes')
          const numberOfSlots = differenceInMinutes / timePerSlotInMinutes

          let newPt = startPt

          ;[...Array(numberOfSlots)].forEach((_) => {
            newPt = newPt.add(timePerSlotInMinutes, 'minute')

            // TODO: Check if some slot' full
            timeBatches.push({
              startAt: newPt.toISOString(),
              timeStamp: newPt.format('h:mm A'),
            })
          })
        })
      }
    }

    console.log({ timeBatches })
    return timeBatches
  }

  const clearEntries = () => {
    setTimeSlots(null)
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const confirmSlotBooking = () => {
    const timeObj = dayjs(selectedTime)
    const dateObj = dayjs(selectedDate)

    // Create another timestamp (ISO string) that merges these two
    const newDate = dateObj.get('date')
    const newMonth = dateObj.get('month')
    const newYear = dateObj.get('year')

    const finalSlot = timeObj
      .set('date', newDate)
      .set('month', newMonth)
      .set('year', newYear)
      .toISOString()

    const choosenSlot = {
      timeStamp: finalSlot,
      durationInMins: timePerSlotInMinutes,
    }

    console.log(choosenSlot)

    // Persist to store
    setSlotBooking({
      slotBooking: {
        ...slotBooking,
        slot: choosenSlot,
      },
    })

    // TODO: Sync to firestore
    alert(
      `You have selected a slot on ${dayjs(choosenSlot.timeStamp).format(
        'MMM D, YYYY h:mm A'
      )}`
    )

    // TODO: Redirect to final screen
    router.push(`/hospital/${currentHospital.slug}/booking/user-details`)
  }

  console.log({ timeSlots })

  useEffect(() => {
    const batch = computeSlots()
    setTimeSlots(batch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate])

  return (
    <Container>
      <TextXL>{currentHospital?.title}</TextXL>
      <TextL>{slotBooking.doctor.name}</TextL>
      <TextL>{slotBooking.doctor.department}</TextL>
      <BookContainer>
        <CustomCalender>
          <h4>Choose Date</h4>
          <Center>
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
              minDate={dayjs(new Date()).toDate()}
            />
          </Center>
        </CustomCalender>
        <CustomTime>
          <h4>Choose Time</h4>
          <SimpleGrid cols={2}>
            {timeSlots && timeSlots?.length > 0 ? (
              timeSlots.map((item) => (
                <SlotBox
                  key={item.startAt}
                  active={selectedTime === item.startAt}
                  onClick={() => setSelectedTime(item.startAt)}
                >
                  {item.timeStamp}
                </SlotBox>
              ))
            ) : (
              <p>No slots available. Come back later.</p>
            )}
          </SimpleGrid>
        </CustomTime>
      </BookContainer>
      <Center my={32}>
        <Button
          type="button"
          variant="solid"
          radius="sm"
          size="lg"
          mr={32}
          disabled={!(selectedDate && selectedTime)}
          onClick={confirmSlotBooking}
        >
          <Text size="md">Confirm Booking</Text>
        </Button>
        <Button
          type="button"
          variant="solid"
          color="orange"
          radius="sm"
          size="lg"
          onClick={clearEntries}
        >
          <Text size="md">Clear</Text>
        </Button>
      </Center>
    </Container>
  )
}

export default Slot
