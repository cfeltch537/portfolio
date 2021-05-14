<template>
  <v-main color="transparent">
    <Toolbar2 />
    <div>
      <Hero1 id="section-home"/>
      <Feature6 id="section-about"/>
      <Feature15 id="section-skills"/>
      <Card1 />
      <Stats4 id="section-experience"/>
      <Card4 id="section-projects"/>
    </div>
    <Footer8 />
  </v-main>
</template>

<script>
import Hero1 from '@/components/ui/landing/Intro.vue'
import Toolbar2 from '@/components/ui/landing/Toolbar.vue'
import Feature6 from '@/components/ui/landing/About.vue'
import Feature15 from '@/components/ui/landing/SkillsAreas.vue'
import Card1 from '@/components/ui/landing/SkillsTools.vue'
import Stats4 from '@/components/ui/landing/Experience.vue'
import Card4 from '@/components/ui/landing/Projects.vue'
import Footer8 from '@/components/ui/landing/Footer.vue'

export default {
  components: {
    Hero1,
    Toolbar2,
    Feature6,
    Stats4,
    Card1,
    Feature15,
    Card4,
    Footer8
  }
}
</script>
