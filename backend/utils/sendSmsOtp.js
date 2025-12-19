const twilio = require('twilio')

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

module.exports = async (phone, otp) => {
  await client.messages.create({
    body: `Your DOTDNA OTP is ${otp}. It expires in 5 minutes.`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone
  })
}
