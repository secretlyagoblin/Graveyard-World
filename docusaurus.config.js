// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Graveyard World',
  tagline: '',
  url: 'http://graveyard.wiki',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'secretlyagoblin', // Usually your GitHub org/user name.
  projectName: 'graveyard-world', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/secretlyagoblin/graveyard-world/tree/main/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 20,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/secretlyagoblin/graveyard-world/tree/main/',
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


      
      navbar: {
        title: 'Graveyard World',
        items: [
          {
            to: 'docs/category/realms',
            position: 'left',
            label: 'World',
          },

          {
            to: 'docs/category/pcs',
            position: 'left',
            label: 'Characters',
          },

          {
            to: 'docs/artifacts/abyssal-crown',
            position: 'left',
            label: 'Artifacts',
          },

          {
            to: 'docs/rules/darkvision',
            position: 'left',
            label: 'Rules',
          },

          {to: '/blog', label: 'Adventure Log', position: 'left'},
          {
            href: 'https://github.com/secretlyagoblin/graveyard-world',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wandering Road Games. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
