// See more in https://github.com/ktquez/vuepress-theme-ktquez#themeconfig
const ja = require('./locales/ja/config')


module.exports = {
  locales: {
    '/': ja,
  },
  serviceWorker: {
    updatePopup: {
      message: "New content 🎉🎉",
      buttonText: "Update"
    }
  },
  url: `https://www.fizzee.jp/`,
  cdn: '',
  blackWhite: true,
  topNavigation: false,
  searchMaxSuggestions: 7,
  responsive: {
    active: false,
    ext: 'png',
    breakpoints: []
  },
  lazyLoad: {},
  share: {
    facebook: {
      appId: `fizzee.jp`,
      version: 'v3.1'
    }
  }
  // elevator: {
  //   duration: 4000,
  //   mainAudio: '/music/elevator.mp3',
  //   endAudio: '/music/ding.mp3'
  // }
}
