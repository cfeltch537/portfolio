<template>
  <div>
    <v-navigation-drawer v-model="drawer" app color="var(--v-background-base)" temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">Menu</v-subheader>
        <v-list-item v-for="(item, index) in menu" :key="index" :to="item.link">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-btn
      class="d-md-none drawer-button"
      color="var(--v-background-base)"
      outlined
      fab
      @click="drawer = !drawer"
    >
      <v-icon left color="var(--v-accent-base)">mdi-format-list-bulleted-square</v-icon>
    </v-btn>

    <v-app-bar app color="var(--v-background-base)" height="55" flat>
      <v-container class="py-0 px-0 px-sm-2 fill-height" :fluid="isFluid">
        <router-link to="#section-home" class="d-flex align-center text-decoration-none mr-2">
          <img
            id="logo"
            src="@/assets/images/icon.svg"
            alt=""
            height="35"
            class="mr-1"
          >
        </router-link>

        <div class="d-none d-md-block">
          <v-btn
            v-for="(item, index) in menu"
            :key="index"
            text
            :to="item.link"
            class="mx-1"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <v-spacer></v-spacer>

      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { menu2 as menu } from './menus.js'

export default {
  props: {
    isFluid: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drawer: null,
      menu
    }
  }
}
</script>

<style scoped>

.drawer-button {
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 6;
}
</style>
