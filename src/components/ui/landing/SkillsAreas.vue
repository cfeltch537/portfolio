<template>
  <v-sheet color="transparent">
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Skills</div>
        <h2 class="text-h3 text-lg-h2">Technology Areas</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">These are some of the engineering technologies that I have had the pleasure of working with.</div>
        </v-responsive>
      </div>
      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <v-card class="py-4 px-2" color="#33333d" outlined>
            <div class="d-flex">
              <div class="mr-2">
                <v-sheet color="#27272f" rounded class="pa-2" dark>
                  <v-icon large color="#64ffda">{{ item.icon }}</v-icon>
                </v-sheet>
              </div>
              <div>
                <div class="text-h5 font-weight-bold">{{ item.title }}</div>
                <div class="font-weight-regular mt-1 " style="color: #adadad;">{{ item.description }}</div>
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
        description: 'I\'ve been working with web technology on and off since college, and have most recently implemented a MEVN stack for a web application including: data storage, user dashboard and a REST API.'
      }, {
        icon: 'mdi-cellphone',
        title: 'Mobile Development',
        description: 'I\'ve created several Android apps from my time working with the Army Research lab, and now at Tanzen. My apps have communicated with BLE devices, stored data and interfaced with web APIs.'
      }, {
        icon: 'mdi-database',
        title: 'Database Design',
        description: 'Data (physiological, event, user, etc.) is at the forefront of my work, and as a result I\'ve worked with many differnet SQL and No-SQL storage solutions.'
      }, {
        icon: 'mdi-waveform',
        title: 'Signal Processing',
        description: 'Since my time as an Electrical Engineering student I have always loved signal processing. I\'m very experienced at cleaning, processing (i.e. fitering, transforming) and preparing data for classification.'
      }, {
        icon: 'mdi-math-compass',
        title: 'Statistics & Machine Learning',
        description: 'In my masters work I studied machine learning and pattern recognitions. In practive I have created models for binary and multi-label classification of physiological data (EEG, Movement).'
      }, {
        icon: 'mdi-access-point-network',
        title: 'Data Communications & Networking',
        description: 'My works has always revolved around data, and I\'ve written applicaitons for BLE communication, multi-cast discovery, data broadcasting and TCP/IP sockets.'
      }]
    }
  }
}
</script>
