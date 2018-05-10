module.exports = {
  base: '/ngs-ninja/',
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

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
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
