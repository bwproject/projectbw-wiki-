import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    head: [
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: `/images/icons/16.png`,}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: `/images/icons/32.png`,}],
    ],
    lang: 'ru_RU',
    title: 'ProjectBW-WiKi',
    description: 'ProjectBW-WiKi',
    port: '8080', //Порт на котором запускается VuePress
    theme: defaultTheme({
        repo: 'bwproject/projectbw-wiki',
        docsRepo: 'https://github.com/bwproject/projectbw-wiki',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        locales: {
            '/': {
                editLinkText: 'Измените эту страницу на GitHub',
                lastUpdatedText: "Последнее обновление",
                notFound: [
                    "Здесь ничего нет.",
                    "Как мы тут оказались?",
                    "Похоже, у нас есть несколько неработающих ссылок."
                ],
                backToHome: "Вернуться на главную",
                openInNewWindow: "открыть в новом окне",
                toggleDarkMode: "переключить темный режим",
                toggleSidebar: "переключить боковую панель",
                contributors: false,
                contributorsText: "Спонсоры",
            },
        },
        logo: 'images/hero.png',
        navbar: [
            {
                text: 'BW WIKI',
                children: [
                    '/welcome/README.md',
                    '/rules/README.md',
                    '/server/README.md',
                    '/login/README.md',
                    '/plugins/README.md',
                    '/bedrock/README.md',
                    '/faq/README.md',
                    '/admins/README.md',

                   				
                ],
            },
            {
                text: 'ProjectBW',
                link: 'https://projectbw.ru/',
            },
            {
                text: 'Recreation',
                link: 'https://rc.projectbw.ru/',
            },
        ],
        sidebar: {
            '/': [
                {
                    text: 'BW WIKI',
                    collapsible: false,
                    children: [						
						'/welcome/README.md',
						'/rules/README.md',
						'/server/README.md',
						'/login/README.md',
						'/plugins/README.md',
						'/bedrock/README.md',
                        '/faq/README.md',
                        '/admins/README.md', 					
						
                    ],
                },
            ],
        },
    }),
    plugins: [
        [
        ],
    ]
})
