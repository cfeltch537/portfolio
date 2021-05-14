<template>
  <v-card
    class="pa-2"
    :to="post.link"
    target="_blank"
    color="#33333d" 
    outlined
  >
    <v-img :src="post.image" height="250" class="rounded" style="background-color:#373740;"></v-img>
    <div class="secondary--text text--lighten-1 text-caption d-flex mt-1">
      {{ post.created }} - {{ post.readtime }} read
    </div>

    <div class="pt-2">
      <div class="title font-weight-bold text-h5">{{ post.title }}</div>
      <div class="secondary--text text--lighten-1 text-body-1 mt-1 mb-2">
        {{ post.content }}
      </div>

      <v-chip 
        v-for="(tag, j) in tags"
        :key="j"
        color="#27272f"
        class="mr-1 mb-1"
        small
        label
      >
        {{ tag }}
      </v-chip>

      <!-- <div class="d-flex align-center mt-4">
        <div class="text-body-2">
          Author:
          <span class="font-weight-bold">{{ user.name }}</span>
        </div>
      </div> -->
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    post: {
      type: Object,
      default: () => {}
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>
