import axios from 'axios'

const API_URL = 'https://mini-messageboard.onrender.com/api/messages'

const getMessages = async () => {
  const response = await axios.get(API_URL)

  console.log('data', response.data)

  return response.data
}

const createMessage = async (messageData) => {
  console.log('hi', messageData)
  const response = await axios.post(API_URL, messageData)
  console.log('creating message', response.data)

  return response.data
}

const messageService = {
  getMessages,
  createMessage,
}

export default messageService
