import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "@/components/Index.vue";
import AddSmoothie from "@/components/AddSmoothie.vue"
import EditSmoothie from "@/components/EditSmoothie.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/add-smoothie",
    name: "AddSmoothie",
    component: AddSmoothie
  },
  {
    path: "/edit-smoothie/:smoothie_slug",
    name: "EditSmoothie",
    component: EditSmoothie
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
