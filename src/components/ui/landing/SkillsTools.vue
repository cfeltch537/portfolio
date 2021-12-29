<template>
  <v-container class="py-6 px-lg-6" fluid>
    <div class="text-center mb-6">
      <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Skills</div>
      <h2 class="text-h3 text-lg-h2">Software Tools</h2>
      <v-responsive class="mx-auto">
        <div class="text-h6 text-lg-h5 mt-4">Some of the languages and tools I have experience developing with</div>
      </v-responsive>
    </div>    
    <!-- <v-divider class="my-2"></v-divider> -->
    <v-row>
      <v-col v-for="(open, i) in openings" :key="i" cols="12" md="4">
        <!-- card example -->
        <SkillCards v-bind="open" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SkillCards from '@/components/ui/landing/SkillsCards.vue'

export default {
  components: {
    SkillCards
  },
  data() {
    return {
      openings: [{
        title: 'Programming Languages',
        tags: ['Python', 'JavaScript', 'Java', 'C', 'C#', 'MATLAB'],
        description: 'I started my career working on MATLAB simulations and C#/Java/Python desktop applications. I worked intensly on Android apps and services for awhile. My current work is primarily in Python, JavaScript and Android.',
        to: '#1'
      }, {
        title: 'Front-End Tools',
        tags: ['HTML', 'CSS', 'Vue.js', 'React', 'Bootstrap', 'EJS', 'Plotly'],
        description: 'I enjoy front-end design and development because I am a creative type. I like the modularity of the modern JS frameworks, and have experience with Vue.js and React.',
        to: '#2'
      }, {
        title: 'Back-End Tools',
        tags: ['Node.js', 'Express', 'MongoDB', 'Flask', 'InfluxDB', 'SQL', 'GraphQL', 'AWS'],
        description: 'I\'ve like using MEVN and MERN  (Mongo, Express, Vue/React, Node) stacks for web apps, and Flask servers for analytics microservices. AWS is my go-to for cloud solutions.',
        to: '#3'
      },
      {
        title: 'Python Libraries',
        tags: ['pandas', 'numpy', 'scipy', 'scikit-learn', 'open-cv', 'tsfresh'],
        description: 'I\'ve done a lot of signal processing, analytics and machine learning work. I wrote code for web scraping and data aggregation from web apis. ',
        to: '#4'
      },
      {
        title: 'Other Tools',
        tags: ['Android', 'Unity', 'Qt','SteamVR', 'Wireshark', 'Git', 'SVN', 'Jira', 'Scrum'],
        description: 'I\'ve made countless Android apps for data collection. I created a VR Shooting Range in Unity with SteamVR. I have experience working in Scrum teams, using Jira.',
        to: '#5'
      }]
    }
  }
}
</script>
