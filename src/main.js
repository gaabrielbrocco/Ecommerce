import { registerPlugins } from "@/plugins";
import App from "./App.vue";
import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { vMaska } from "maska";

const app = createApp(App);

registerPlugins(app);
app.directive("maska", vMaska);
app.use(router).use(vuetify).mount("#app");
