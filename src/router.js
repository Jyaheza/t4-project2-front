import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/maintain",
      name: "maintain",
      component: () => import("./views/StoryMaintain.vue"),
    },
    {
      path: "/createresume",
      name: "createresume",
      component: () => import("./views/CreateResume.vue"),
    },
    {
      path: "/resumetemplate",
      name: "resumetemplate",
      component: () => import("./views/ResumeTemplate.vue"),
    },
    {
      path: "/stories/:id",
      name: "readStory",
      component: () => import("./views/ReadStory.vue"),
    },
    {
      path: "/resumes",
      name: "resumes",
      component: () => import("./views/ResumeList.vue"),
    },
    {
      path: "/characters",
      name: "characters",
      component: () => import("./views/StoryCharacters.vue"),
    },
    {
      path: "/countries",
      name: "countries",
      component: () => import("./views/StoryCountries.vue"),
    },
    {
      path: "/languages",
      name: "languages",
      component: () => import("./views/StoryLanguages.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("./views/StorySettings.vue"),
    },
    {
      path: "/storypdf",
      name: "storypdf",
      component: () => import("./views/StoryPDF.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/UserProfile.vue"),
    },
  ],
});

export default router;
