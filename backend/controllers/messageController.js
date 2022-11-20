const asyncHandler = require('express-async-handler')

const Message = require('../models/messageModel')

const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find()

  res.status(200).json(messages)
})

//@desc create message
//@route POST /api/messages
//@access PUBLIC
const createMessage = asyncHandler(async (req, res) => {
  if (!req.body.text || !req.body.user) {
    res.status(400)
    throw new Error('Fill in all fields')
  }

  const message = await Message.create({
    user: req.body.user,
    text: req.body.text,
  })

  res.status(200).json(message)
})

module.exports = {
  getMessages,
  createMessage,
}
