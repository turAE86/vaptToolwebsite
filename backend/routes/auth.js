const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const sendOtp = require('../utils/sendOtp')
const generateOtp = require('../utils/generateOtp')
const sendSmsOtp = require('../utils/sendSmsOtp')

const router = express.Router()

// REGISTER
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body

  const exists = await User.findOne({ email })
  if (exists) return res.status(400).json({ error: 'User already exists' })

  const hashedPassword = await bcrypt.hash(password, 10)
  const otp = generateOtp()
  const otpHash = await bcrypt.hash(otp, 10)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    otpHash,
    otpExpiry: Date.now() + 5 * 60 * 1000
  })

  await sendOtp(email, otp)

  res.json({ message: 'OTP sent', userId: user._id })
})


// 🔐 VERIFY OTP (ADD THIS BELOW REGISTER)
router.post('/verify-otp', async (req, res) => {
  const { userId, otp } = req.body

  const user = await User.findById(userId)
  if (!user) return res.status(400).json({ error: 'User not found' })

  if (user.isVerified)
    return res.json({ message: 'Already verified' })

  if (Date.now() > user.otpExpiry)
    return res.status(400).json({ error: 'OTP expired' })

  const isValid = await bcrypt.compare(otp, user.otpHash)
  if (!isValid)
    return res.status(400).json({ error: 'Invalid OTP' })

  user.isVerified = true
  user.otpHash = undefined
  user.otpExpiry = undefined
  await user.save()

  res.json({ message: 'Account verified successfully' })
})

// Login
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).json({ error: 'User not found' })

  const valid = await bcrypt.compare(req.body.password, user.password)
  if (!valid) return res.status(400).json({ error: 'Invalid password' })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  res.json({ token })
})

router.post('/send-phone-otp', async (req, res) => {
  const { phone } = req.body

  let user = await User.findOne({ phone })
  if (!user) {
    user = await User.create({ phone })
  }

  const otp = generateOtp()
  user.otpHash = await bcrypt.hash(otp, 10)
  user.otpExpiry = Date.now() + 5 * 60 * 1000

  await user.save()
  await sendSmsOtp(phone, otp)

  res.json({ message: 'OTP sent to phone', userId: user._id })
})

router.post('/verify-phone-otp', async (req, res) => {
  const { userId, otp } = req.body

  const user = await User.findById(userId)
  if (!user) return res.status(400).json({ error: 'User not found' })

  if (Date.now() > user.otpExpiry)
    return res.status(400).json({ error: 'OTP expired' })

  const valid = await bcrypt.compare(otp, user.otpHash)
  if (!valid)
    return res.status(400).json({ error: 'Invalid OTP' })

  user.isVerified = true
  user.otpHash = undefined
  user.otpExpiry = undefined
  await user.save()

  res.json({ message: 'Phone verified successfully' })
})

module.exports = router
