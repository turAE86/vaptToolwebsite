<template>
  <!-- HERO + ALL HOME SECTIONS ONLY -->

  <main
    class="flex-grow flex flex-col justify-center items-center
           text-center px-4 pt-32 pb-10 relative z-10">

    <!-- ================= HERO ================= -->
    <h1
      class="text-5xl md:text-7xl font-bold tracking-tight mb-6
             max-w-5xl leading-tight float-up">

      We are
      <span class="inline-flex items-center justify-center w-16 h-16 mx-2 align-middle">
        <svg viewBox="0 0 24 24" fill="none"
             class="w-12 h-12 text-[#39ff14] animate-pulse">
          <path d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor" stroke-width="2"/>
          <path d="M2 17L12 22L22 17"
                stroke="currentColor" stroke-width="2"/>
          <path d="M2 12L12 17L22 12"
                stroke="currentColor" stroke-width="2"/>
        </svg>
      </span>

      a boutique <br />
      <span
        class="text-transparent bg-clip-text
               bg-gradient-to-r from-white via-gray-400 to-gray-600">
        cyber security company
      </span>
    </h1>

    <p
      class="text-gray-400 max-w-2xl text-lg mb-12
             leading-relaxed float-up delay-100">
      At DOTDNA, our expertise extends across diverse industries.
      Our team is backed by the highest standards of cybersecurity certifications.
    </p>

    <!-- ================= FEATURES ================= -->
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-6
             max-w-6xl w-full px-4 float-up delay-200 mb-20">

      <div class="bg-glass p-8 rounded-2xl border-neon-subtle">
        <h3 class="text-xl font-bold mb-3">We have experience</h3>
        <p class="text-gray-400 text-sm">
          Years of defending businesses from cyber threats.
        </p>
      </div>

      <div class="bg-glass p-8 rounded-2xl border-neon-subtle">
        <h3 class="text-xl font-bold mb-3">Customized Solutions</h3>
        <p class="text-gray-400 text-sm">
          Tailored security strategies for every business.
        </p>
      </div>

      <div class="bg-glass p-8 rounded-2xl border-neon-subtle">
        <h3 class="text-xl font-bold mb-3">Always Updated</h3>
        <p class="text-gray-400 text-sm">
          Staying ahead of modern threats & exploits.
        </p>
      </div>
    </div>

    <!-- ================= THREAT SCOPE ================= -->
    <section class="w-full max-w-6xl px-4 mb-20 float-up delay-300">
      <h2 class="text-3xl font-bold mb-6">
        Threat Scope <span class="text-[#39ff14] text-sm">DEMO</span>
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- INPUT -->
        <div class="bg-glass p-6 rounded-xl">
          <textarea
            v-model="stackInput"
            class="w-full bg-black/40 border border-white/10 rounded-lg
                   p-4 text-white h-32 resize-none"
            placeholder="Enter your tech stack...">
          </textarea>

          <button
            @click="analyzeStack"
            class="mt-4 w-full py-3 border border-[#39ff14]
                   text-[#39ff14] rounded-lg hover:bg-[#39ff14]
                   hover:text-black transition">
            Initialize Scan
          </button>
        </div>

        <!-- OUTPUT -->
        <div class="terminal-window rounded-lg overflow-hidden h-[300px]">
          <div class="terminal-header px-4 py-2 text-xs text-gray-400">
            root@dotdna-ai:~
          </div>

          <div class="p-4 font-mono text-sm text-gray-300">
            <div v-if="!analysisResult">
              > Waiting for input...
            </div>
            <div v-else v-html="analysisResult"></div>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
import { onMounted } from 'vue'
import { useSeo } from '../utils/useSeo'

export default {
  name: 'HomePage',
  setup() {
    onMounted(() => {
      useSeo({
        title: 'DOTDNA | Cyber Security Company',
        description:
          'DOTDNA is a boutique cyber security company providing penetration testing, cloud security, and red teaming services.'
      })
    })

    // keep ALL your existing logic below
  }
}

</script>
