// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {},
  },
  typescript: {
    strict: true,
  },
  modules: ["@nuxt/content"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  // css: ["@/assets/css/theme.scss"], // Scss 全局变量
});
