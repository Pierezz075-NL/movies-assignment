import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: HomePage },
        {
          path: "/:id",
          name: "movie",
          component: () => import("../pages/MovieDetailPage.vue"),
          props: (route) => ({ id: Number(route.params.id) }),
        },
      ],
})

export default router
