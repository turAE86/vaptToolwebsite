<template>
  <div class="relative min-h-screen overflow-x-hidden">

    <!-- BACKGROUND -->
    <div class="cyber-grid"></div>
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]
             bg-[#39ff14] opacity-[0.07] blur-[120px] rounded-full">
    </div>

    <MainNavbar />

    <!-- PAGE CHANGES HERE -->
   <transition name="page" mode="out-in">
  <router-view />
</transition>


    <MainFooter />
  </div>
</template>

<script>
import { onMounted, nextTick } from 'vue'
import { createIcons } from 'lucide'

import MainNavbar from './components/Navbar.vue'
import MainFooter from './components/Footer.vue'

export default {
  name: 'AppRoot',
  components: { MainNavbar, MainFooter },
  setup() {
    onMounted(async () => {
      await nextTick()
      createIcons()
    })
  }
}
</script>
