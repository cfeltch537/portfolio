<template>
  <v-container class="py-6 px-lg-6" fluid>
    <div class="text-center mb-6">
      <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Skills</div>
      <h2 class="text-h3 text-lg-h2">Software Tools</h2>
      <v-responsive class="mx-auto">
        <div class="text-h6 text-lg-h5 mt-4">These are some of the engineering technologies that I have had the pleasure of working with.</div>
      </v-responsive>
    </div>    
    <!-- <v-divider class="my-2"></v-divider> -->
    <v-row>
      <v-col v-for="(open, i) in openings" :key="i" cols="12" md="4">
        <!-- card example -->
        <Card1 v-bind="open" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card1 from '@/components/ui/landing/SkillsCards.vue'

export default {
  components: {
    Card1
  },
  data() {
    return {
      openings: [{
        title: 'Programming Languages',
        tags: ['Python', 'Javascript', 'Java', 'C', 'C#', 'MATLAB'],
        description: 'I started my career working mostly on MATLAB simulations and desktop applications in C# and Java. Now I work more in Pyton and JS.',
        to: '#1'
      }, {
        title: 'Front-End Tools',
        tags: ['HTML', 'CSS', 'Vue', 'EJS', 'Bootstrap', 'Plotly'],
        description: 'Front-End design has never been my forte, but I am a creative at heart and love to design. I like the modularity of the modern JS frameworks, especially Vue.',
        to: '#2'
      }, {
        title: 'Back-End Tools',
        tags: ['NodeJS', 'Flask', 'Express', 'MongoDB', 'InfluxDB', 'SQL', 'AWS'],
        description: 'I\'m a big fan of the MEVN (Mongo, Express, Vue, Node) stack. AWS is my go to for cloud solutions.',
        to: '#3'
      },
      {
        title: 'Python Libraries',
        tags: ['pandas', 'numpy', 'scipy', 'scikit-learn', 'open-cv', 'tsfresh'],
        description: 'I have spent a lot of time in Python doing signal processing and machine learning, but I have also spun up a few Flask servers and pulled data from web apis. ',
        to: '#4'
      },
      {
        title: 'Other Tools',
        tags: ['Android', 'Unity', 'SteamVR', 'Wireshark', 'Git', 'SVN'],
        description: 'I\'ve made countless Android apps, a VR Shooting Range and had to dive deep into network traffic.',
        to: '#5'
      }]
    }
  }
}
</script>
