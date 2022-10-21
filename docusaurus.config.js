// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rauversion',
  tagline: 'Create your own music industry',
  url: 'https://docs.rauversion.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rauversion', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/rauversion/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: "star_us",
        content:
          '⭐️ If you like rauversion, give it a star on <a href="https://github.com/rauversion/rauversion-phx">GitHub</a> and follow us on <a href="https://twitter.com/rauversion">Twitter</a>!',
        isCloseable: true,
      },
      navbar: {
        title: 'Rauversion Docs',
        logo: {
          alt: 'Rauversion Logo',
          src: 'img/logo.png',
        },

        items: [
          {
            type: 'docsVersionDropdown',
          },
          
          {
            to: "docs/self-hosted",
            activeBasePath: "self-hosted",
            label: "Self Hosted",
            position: "right",
          },
          {
            to: "docs/product",
            activeBaseRegex: "product|user-guide",
            label: "User Guide",
            position: "right",
          },
          {
            to: "docs/contributing-guide",
            activeBasePath: "contributing-guide",
            label: "Contributing Guide",
            position: "right",
          },

          {to: 'https://rauversion.com/articles', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/rauversion/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/rauversion',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/4kCuw7u7gQ',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/rauversion',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Rauversion',
                to: 'https://rauversion.com/',
              },
              {
                label: 'Blog',
                to: 'https://rauversion.com/articles',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rauversion',
              },
            ],
          },
        ],
        copyright: `Copyright © ${(new Date().getFullYear()) == 2022 ? '2022' : '2022 - ' + (new Date().getFullYear()).toString()} <a href="https://rauversion.com" style="color:white">Rauversion.com</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
