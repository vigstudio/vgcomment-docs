export default {
    title: 'VgComments Docs',
    description: 'VgComments is a Laravel Package for adding comments to your application.',
    themeConfig: {
        sidebar: {
            '/': [
                {
                    text: '',
                    items: [
                        {text: 'Overview', link: 'index.md'},
                        {text: 'Installation', link: 'installation.md'},
                        {text: 'Config', link: 'config.md'},
                        {text: 'Usage', link: 'usage.md'},
                    ]
                },
            ],
            '/livewire-comments/': [
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Overview', link: '/livewire-comments/index.md'},
                        {text: 'Installation', link: '/livewire-comments/installation.md'},
                        {text: 'Configuration', link: '../config.md'},
                        {text: 'Usage', link: '/livewire-comments/usage.md'},
                    ]
                },
            ],
        }
    }
}