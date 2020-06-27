import Vue from "vue";
import VueApollo from "vue-apollo";
import VueRouter from "vue-router";

import apolloClient from "./vue-apollo";

import App from "./App.vue";

Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Items.vue")
    },
    {
      path: "/item/:id",
      components: require("./containers/Item.vue")
    },
    {
      path: "/category/:id",
      components: require("./containers/Category.vue")
    }
  ]
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");
