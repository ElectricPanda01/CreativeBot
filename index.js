require('dotenv').config()
const fs = require('fs')
const Discord = require('discord.js')
const bot = new Discord.Client({disableEveryone: true})
const listeners = [
  'buy', 'sell', 'requestroles',
  'showcase', 'request'
]
bot.commands = new Discord.Collection()
const RedisDB = require('./RedisDB.js')
const data = new RedisDB()

fs.readdir('./commands/', (err, files) => {

  if (err) console.log(err)
  let jsfile = files.filter(f => f.split('.').pop() === 'js')
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.")
    return
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded!`)
    bot.commands.set(props.help.name, props)
  })
})

const responseObject = {
  'thic': "Yeah. Thicccc",
  'oof': "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start."
}
bot.on('message', (message) => {
  if (responseObject[message.content]) {
    message.channel.send(responseObject[message.content])
  }
})

bot.on('ready', () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`)
  console.log(`Prefix: ${process.env.PREFIX}`)
  bot.user.setActivity('The Channels!', {type: 'WATCHING'})
})

bot.on('message', message => {
  if (message.author.bot) return
  // listeners.forEach(name => {
  //   let listener = require(`./${name}.js`)
  //   if (message.channels.name === listener.channel)
  //     listener(message)
  // })

  let prefix = process.env.PREFIX
  let messageArray = message.content.split(/ +/)
  let cmd = messageArray[0]
  if (!cmd.startsWith(prefix)) return
  let args = messageArray.slice(1)
  let commandfile = bot.commands.get(cmd.slice(prefix.length))
  
  if (commandfile) {
    if (commandfile.dm != (message.channel.type == 'dm')) return
    commandfile.run.bind({
      data: data,
      server: bot.guilds.get('406827789594001410'),
      redisError (err) {
        console.log(err)
      }
    })(bot, message, args)
  }
})

bot.login(process.env.TOKEN)
