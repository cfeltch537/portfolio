<template>
  <v-card
    class="pa-2"
    :to="post.link"
    target="_blank"
    color="#33333d" 
    outlined
    dark
  >
    <v-img :src="post.image" height="40%" class="rounded" style="background-color:#373740;"></v-img>
    <div class="text-caption d-flex mt-1">
      <!-- {{ post.created }} - {{ post.readtime }} read -->
    </div>

    <div class="pt-2">
      <h2>{{ post.title }}</h2>
      <p class="text-secondary font-weight-regular mt-1 mb-2">
        {{ post.content }}
      </p>

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
<style scoped>
.text-secondary{
  color: rgba(255, 255, 255, 0.7)
}
</style>