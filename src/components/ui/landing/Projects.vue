<template>
  <v-container class="py-10">
    <div style="width: 80px; height: 4px" class="mb-3 accent" />
    <h2 class="text-h4 mb-3">Projects</h2>
    <div class="text-h6 text-lg-h5 mt-4">A subset of the project I have worked on.</div>
    <div class="text-h8 text-lg-h7 mb-3"><i>Note: I cannot show images/screenchots of the actual end-product for some of these as they are proprietaty.</i></div>

    <v-row>
      <v-col v-for="(card, i) in cards" :key="i" cols="12" md="4">
        <!-- card example -->
        <Card4 v-bind="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card4 from '@/components/ui/landing/ProjectsCards.vue'

export default {
  components: {
    Card4
  },
  data() {
    return {
      cards: [{
        user: {
          name: 'Cody Feltch'
        },
        post: {
          category: 'Business',
          created: 'Sep 21, 2020',
          readtime: '13 min',
          image: './images/cards/resteaze.png',
          title: 'RestEaze Sleep Monitor',
          content: 'A wearable device, mobile app, web service and machine learners. Designed as an en-to-end solution for monitoring biomarkers of sleep disorder through leg movements during sleep.',
          link: '/tanzen'
        },
        tags: ['ARM', 'BLE', 'Android/iOS', 'SQL', 'MEVN', 'Machine Learning']
      }, {
        user: {
          name: 'Cody Feltch'
        },
        post: {
          category: 'Music',
          created: 'Apr 11, 2020',
          readtime: '2 min',
          image: './images/cards/cymot_site.png',
          title: 'CyMOT',
          content: 'A Learning Management System (LMS) developed to deliver manufacturing specific cybersecurity content, built off of the Moodle open-source LMS.',
          link: '/cymot'
        },
        tags: ['AWS (EC2)', 'Apache', 'MySQL', 'PHP', 'HTML/CSS/JS']
      }, {
        user: {
          name: 'Cody Feltch'
        },
        post: {
          category: 'Business',
          created: 'Sep 21, 2020',
          readtime: '13 min',
          image: './images/cards/closed_loop.png',
          title: 'Closed Loop',
          content: 'A platform for prototyping real-time data analysis techniques and visualizations, usin the open-source lab streaming layer (LSL) library for time-synchronized data/event streaming.'        },
        tags: ['Python', 'numpy', 'scipy', 'scikit-learn', 'biosppy']
      }, {
        user: {
          name: 'Cody Feltch'
        },
        post: {
          category: 'Business',
          created: 'Sep 21, 2020',
          readtime: '13 min',
          image: './images/cards/everyday_wear.png',
          title: 'Everyday Wearables',
          content: 'A suite of Android apps and services to record and monitor data from physiological devices (EEG, IMU, Temp, PPG, etc.). Used for psychophysiology studies.'        },
        tags: ['Android', 'BLE', 'Bluetooth  SPP', 'Data Networking']
      }, {
        user: {
          name: 'Cody Feltch'
        },
        post: {
          category: 'Business',
          created: 'Sep 21, 2020',
          readtime: '13 min',
          image: './images/cards/vr_game2.png',
          title: 'VR Shooter',
          content: 'A simulated a shooting range with both friendly and enemy targets appearances. The trials were meant to gausge the users performance, then put them in high and low stress scenarios.'
        },
        tags: ['C#', 'Unity', 'SteamVR', 'HTC Vive', 'Eye Tracking']
      }, {
        user: {
          name: 'Cody Feltch'
        },
        post: {
          category: 'Startups',
          created: 'Apr 11, 2020',
          readtime: '8 min',
          image: './images/cards/web_portfolio.png',
          title: 'Web Portfolio',
          content: 'This site! A personal web portfolio that I\'ve re-designed countless time, to act as a supplement to my resume and playground for web development tools.',
          link: '#section-home'
        },
        tags: ['Vue', 'HTML/CSS/SCSS', 'Bootstrap']
      }]
    }
  }
}
</script>
