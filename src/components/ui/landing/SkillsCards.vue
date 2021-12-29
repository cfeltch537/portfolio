<template>
  <v-card outlined flat class="h-full d-flex flex-column" color="#33333d">
    <v-card-title class="font-weight-bold">
      <div class="flex-grow-1 text-truncate">
        {{ title }}
        <v-divider></v-divider>
      </div>
    </v-card-title>
    <v-card-text class="flex-grow-1">
      <div class="font-weight-regular">
        {{ description }}
      </div>
      <div>
        <v-chip 
          v-for="(tag, j) in tags"
          :key="j"
          color="#27272f"
          class="mr-1 mt-1"
          small
          label
        >
          {{ tag }}
        </v-chip>
      </div>
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn text color="primary" :to="to">View and Apply</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    description: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '#'
    }
  }
}
</script>
