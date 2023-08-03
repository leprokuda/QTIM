<template>
  <div class="post">
    <a class="post__link" @click="redirectToPostDetail(post.id)">
      <img
          :src="post.image"
          :alt="'Image-' + post.id"
      >
      <h3>{{ post.title }}</h3>
      <p>{{ post.preview }}</p>
      <p>{{ post.description }}</p>
    </a>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: ["post"],

  methods: {
    ...mapActions(['getPost']),

    redirectToPostDetail(postId) {
      this.getPost(postId)
    }
  }
}
</script>

<style scoped>
.post {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  padding: 16px;
  border-radius: 8px;
  background: #E9F3FA;
  box-shadow: -4px 4px 10px 0px rgba(4, 44, 73, 0.08);
}

.post__link {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>