import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/Home.vue'
import ServicesPage from '../pages/services/Services.vue'
import WebPentest from '../pages/services/WebPentest.vue'
import CloudSecurity from '../pages/services/CloudSecurity.vue'
import RedTeaming from '../pages/services/RedTeaming.vue'
import AboutPage from '../pages/About.vue'
import ContactPage from '../pages/Contact.vue'

const routes = [
  { path: '/', component: HomePage },

  { path: '/services', component: ServicesPage },
  { path: '/services/web-pentest', component: WebPentest },
  { path: '/services/cloud-security', component: CloudSecurity },
  { path: '/services/red-teaming', component: RedTeaming },

  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
