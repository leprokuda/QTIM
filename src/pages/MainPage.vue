<template>
<div class="main">
  <MainButton :label="'Показать посты'" :btnClass="'primary'" :type="'button'" @click="showPosts"/>
</div>
</template>

<script>
import MainButton from "@/components/ui/MainButton.vue";
import {mapActions} from "vuex";
import router from "@/router";

export default {
  components: {MainButton},

  methods: {
    ...mapActions(['getPosts']),

    showPosts() {
      this.getPosts()
      router.push({path: '/posts'})
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 64px 0;
}
</style>