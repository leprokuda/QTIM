import { createStore } from 'vuex'

import posts from "@/store/modules/posts";

import preloader from "@/store/modules/preloader";

export default createStore({
  modules: {
    posts,
    preloader
  }
})