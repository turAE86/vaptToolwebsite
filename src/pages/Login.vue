<template>
  <div class="pt-32 max-w-md mx-auto">
    <h1 class="text-3xl font-bold mb-6">Login</h1>

    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="w-full mb-4 p-3 bg-black/40 border border-white/10 rounded"
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="w-full mb-4 p-3 bg-black/40 border border-white/10 rounded"
    />

    <button
      @click="l"
      class="w-full py-3 border border-[#39ff14] text-[#39ff14]
             rounded hover:bg-[#39ff14] hover:text-black transition">
      Login
    </button>

    <router-link
      to="/register"
      class="block mt-4 text-sm text-gray-400 text-center">
      Create new account
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginPage',
  setup() {
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const login = async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/auth/login', {
          email: email.value,
          password: password.value
        })

        localStorage.setItem('token', res.data.token)
        router.push('/') // redirect after login
      } catch (err) {
        alert(err.response?.data?.error || 'Login failed')
      }
    }

    return {
      email,
      password,
      login
    }
  }
}
</script>
