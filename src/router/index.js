import { createRouter, createWebHistory } from 'vue-router';

import PostDetailPage from "@/pages/PostDetailPage.vue";

import PostsPage from "@/pages/PostsPage.vue";

import MainPage from "@/pages/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "Главная",
    component: MainPage,
  },
  {
    path: "/posts",
    name: "Все посты",
    component: PostsPage,
  },
  {
    path: "/posts/:postId",
    name: "Детализация поста",
    component: PostDetailPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
