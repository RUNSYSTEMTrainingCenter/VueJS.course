import { createApp } from "vue";
import Vue from "vue";

import "./style.css";
import sectionchild from "./components/sectionchild.vue";
import App from "./App.vue";
const app = createApp(App);

Vue.component("section-child", sectionchild);
app.mount("#app");
