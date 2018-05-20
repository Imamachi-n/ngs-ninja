module.exports = {
  base: '/ngs-ninja/',
  title: 'NGS Ninja',
  description: 'Next-generation sequencing data analysis wiki',
  dest: 'public',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/About/' },
      { text: 'Tools', link: '/Tools/' },
      { text: 'Workflow', link: '/Workflow/' },
    ],
    sidebar: {
      '/About/': genSidebarConfigAbout('About')

    },

    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'Imamachi-n/ngs-ninja',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'GitHub',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'Imamachi-n/ngs-ninja',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to true, set to false to disable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on GitHub',

    theme: 'vue',
    lastUpdated: 'Last Updated',
  },
  head: [
    ['link', { rel: 'icon', href: `/hero.png` }]
  ]
}

function genSidebarConfigAbout (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'test'
      ]
    }
  ]
}