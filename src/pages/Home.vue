<template>
  <v-main id="section-home" color="transparent">
    <Intro />
    <Toolbar />
    <div>
      <About id="section-about"/>
      <SkillsAreas id="section-skills"/>
      <SkillsTools />
      <Experience id="section-experience"/>
      <Projects id="section-projects"/>
    </div>
    <Footer />
  </v-main>
</template>

<script>
import Intro from '@/components/ui/landing/Intro.vue'
import Toolbar from '@/components/ui/landing/Toolbar.vue'
import About from '@/components/ui/landing/About.vue'
import SkillsAreas from '@/components/ui/landing/SkillsAreas.vue'
import SkillsTools from '@/components/ui/landing/SkillsTools.vue'
import Experience from '@/components/ui/landing/Experience.vue'
import Projects from '@/components/ui/landing/Projects.vue'
import Footer from '@/components/ui/landing/Footer.vue'

export default {
  components: {
    Intro,
    Toolbar,
    About,
    Experience,
    SkillsTools,
    SkillsAreas,
    Projects,
    Footer
  }
}
</script>
