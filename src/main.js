import { createApp } from "vue";
import App from "./App.vue";
import "../style.css";
import { createRouter, createWebHistory } from "vue-router";
import router from './router/index';

createApp(App)
  .use(router)
  .mount("#app");
