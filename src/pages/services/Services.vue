<template>
  <main class="pt-32 px-6 max-w-7xl mx-auto">

    <Breadcrumbs />

    <h1 class="text-5xl font-bold mb-6">
      Our <span class="text-[#39ff14]">Services</span>
    </h1>

    <p class="text-gray-400 max-w-2xl mb-12">
      Offensive and defensive cyber security services tailored
      for modern digital infrastructure.
    </p>

    <div class="grid md:grid-cols-3 gap-8">

      <!-- WEB PENTEST -->
      <router-link
        to="/services/web-pentest"
        class="bg-glass p-8 rounded-2xl border-neon-subtle
               hover:border-[#39ff14] transition group">

        <i data-lucide="bug" class="w-8 h-8 text-[#39ff14] mb-4"></i>

        <h3 class="text-xl font-bold mb-3 group-hover:text-[#39ff14]">
          Web Application Pentesting
        </h3>

        <p class="text-gray-400 text-sm">
          Identify vulnerabilities in modern web applications.
        </p>
      </router-link>

      <!-- CLOUD SECURITY -->
      <router-link
        to="/services/cloud-security"
        class="bg-glass p-8 rounded-2xl border-neon-subtle
               hover:border-[#39ff14] transition group">

        <i data-lucide="cloud" class="w-8 h-8 text-[#39ff14] mb-4"></i>

        <h3 class="text-xl font-bold mb-3 group-hover:text-[#39ff14]">
          Cloud Security
        </h3>

        <p class="text-gray-400 text-sm">
          Secure AWS, Azure & GCP infrastructure.
        </p>
      </router-link>

      <!-- RED TEAM -->
      <router-link
        to="/services/red-teaming"
        class="bg-glass p-8 rounded-2xl border-neon-subtle
               hover:border-[#39ff14] transition group">

        <i data-lucide="crosshair" class="w-8 h-8 text-[#39ff14] mb-4"></i>

        <h3 class="text-xl font-bold mb-3 group-hover:text-[#39ff14]">
          Red Teaming
        </h3>

        <p class="text-gray-400 text-sm">
          Real-world attack simulations against your organization.
        </p>
      </router-link>

    </div>
  </main>
</template>


<script>
import { onMounted } from 'vue'
import { useSeo } from '../../utils/useSeo'
import Breadcrumbs from '@/components/Breadcrumbs.vue';

export default {
  
  name: 'ServicesOverview',
  components: { Breadcrumbs },
  setup() {
    onMounted(() => {
      useSeo({
        title: 'Cyber Security Services | DOTDNA',
        description:
          'Explore DOTDNA cyber security services including web application pentesting, cloud security, and red teaming.'
      })
    })
  }
}

</script>
