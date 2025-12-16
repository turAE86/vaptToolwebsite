<template>
  <main class="pt-32 px-6 max-w-4xl mx-auto">
    <h1 class="text-5xl font-bold text-[#39ff14] mb-6">
      Red Teaming
    </h1>
    <p class="text-gray-400">
      Adversary emulation, phishing campaigns, and full attack chains.
    </p>
  </main>
</template>

<script>
import { onMounted } from 'vue'
import { useSeo } from '../../utils/useSeo'

export default {
  name: 'RedTeamingPage',
  setup() {
    onMounted(() => {
      useSeo({
        title: 'Red Teaming Services | DOTDNA',
        description:
          'Real-world adversary simulations, phishing campaigns, and full attack chain assessments.'
      })
    })
  }
}
</script>
