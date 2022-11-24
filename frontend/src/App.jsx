import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from './features/messages/messageSlice'
import { MessageForm } from './components/MessageForm'

import { Stack, StackDivider, Spinner, Box, Flex } from '@chakra-ui/react'

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
    <Flex flexDirection={'column'} alignItems={'center'}>
      <Stack
        bg="#5E6F75"
        p="20px"
        alignItems={'center'}
        height={'700px'}
        overflow={'scroll'}
        overflowX={'hidden'}
        divider={<StackDivider borderColor="gray.500" />}
      >
        {messages ? (
          messages.map((message) => {
            return (
              <Box key={message._id} width="500px">
                <div>{message.user}</div>
                <div>{message.text}</div>
              </Box>
            )
          })
        ) : (
          <div>No messages</div>
        )}
      </Stack>
      <MessageForm />
    </Flex>
  )
}

export default App
