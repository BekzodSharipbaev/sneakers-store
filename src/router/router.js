import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Favorites from "@/pages/Favorites.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/favorites",
    component: Favorites,
    name: "favorites",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
