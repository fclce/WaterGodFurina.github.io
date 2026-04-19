import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FCL玩家社区',
  tagline: 'Fold Craft Launcher 玩家交流社区',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://fclce.lemwood.cn/',
  baseUrl: '/',

  organizationName: 'fclce',
  projectName: 'fclce.github.io',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/fclce/WaterGodFurina.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/background.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FCL玩家社区',
      logo: {
        alt: 'FCL玩家社区 Logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/fclce/WaterGodFurina.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: '/docs',
            },
            {
              label: '群规详情',
              to: '/docs/details',
            },
            {
              label: '插件',
              to: '/docs/download',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'QQ频道 - FCL玩家社区',
              href: 'https://pd.qq.com/s/by8q2vt9o?b=9',
            },
            {
              label: 'QQ频道 - FCL Fold Craft Launcher玩家社区',
              href: 'https://pd.qq.com/s/c7mbyqw2i?b=9',
            },
            {
              label: 'QQ群 - Fold Craft Launcher玩家交流1群',
              href: 'https://qun.qq.com/universal-share/share?ac=1&authKey=GPGaYJx%2FojN98OBHXM84skP%2Fkx7CwTepXSThVCyKMXMe6L2f6j6nuHVBHsJ5EHAX&busi_data=eyJncm91cENvZGUiOiI3NDM0NjAwNzEiLCJ0b2tlbiI6InZrOXZGd2VtZ3c3RktFYkJDQTJrMzNSdWxrWWNVM2xXZTVVOHpDcVRTSVVoU2I3bDArV2pocGVVUkd3N0NVdHQiLCJ1aW4iOiIzNDQyMzU5NDA3In0%3D&data=Kf-H8QrwTh2XQuB-7FzZK2VYcn1gdjJE0tB8BIY7-yZEs69EoLzs4jg7pSswNdzUOMdCqbfaYeWv6Ul41WTOlQ&svctype=4&tempid=h5_group_info',
            },
            {
              label: 'QQ群 - Fold Craft Launcher玩家交流2群',
              href: 'https://qun.qq.com/universal-share/share?ac=1&authKey=Fpo4OtDVWVmdeBah9K3qKD1ukMosUHdRr6IgmFpwfp1KNrVfcshJg60LqVye%2Fwvq&busi_data=eyJncm91cENvZGUiOiI3NDM3NDYwODYiLCJ0b2tlbiI6IlZMM0RaMzdkQ25VenliRzRURXJqaVdvU3Y5dlFmRlUyb1phOGVGSUR3TFQrRVFBSTVwUGZUWXR4SzJpNmp5aHkiLCJ1aW4iOiIzNDQyMzU5NDA3In0%3D&data=61iTS_zvBPX2mDCOUL7IjgjgWJBHLU3CxlQBFf-7WopzGdpf-dPGxRuqrzxDCSpPMsoc1-anoHMAC8qHQb8HPA&svctype=4&tempid=h5_group_info',
            },
          ],
        },
      ],
      copyright: `
        <div style="margin-top: 1rem; border-top: 1px solid #444; padding-top: 1rem">
          <div>
            版权所有 © ${new Date().getFullYear()} by fcl玩家社区
          </div>
          <div>
            此网站基于 <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a> 开发.
          </div>
          <div>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">新ICP备2024015133号-3</a>
          </div>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
