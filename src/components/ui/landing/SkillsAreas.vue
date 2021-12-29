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
        description: 'I\'ve been working with web technology since college, initially using conventional HTML/CSS/JS for static sites. I\'ve recently implemented MEVN and MERN stacks for complicated web dashboards and interfaces.'
      }, {
        icon: 'mdi-cellphone',
        title: 'Mobile Development',
        description: 'I\'ve created Android apps for physiological data collection for the Army Research lab and Tanzen Medical. My apps have communicated with BLE devices, utilized native device sensors, stored data and interfaced with web APIs.'
      }, {
        icon: 'mdi-database',
        title: 'Database Design',
        description: 'Data storage, transmission and processing has been integral to most of my projects. As a result I\'ve worked with many differnet SQL and No-SQL storage solutions, and designed schema for both time-series and relational databases.'
      }, {
        icon: 'mdi-waveform',
        title: 'Signal Processing',
        description: 'I\'ve been doing signal processing since my time as an Electrical Engineering student. I\'m experienced at cleaning, processing (i.e. fitering, transforming, etc.) and preparing data for classification.'
      }, {
        icon: 'mdi-math-compass',
        title: 'Statistics & Machine Learning',
        description: 'I studied machine learning and pattern recognition concepts, and applied them in computer vision and robotics courses. I\'ve created models for binary and multi-label classification of physiological data (EEG, Movement) for Tanzen Medical.'
      }, {
        icon: 'mdi-access-point-network',
        title: 'Data Communications & Networking',
        description: 'My work for the Army Research Lab and Tanzen has revolved around the transmission of data for storage and processing. I\'ve written applicaitons for BLE communication, multi-cast discovery, data broadcasting and TCP/IP sockets.'
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