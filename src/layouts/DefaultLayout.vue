<template>
  <v-layout>
    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-layout>
</template>
