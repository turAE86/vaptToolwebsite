<template>
  <ServiceLayout
    title="Red Teaming"
    description="Real-world attack simulations to evaluate your organization’s detection and response capabilities."
    :coverage="coverage"
    :deliverables="deliverables"
  />
</template>

<script>
import ServiceLayout from '../../components/ServiceLayout.vue'

export default {
  name: 'RedTeamingPage',
  components: { ServiceLayout },
  setup() {
    const coverage = [
      'External & internal attack simulation',
      'Phishing & social engineering',
      'Lateral movement scenarios',
      'Detection & response evaluation'
    ]

    const deliverables = [
      'Red team attack report',
      'Blue team performance insights',
      'Attack path visualization',
      'Security maturity assessment'
    ]

    return { coverage, deliverables }
  }
}
</script>
