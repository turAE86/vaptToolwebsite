<template>
  <main class="pt-32 px-6 max-w-4xl mx-auto">
    <h1 class="text-5xl font-bold text-[#39ff14] mb-6">
      Cloud Security
    </h1>
    <p class="text-gray-400">
      Misconfiguration reviews, IAM audits, and cloud threat modeling.
    </p>
  </main>
</template>

<script>
import { onMounted } from 'vue'
import { useSeo } from '../../utils/useSeo'

export default {
  name: 'CloudSecurityPage',
  setup() {
    onMounted(() => {
      useSeo({
        title: 'Cloud Security Services | DOTDNA',
        description:
          'Secure your AWS, Azure, and GCP infrastructure with configuration reviews, IAM audits, and threat modeling.'
      })
    })
  }
}

</script>
