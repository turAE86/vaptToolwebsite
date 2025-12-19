<template>
  <nav class="fixed top-0 w-full z-50 bg-black/80 border-b border-white/5">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between">

      <div class="font-bold text-xl">
        DOT<span class="text-[#39ff14]">DNA</span>
      </div>

      <div class="flex gap-6 text-gray-400">
        <router-link to="/" class="hover:text-white">Home</router-link>
        <router-link to="/services" class="hover:text-white">Services</router-link>
        <router-link to="/about" class="hover:text-white">About</router-link>
        <router-link to="/contact" class="hover:text-white">Contact</router-link>
        <router-link to="/login" class="px-5 py-2 rounded-full border border-[#39ff14]
         text-[#39ff14] hover:bg-[#39ff14] hover:text-black transition font-medium"> Login </router-link>
        <router-link v-if="!isLoggedIn" to="/login">Login</router-link>

      </div>

    </div>
  </nav>
</template>

<script>
export default { name: 'MainNavbar' }
</script>
