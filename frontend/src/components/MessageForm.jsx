import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createMessage } from '../features/messages/messageSlice'

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
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="user">User</label>
        <input
          type="text"
          name="user"
          id="user"
          onChange={(e) =>
            setFormValues({ ...formValues, user: e.target.value })
          }
        ></input>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) =>
            setFormValues({ ...formValues, text: e.target.value })
          }
        ></input>
        <button type="submit">Post message</button>
      </form>
    </div>
  )
}
