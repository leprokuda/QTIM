<template>
  <div class="post-detail">
    <h2>{{ post.title }}</h2>
    <img :src="post.image" :alt="'Image-' + post.id">
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(['post'])
  },

  methods: {
    ...mapActions(["getPost"]),

    // Обработчик события перед закрытием или обновлением страницы
    beforeUnloadHandler() {
      this.$store.commit("savePostToLocalStorage")
    },

    // Загружаем пост из хранилища или с сервера при создании компонента
    async loadPost() {
      const postId = this.$route.params.postId;
      const savedPost = localStorage.getItem("savedPost")
      if (savedPost && JSON.parse(savedPost).id === postId) {
        this.$store.commit("setPost", JSON.parse(savedPost))
      } else {
        await this.getPost(postId)
        localStorage.setItem("savedPost", JSON.stringify(this.post))
      }
    }
  },

  async created() {
    // Загрузка поста при создании компонента
    await this.loadPost()

    // Добавление обработчика события перед закрытием или обновлением страницы
    window.addEventListener("beforeunload", this.beforeUnloadHandler)
  },

  // Удаление обработчика события при уничтожении компонента
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.beforeUnloadHandler)
  }
}
</script>

<style scoped>
.post-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}
</style>