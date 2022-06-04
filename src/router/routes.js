const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    //component: () => import("pages/IndexPage.vue"),
  },

  {
    path: "/test-result/2xDy-46mOm1xT8WV0mPL3",
    component: () => import("pages/Results.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
