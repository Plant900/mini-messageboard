import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from './features/messages/messageSlice'
import { MessageForm } from './components/MessageForm'

import { Stack, Spinner, Box } from '@chakra-ui/react'

function App() {
  const dispatch = useDispatch()
  const { isLoading, messages } = useSelector((state) => {
    return state.messages
  })

  useEffect(() => {
    dispatch(getMessages())
  }, [dispatch])

  if (isLoading) {
    return <Spinner size="xl" />
  }

  return (
    <Stack bg="#5E6F75" p="20px">
      {messages ? (
        messages.map((message) => {
          return (
            <Box key={message._id} border="1px solid black" width="100%">
              <div>{message.user}</div>
              <div>{message.text}</div>
            </Box>
          )
        })
      ) : (
        <div>No messages</div>
      )}
      <MessageForm />
    </Stack>
  )
}

export default App
