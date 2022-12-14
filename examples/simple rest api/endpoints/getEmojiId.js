const webserver = require('rjweb-server')
const emojis = {
  berry: 1,
  apple: 2
}

module.exports = {
  type: webserver.types.get,
  path: '/getemojiid/:text',

  async code(ctr) {
    let emoji = ''
    if (ctr.param.get('text') in emojis) emoji = emojis[ctr.param.get('text')]
    else return ctr.print('couldnt find emoji')

    return ctr.print(emoji)
  }
}