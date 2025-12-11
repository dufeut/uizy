import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "U-izy",
  tagline: "Tiny footprint, limitless possibilities",
  favicon: "img/logo.png",

  future: {
    v4: true,
  },

  url: "https://dufeut.github.io",
  baseUrl: "/uizy/",

  organizationName: "dufeut",
  projectName: "uizy",
  trailingSlash: false,

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/dufeut/uizy/tree/main/docs/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/uizy-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "U-izy",
      logo: {
        alt: "Uizy Logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://github.com/dufeut/uizy",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/getting-started",
            },
            {
              label: "Display",
              to: "/utilities/display",
            },
            {
              label: "Grid System",
              to: "/utilities/grid",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/dufeut/uizy",
            },
            {
              label: "NPM",
              href: "https://www.npmjs.com/package/@dufeut/uizy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Uizy. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "css"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
