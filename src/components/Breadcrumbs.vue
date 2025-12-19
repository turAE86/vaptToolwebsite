<template>
  <nav class="text-sm text-gray-500 mb-8">
    <ol class="flex flex-wrap items-center gap-2">

      <li>
        <router-link to="/" class="hover:text-[#39ff14]">
          Home
        </router-link>
      </li>

      <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center gap-2">
        <span class="text-gray-600">›</span>

        <router-link
          v-if="index !== crumbs.length - 1"
          :to="crumb.path"
          class="hover:text-[#39ff14]"
        >
          {{ crumb.label }}
        </router-link>

        <span v-else class="text-gray-300">
          {{ crumb.label }}
        </span>
      </li>

    </ol>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'BreadcrumbsNav',
  setup() {
    const route = useRoute()

    const crumbs = route.path
      .split('/')
      .filter(Boolean)
      .map((segment, index, array) => {
        return {
          label: segment.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
          path: '/' + array.slice(0, index + 1).join('/')
        }
      })

    return { crumbs }
  }
}
</script>
