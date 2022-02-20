import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  srcDir: "src/",
  meta: {
    title: "Nuxt3 UI",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=0",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "keywords",
      },
      {
        hid: "description",
        name: "description",
        content: "description",
      },
    ],
    link: [],
    script: [],
  },
  css: ["@/assets/css/index.css"],
  components: ["@/components/"],
  buildModules: ["@vueuse/nuxt", "@unocss/nuxt", "@pinia/nuxt"],
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      ["btn", "m2 cursor-pointer inline-block px-3 py-1 text-center rounded-sm disabled:cursor-default disabled:active:cursor-not-allowed disabled:op50 transition-colors duration-200"],
      ["btn-basic", "text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700 disabled:text-gray-200 disabled:bg-teal-600"],
      ["btn-secondary", "text-teal-600 rounded-sm bg-teal-100 hover:bg-teal-200 focus:bg-teal-200 active:bg-teal-300 disabled:text-gray-600 disabled:bg-teal-200"],
      ["btn-tertiary", "text-teal-600 rounded-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 disabled:text-black-600 disabled:bg-gray-200"],
      ["btn-quaternary", "text-teal-600 rounded-sm hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300 disabled:bg-transparent disabled:text-black-600"],
      ["btn-border", "text-black border border-solid border-gray-500 border-opacity-40 hover:border-teal-600 focus:border-teal-600 active:bg-gray-100 disabled:border-opacity-40"],
      ["btn-dashed", "text-black border border-dashed border-gray-500 border-opacity-40 hover:border-teal-600 focus:border-teal-600 active:bg-gray-100 disabled:border-opacity-40"],
    ],
    rules: [],
  },
});
