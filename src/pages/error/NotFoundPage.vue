<template>
  <v-card class="text-center w-full error-page pa-3">
    <v-img :src="require('@/assets/images/404-illustration.svg')" max-height="300" contain />
    <div class="display-2 mt-10">How did you get here?</div>
    <div class="mt-3 mb-6">Sorry we can't seem to find the page you're looking for.</div>
    <v-btn to="/" block large color="secondary">Send me Back</v-btn>
  </v-card>
</template>

<style>
.error-page {
  max-width: 500px;
}
</style>
