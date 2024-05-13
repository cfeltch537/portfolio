<template>
  <v-sheet color="transparent">
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Skills</div>
        <h2 class="text-h3 text-lg-h2">Technology Areas</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">Some of the engineering technologies I have had the pleasure of working with</div>
        </v-responsive>
      </div>
      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <v-card class="py-4 px-2 fill-height" color="#33333d" outlined>
            <div class="d-flex fill-height">
              <div class="mr-2" style="display:flex;">
                <v-sheet color="#33333d" rounded class="pa-1 d-flex">
                  <v-icon class="align-middle" large color="#64ffda">{{ item.icon }}</v-icon>
                </v-sheet>
              </div>
              <div>
                <div class="text-h5 font-weight-bold">{{ item.title }}</div>
                <div class="font-weight-regular mt-1 text-secondary" >{{ item.description }}</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      features: [{
        icon: 'mdi-xml',
        title: 'Web Development',
        description: 'Extensive experience with full-stack web development. Started with foundational HTML/CSS/JS for static websites. Evolved to implementing complex dashboards and progressive web apps in React and Vue, with Node/Express or AWS backends.'
      }, {
        icon: 'mdi-cellphone',
        title: 'Mobile Development',
        description: 'Developed Android applications for physiological data collection at the Army Research Lab and Tanzen Medical. Leveraged Bluetooth Low Energy (BLE) communication, native device sensors, and web API integration for data collection and interaction.'
      }, {
        icon: 'mdi-database',
        title: 'Database Design',
        description: 'Adept in data management, leveraging diverse SQL and NoSQL solutions to address project-specific storage, transmission, and processing needs. Proven ability to design efficient schemas for time-series and relational databases.'
      }, {
        icon: 'mdi-waveform',
        title: 'Signal Processing',
        description: 'Strong background in signal processing, with experience gained from my Electrical Engineering studies and subsequent projects. Proven ability to clean, process (i.e. fitering, transforming, etc.) and prepare data for classification.'
      }, {
        icon: 'mdi-math-compass',
        title: 'Statistics & Machine Learning',
        description: 'Studied machine learning concepts in coursework. Developed machine learning models for binary and multi-label classification of physiological time-series data at ARL and Tanzen Medical. Worked extensively with pandas, numpy and scikit-learn.'
      }, {
        icon: 'mdi-access-point-network',
        title: 'Data Communications & Networking',
        description: 'Designed and implemented applications for data transmission protocols (Bluetooth/BLE communication, multicast discovery, data broadcasting, TCP/IP sockets) at the Army Research Lab and Tanzen Medical, facilitating efficient data transmission and device discovery.'
      }]
    }
  }
}
</script>
<style scoped>
.fill-height{
  height: 100%;
}
.text-secondary{
  color: rgba(255, 255, 255, 0.7)
}
</style>
