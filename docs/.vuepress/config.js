const { description } = require("../../package")

module.exports = {
  title: "opensoundcloud",
  description: description,
  theme: "default-prefers-color-scheme",
  head: [
    ["meta", { name: "theme-color", content: "#0189E3" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    [
      "link",
      { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png" },
    ],
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" },
    ],
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "#0061d4" }],
    ["link", { rel: "shortcut icon", href: "/icons/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#0061d4" }],
    ["meta", { name: "msapplication-config", content: "/icons/browserconfig.xml" }],
    ["meta", { name: "theme-color", content: "#282c34" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" }],
  ],
  themeConfig: {
    prefersTheme: "dark",
    repo: "cloudr-app/opensoundcloud",
    docsDir: "docs",
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
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "vuepress-plugin-smooth-scroll"
  ],
}
