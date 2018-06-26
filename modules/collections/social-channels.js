const list = {
  'facebook': {
    url: 'https://www.facebook.com'
  },
  'twitter': {
    url: 'https://www.twitter.com'
  },
  'instagram': {
    url: 'https://www.instagram.com'
  },
  'youtube': {
    url: 'https://www.youtube.com'
  },
  'telegram': {},
  'yahoo': {},
  'skype': {},
  'meetup': {}
}

export default {
  list,
  names: (() => {
    return Object.keys(list).sort()
  })()
}