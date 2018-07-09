const client = require('./index.js')
const responseObject = {
  'gg': 'Eh....just kidding! Yeah, GG!'
}

client.on('message', (message) => {
  if (responseObject[message.content]) {
    message.channel.send(responseObject[message.content])
  }
})
