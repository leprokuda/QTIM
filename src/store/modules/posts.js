import axios from "axios";
import router from "@/router";

export default {
  state: {
    posts: [], // Все посты
    post: {}, // Один пост
    currentPage: 1, // Текущая страница
    postsPerPage: 10, // Количество постов на странице
  },

  getters: {
    posts(state) {
      return state.posts
    },

    post(state) {
      return state.post
    },

    currentPage(state) {
      return state.currentPage
    },

    postsPerPage(state) {
      return state.postsPerPage
    },

    totalPages(state) {
      return Math.ceil(state.posts.length / state.postsPerPage)
    },
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },

    setPost(state, post) {
      state.post = post
    },

    savePostToLocalStorage(state) {
      localStorage.setItem("savedPost", JSON.stringify(state.post))
    },

    setCurrentPage(state, page) {
      state.currentPage = page
    }
  },

  actions: {
    async getPosts(ctx) {
      ctx.commit("updateShowPreloader", true)
      try {
        const response = await axios.get(
          `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts`
        )
        ctx.commit("setPosts", response.data)
      } catch (error) {
        console.error(error)
      } finally {
        ctx.commit("updateShowPreloader", false)
      }
    },

    async getPost(ctx, postId) {
      ctx.commit("updateShowPreloader", true)
      try {
        const response = await axios.get(
          'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/' + postId
        )

        ctx.commit("savePostToLocalStorage")
        ctx.commit("setPost", response.data)

        await router.push({path: '/posts/' + postId})
      } catch (error) {
        console.error(error)
      } finally {
        ctx.commit("updateShowPreloader", false)
      }
    }
  }
}