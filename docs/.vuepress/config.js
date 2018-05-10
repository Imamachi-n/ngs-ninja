module.exports = {
    title: 'NGS Ninja',
    description: 'Next-generation sequencing data analysis wiki',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Get Started', link: '/About/' },
        { text: 'Tools', link: '/Tools/' },
        { text: 'Workflow', link: '/Workflow/' },
      ],
      // Assumes GitHub. Can also be a full GitLab url.
      repo: 'vuejs/vuepress',
      // Customising the header label
      // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
      repoLabel: 'GitHub',

    },
    head: [
      ['link', { rel: 'icon', href: `/hero.png` }]
    ]
    
  }
