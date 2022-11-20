import axios from 'axios'

const API_URL = '/api/messages'

const getMessages = async () => {
  const response = await axios.get(API_URL)

  console.log('data', response.data)

  return response.data
}

const createMessage = async (messageData) => {
  const response = await axios.post(API_URL, messageData)

  return response.data
}

const messageService = {
  getMessages,
  createMessage,
}

export default messageService
