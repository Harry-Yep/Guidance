// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '生活指北',
    tagline: 'OK 的生活全记录',
    url: 'https://life.okis.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'https://cdn.harrly.com/favicon.ico',

    organizationName: 'Harry-Yep',
    projectName: 'Guidance',

    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    scripts: [
        {
            async: true,
            'data-token': 'S9P38M4PA9OD',
            src: 'https://splitbee.hode.co.uk/sb.js',
        },
    ],

    plugins: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                language: ['en', 'zh'],
            },
        ],
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/Harry-Yep/Guidance/tree/main/docs',
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/Harry-Yep/Guidance/tree/main/blog',
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
            // announcementBar: {
            //     id: '',
            //     content: ``,
            // },
            metadata: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
                { name: 'description', content: 'Guidance' },
                { name: 'author', content: 'Harry Yep' },
                { name: 'copyright', content: 'Copyright © 2022 Harry Yep.' },
                { property: 'og:title', content: 'OK 的生活全记录' },
                { property: 'og:description', content: "Harry Yep's Guidance" },
            ],
            navbar: {
                title: 'Guidance',
                logo: {
                    alt: 'logo',
                    src: 'https://cdn.harrly.com/favicon.ico',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/Harry-Yep/Guidance',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Harry-Yep/Guidance',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Harry Yep. All rights reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
