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
        description: 'Past work on MATLAB simulations and C#/Java/Python desktop applications. Now working on full-stack web, mobile, embedded and machine learning development.',
        to: '#1'
      }, {
        title: 'Front-End Web',
        tags: ['Vue', 'React', 'MUI', 'Bootstrap', 'html/css/js'],
        description: 'Started development using HTML/JS/CSS and jQuery. Extensive experience using Vue and React for complicated dashboards and progressive web applications.',
        to: '#2'
      }, {
        title: 'Back-End Web',
        tags: ['Node', 'Express', 'Mongo', 'Flask', 'Influx', 'SQL', 'GraphQL', 'Dynamo', 'AWS'],
        description: 'Experience developing REST APIs using Node and Express. Currently enjoy AWS Amplify for API generation. Created Flask servers for analytics microservices.',
        to: '#3'
      },
      {
        title: 'Data Science & ML',
        tags: ['pandas', 'numpy', 'scipy', 'scikit-learn', 'open-cv', 'tsfresh'],
        description: 'Significant experience with signal processing, data analysis and machine learning work. Wrote code for data aggregation, validation, cleaning, analysis, and development of machine learning classifiers. ',
        to: '#4'
      },
      {
        title: 'Other Tools',
        tags: ['Android', 'Unity', 'Qt','SteamVR', 'Wireshark', 'Git', 'SVN', 'Jira', 'Scrum'],
        description: 'Developer countless Android apps for data collection. Created a VR shooting simulator in Unity with SteamVR. Experience working in Scrum teams, using Jira.',
        to: '#5'
      }]
    }
  }
}
</script>
