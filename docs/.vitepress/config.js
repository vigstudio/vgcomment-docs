export default {
    title: 'VgComments Docs',
    description: 'VgComments is a Laravel Package for adding comments to your application.',
    themeConfig: {
        sidebar: {
            '/livewire-comments': [
                // {
                //     text: 'Changelog',
                //     collapasble: true,
                //     items: [
                //         {text: '1.0.0', link: '/livewire-comments/1.0.0/index.md'},
                //     ]
                // },
                {
                    text: 'Getting Started',
                    items: [
                        {text: 'Installation', link: '/livewire-comments/index.md'},
                        {text: 'Configuration', link: '/livewire-comments/config.md'},
                        {text: 'Usage', link: '/livewire-comments/usage.md'},
                    ]
                },
            ],

        }
    }
}