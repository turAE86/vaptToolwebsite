<template>
  <ServiceLayout
    title="Cloud Security"
    description="Security assessments for AWS, Azure, and GCP cloud environments."
    :coverage="coverage"
    :deliverables="deliverables"
  />
</template>

<script>
import ServiceLayout from '../../components/ServiceLayout.vue'

export default {
  name: 'CloudSecurityPage',
  components: { ServiceLayout },
  setup() {
    const coverage = [
      'IAM & access control review',
      'Cloud misconfiguration analysis',
      'Storage & network security',
      'Logging & monitoring gaps'
    ]

    const deliverables = [
      'Cloud risk assessment report',
      'Misconfiguration findings',
      'Compliance mapping',
      'Remediation roadmap'
    ]

    return { coverage, deliverables }
  }
}
</script>
