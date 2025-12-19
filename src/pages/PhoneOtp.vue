<template>
  <div class="pt-32 max-w-md mx-auto text-center">
    <h1 class="text-3xl font-bold mb-6">Phone Verification</h1>

    <input
      v-model="phone"
      placeholder="+91XXXXXXXXXX"
      class="w-full mb-4 p-3 bg-black/40 border border-white/10 rounded"
    />

    <button @click="sendOtp" class="btn w-full mb-4">
      Send OTP
    </button>

    <input
      v-if="otpSent"
      v-model="otp"
      placeholder="Enter OTP"
      class="w-full mb-4 p-3 bg-black/40 border border-white/10 rounded"
    />

    <button
      v-if="otpSent"
      @click="verifyOtp"
      class="btn w-full">
      Verify OTP
    </button>

    <p class="text-red-500 mt-4">{{ error }}</p>
    <p class="text-green-400 mt-4">{{ success }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  name: 'PhoneOtpPage',
  setup() {
    const phone = ref('')
    const otp = ref('')
    const otpSent = ref(false)
    const userId = ref('')
    const error = ref('')
    const success = ref('')

    const sendOtp = async () => {
      const res = await axios.post(
        'http://localhost:5000/api/auth/send-phone-otp',
        { phone: phone.value }
      )
      userId.value = res.data.userId
      otpSent.value = true
    }

    const verifyOtp = async () => {
      const res = await axios.post(
        'http://localhost:5000/api/auth/verify-phone-otp',
        { userId: userId.value, otp: otp.value }
      )
      success.value = res.data.message
    }

    return {
      phone,
      otp,
      otpSent,
      sendOtp,
      verifyOtp,
      error,
      success
    }
  }
}
</script>
