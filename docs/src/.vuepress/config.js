const { description } = require("../../package")

module.exports = {
  title: "opensoundcloud",
  description: description,
  theme: "default-prefers-color-scheme",
  head: [
    ["meta", { name: "theme-color", content: "#0189E3" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ],
  themeConfig: {
    prefersTheme: "dark",
    repo: "cloudr-app/opensoundcloud",
    docsDir: "docs/src",
    editLinks: true,
    editLinkText: "edit this page",
    lastUpdated: true,
    sidebarDepth: 2,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "API",
        link: "/api/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "using-utils"],
        },
      ],
      "/api/": [
        {
          collapsable: false,
          children: [""],
        },
      ],
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
}
