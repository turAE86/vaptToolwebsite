const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

module.exports = async (email, otp) => {
  await transporter.sendMail({
    to: email,
    subject: 'DOTDNA OTP Verification',
    text: `Your DOTDNA verification OTP is ${otp}. This OTP expires in 5 minutes.`,
    

  })
}
