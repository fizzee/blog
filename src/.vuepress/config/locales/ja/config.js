const ads = require('./ads')

module.exports = {
  languages: {
    label: 'Japanese',
    shortname: 'ja'
  },
  translation: {
    news_title: 'Receive our articles, videos and more directly in your inbox and stay up to date.',
  },
  ads,
  logo: {
    name: 'fizzee-logo',
    ext: 'png',
    alt: 'Logo'
  },
  share: {
    facebookCaption: '',
    twitterVia: '',
  },
  newsletter: {
    provider: 'mailchimp',
    action: ''
  },
  copy: `2019 © fizzee -
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          MADE WITH VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'fizzee',
      items: [
        {
          label: 'ABOUT',
          path: '/about/'
        },
        {
          label: 'CATEGORIES',
          path: '/categories/'
        },
        {
          label: 'CONTACT',
          path: '/contact/'
        }
      ]
    },
    nav2: {
      title: 'Link',
      items: [
        {
          label: 'FaceBook',
          link: 'https://www.facebook.com/fizzee.jp'
        }
      ]
    }
  },
  social: [
    {
      name: 'twitter',
      link: `https://www.twitter.com/fizzee_jp`
    },
    {
      name: 'github',
      link: `https://www.github.com/fizzee`
    }
  ]
}
