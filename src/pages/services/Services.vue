<template>
  <main class="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
    <Breadcrumbs />

    <div class="mb-12">
      <h1 class="text-5xl font-bold mb-6">
        Our <span class="text-[#39ff14]">Services</span>
      </h1>
      <p class="text-gray-400 max-w-2xl">
        Offensive and defensive cyber security services tailored for modern digital infrastructure.
        Managed dynamically via our secure platform.
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#39ff14]"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-20 text-red-400 bg-red-900/10 rounded-xl border border-red-900">
      <p class="text-xl">⚠️ {{ error }}</p>
      <button @click="fetchServices" class="mt-4 text-sm underline hover:text-white">Try Again</button>
    </div>

    <!-- Services Grid -->
    <div v-else class="grid md:grid-cols-3 gap-8">
      <router-link
        v-for="service in services"
        :key="service._id"
        :to="`/services/${service.slug}`"
        class="bg-glass p-8 rounded-2xl border border-white/10 hover:border-[#39ff14] transition-all duration-300 group hover:-translate-y-1"
      >
        <!-- Dynamic Icon -->
        <div class="mb-6">
          <component 
            :is="getIcon(service.icon)" 
            class="w-10 h-10 text-[#39ff14] transition-transform group-hover:scale-110" 
          />
        </div>

        <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-[#39ff14]">
          {{ service.title }}
        </h3>

        <p class="text-gray-400 text-sm leading-relaxed mb-6">
          {{ service.description }}
        </p>

        <!-- Features List (Optional) -->
        <ul v-if="service.features && service.features.length" class="space-y-2 mb-6">
          <li v-for="(feature, index) in service.features.slice(0, 3)" :key="index" class="flex items-center text-xs text-gray-500">
            <span class="w-1.5 h-1.5 bg-[#39ff14] rounded-full mr-2"></span>
            {{ feature }}
          </li>
        </ul>

        <div class="flex items-center text-[#39ff14] text-sm font-semibold uppercase tracking-wider">
          Learn More <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </router-link>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { useSeo } from '../../utils/useSeo';
// Import icons you expect to use
import { Bug, Cloud, Crosshair, Shield, Lock, Server, Globe } from 'lucide-vue-next';

export default {
  name: 'ServicesOverview',
  components: { 
    Breadcrumbs,
    Bug, Cloud, Crosshair, Shield, Lock, Server, Globe 
  },
  setup() {
    const services = ref([]);
    const loading = ref(true);
    const error = ref(null);

    // Map string names from DB to actual components
    const getIcon = (iconName) => {
      const iconMap = {
        'bug': 'Bug',
        'cloud': 'Cloud',
        'crosshair': 'Crosshair',
        'shield': 'Shield',
        'lock': 'Lock',
        'server': 'Server',
        'globe': 'Globe'
      };
      return iconMap[iconName] || 'Shield'; // Default fallback
    };

    const fetchServices = async () => {
      loading.value = true;
      error.value = null;
      try {
        // Ensure this URL matches your backend port
        const response = await axios.get('http://localhost:5000/api/services');
        services.value = response.data;
      } catch (err) {
        console.error("API Error:", err);
        error.value = "Failed to load services. Please ensure the backend is running.";
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      useSeo({
        title: 'Cyber Security Services | DOTDNA',
        description: 'Explore our dynamic portfolio of offensive and defensive security services.'
      });
      fetchServices();
    });

    return { services, loading, error, getIcon, fetchServices };
  }
}
</script>

<style scoped>
.bg-glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
}
</style>