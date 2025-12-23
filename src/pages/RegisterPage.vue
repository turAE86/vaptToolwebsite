<template>
  <div class="pt-32 max-w-md mx-auto">
    <h1 class="text-3xl font-bold mb-6">Create Account</h1>

    <input v-model="name" placeholder="Name" class="input" />
    <input v-model="email" placeholder="Email" class="input" />
    <input v-model="password" type="password" placeholder="Password" class="input" />

    <button @click="register" class="btn">Register</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RegisterPage',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password
      })

      localStorage.setItem('userId', res.data.userId)
      this.$router.push('/verify-otp')
    }
  }
}
</script>