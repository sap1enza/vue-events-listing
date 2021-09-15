import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "event-list",
      component: () => import("../views/EventList.vue"),
    },
    {
      path: "/event/:id",
      name: "event-show",
      component: () => import("../views/EventShow.vue"),
      props: true,
    },
    {
      path: "/event/create",
      name: "event-create",
      component: () => import("../views/EventCreate.vue"),
    },
  ],
});
