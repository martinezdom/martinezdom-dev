import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import StudiesView from "../views/StudiesView.vue";
import ContactView from "../views/ContactView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/",
      name: "experience",
      component: ExperienceView,
    },
    {
      path: "/",
      name: "studies",
      component: StudiesView,
    },
    {
      path: "/",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;
