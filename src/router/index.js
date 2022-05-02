import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/listar",
      name: "list",
      component: () => import("../views/ListProductsView.vue"),
    },
    {
      path: "/criar",
      name: "create",
      component: () => import("../views/CreateProductView.vue"),
    },
  ],
});

export default router;
