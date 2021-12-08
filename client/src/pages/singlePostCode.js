
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getToken, getCurrentUserId } from '../Helpers/Auth'


const SingleArtwork = () => {
  const [event, setEvent] = useState()
  const [hasError, setHasError] = useState(false)

  const { id } = useParams()

  const getEvent = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/events/${id}/`)
      setEvent(data)
      console.log(data)
    } catch (error) {
      setHasError(true)
    }
  }, [id])

  useEffect(() => {
    getEvent()
  }, [getEvent])

  const handleAttending = async () => {
    try {
      await axios.post(
        `/api/join/`,
        {
          event: event.id,
          going: true,
        },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      )
      await getEvent()
    } catch (error) {
      console.log(error)
    }
  }

  const handleNotAttending = async (joinId) => {
    try {
      await axios.delete(`/api/join/${joinId}/`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      await getEvent()
    } catch (error) {
      console.log(error)
    }
  }

  const userId = getCurrentUserId()
  const join = event && event.join.find((join) => join.owner === userId)
  const isUserAttending = userId && !!join

  console.log(`user is attending ${isUserAttending}`)

  return (
    <div>
      {event ? (
        <>
          <Img src={event.event_image} alt={event.event_title} />
          <Div>
            <Title>{event.event_title}</Title>
            <Card>
              <Attending>
                {isUserAttending
                  ? 'You are already attending'
                  : 'You are not attending yet'}
              </Attending>
              <Attending>
                <Color>{event.join.length}</Color>
              </Attending>
              <Attending>people attending</Attending>
              {isUserAttending ? (
                <Going onClick={() => handleNotAttending(join.id)}>
                  Cancel
                </Going>
              ) : (
                <Going onClick={handleAttending}>I want to go</Going>
              )}
            </Card>
          </Div>
        </>
      )}
    </div>
  )
}
