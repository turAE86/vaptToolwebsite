<template>
  <div class="pt-32 max-w-md mx-auto text-center">
    <h1 class="text-3xl font-bold mb-6">Verify Email</h1>

    <p class="text-gray-400 mb-4">
      Enter the 6-digit OTP sent to your email
    </p>

    <input
      v-model="otp"
      maxlength="6"
      placeholder="Enter OTP"
      class="w-full p-3 bg-black/40 border border-white/10 rounded mb-4 text-center"
    />

    <button
      @click="verifyOtp"
      class="w-full py-3 border border-[#39ff14] text-[#39ff14] rounded hover:bg-[#39ff14] hover:text-black transition">
      Verify OTP
    </button>

    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    <p v-if="success" class="text-green-400 mt-4">{{ success }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VerifyOtpPage',
  data() {
    return {
      otp: '',
      error: '',
      success: ''
    }
  },
  methods: {
    async verifyOtp() {
      try {
        const userId = localStorage.getItem('userId')

        const res = await axios.post('http://localhost:5000/api/auth/verify-otp', {
          userId,
          otp: this.otp
        })

        this.success = res.data.message
        this.error = ''
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>
