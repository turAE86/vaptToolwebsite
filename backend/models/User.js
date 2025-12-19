const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,

  isVerified: { type: Boolean, default: false },

  otpHash: String,
  otpExpiry: Date,

  googleId: String
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)
