<template>
  <main class="pt-32 px-6 max-w-6xl mx-auto">

    <!-- HERO -->
    <section class="mb-16">
      <h1 class="text-5xl font-bold text-[#39ff14] mb-4">
        {{ title }}
      </h1>
      <p class="text-gray-400 max-w-2xl">
        {{ description }}
      </p>
    </section>

    <!-- SECTIONS -->
    <div class="grid md:grid-cols-2 gap-12">

      <!-- LEFT -->
      <div>
        <h2 class="text-xl font-bold mb-4">What we cover</h2>
        <ul class="space-y-3 text-gray-400">
          <li v-for="item in coverage" :key="item">• {{ item }}</li>
        </ul>
      </div>

      <!-- RIGHT -->
      <div>
        <h2 class="text-xl font-bold mb-4">Deliverables</h2>
        <ul class="space-y-3 text-gray-400">
          <li v-for="item in deliverables" :key="item">• {{ item }}</li>
        </ul>
      </div>

    </div>

  </main>
</template>

<script>
export default {
  name: 'ServiceLayout',
  props: {
    title: String,
    description: String,
    coverage: Array,
    deliverables: Array
  }
}
</script>
