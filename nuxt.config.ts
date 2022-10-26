// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap",
        },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        {
          children: ":root { font-family: 'Noto Sans', sans-serif; }",
          type: "text/css",
        },
      ],
    },
  },
  content: {
    watch: {
      ws: {
        hostname: "localhost",
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  experimental: {
    writeEarlyHints: false,
  },
  build: {
    transpile: ["swiper"],
  },
  server: {
    port: 3053,
  },
});
