import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createMessage } from '../features/messages/messageSlice'

import { Button, Input, Stack, Textarea } from '@chakra-ui/react'

export const MessageForm = () => {
  const [formValues, setFormValues] = useState({
    user: '',
    text: '',
  })

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createMessage(formValues))
    setFormValues({ user: '', text: '' })
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack width={'500px'}>
        <Input
          placeholder="User"
          variant="filled"
          size="xs"
          type="text"
          name="user"
          id="user"
          onChange={(e) =>
            setFormValues({ ...formValues, user: e.target.value })
          }
        ></Input>

        <Textarea
          placeholder="Message"
          variant="filled"
          size="sm"
          type="text"
          name="text"
          id="text"
          onChange={(e) =>
            setFormValues({ ...formValues, text: e.target.value })
          }
        ></Textarea>
        <Button size={'sm'} variant={'solid'} colorScheme="gray" type="submit">
          Post message
        </Button>
      </Stack>
    </form>
  )
}
