<template>
  <v-footer color="transparent">
    <v-container>
      <div class="d-flex flex-wrap align-center justify-center font-weight-bold text-uppercase body-2">
        <router-link to="#section-home" class="text-decoration-none mx-2 mb-1">Home</router-link>
        <router-link to="#section-about" class="text-decoration-none mx-2 mb-1">About</router-link>
        <router-link to="#section-skills" class="text-decoration-none mx-2 mb-1">Skills</router-link>
        <router-link to="#section-experience" class="text-decoration-none mx-2 mb-1">Experience</router-link>
        <router-link to="#section-projects" class="text-decoration-none mx-2 mb-1">Projects</router-link>
      </div>
      <div class="d-flex align-center justify-center mt-4">
        <router-link to="/linkedin" target="_blank" style="text-decoration: none;"> <v-btn
          icon
          color="secondary lighten-2"
          class="mx-1"
          style="background-color:#27272f;"
        ><v-icon>mdi-linkedin</v-icon></v-btn></router-link>
        <router-link to="/github" target="_blank" style="text-decoration: none;"><v-btn
          icon
          color="secondary lighten-2"
          class="mx-1"
          style="background-color:#27272f;"
        ><v-icon>mdi-github</v-icon></v-btn></router-link>
        <router-link to="/stackoverflow" target="_blank" style="text-decoration: none;"><v-btn
          icon
          color="secondary lighten-2"
          class="mx-1"
          style="background-color:#27272f;"
        ><v-icon>mdi-stack-overflow</v-icon></v-btn></router-link>
      </div>
      <div class="d-flex flex-column flex-sm-row align-center justify-center mt-4 overline">
        <div class="secondary--text">© 2021 Cody G. Feltch. All rights reserved.</div>
      </div>
    </v-container>
  </v-footer>
</template>
