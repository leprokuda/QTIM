<template>
  <Preloader v-if="showPreloader"/>
  <div class="main" v-else>
    <div class="posts">
      <Post
          v-for="post in paginatedPosts"
          :key="post.id"
          :post="post"
      />
    </div>
    <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @paginate="loadPostsForPage"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

import Post from "@/components/Post.vue";
import Pagination from "@/components/Pagination.vue";
import Preloader from "@/components/Preloader.vue";

export default {
  components: {Preloader, Pagination, Post},

  computed: {
    ...mapGetters(["posts", "currentPage", "totalPages", "postsPerPage", "showPreloader"]),

    paginatedPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage
      const endIndex = startIndex + this.postsPerPage
      return this.posts.slice(startIndex, endIndex)
    },
  },

  methods: {
    ...mapActions(["getPosts"]),

    loadPostsForPage(page) {
      this.getPosts()
      this.$store.commit("setCurrentPage", page)
    }
  },

  created() {
    this.loadPostsForPage(1)
  },
}
</script>

<style scoped>
.main {
  width: 100%;
  margin: 20px auto;
}

.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
</style>