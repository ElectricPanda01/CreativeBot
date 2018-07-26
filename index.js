const Discord = require('discord.js')
const fs = require('fs')
const bot = new Discord.Client({disableEveryone: true})
const buy = require('./to-buy.js')
const sell = require('./to-sell.js')
const requestroles = require('./role-assignment.js')
const showcase = require('./showcase.js')
const request = require('./free-requests.js')
bot.commands = new Discord.Collection()

if (fs.existsSync('botconfig.js'))
  Object.assign(process.env, require('./botconfig.js'))

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
  'aasdfasdfasfdasdfasdf': "asdfasdfasdfasdfasdf",
}
bot.on('message', (message) => {
  if (responseObject[message.content]) {
    message.channel.send(responseObject[message.content])
  }
})

bot.on('ready', () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`)
  bot.user.setActivity('The Channels!', {type: 'WATCHING'})
})

bot.on('message', message => {
  if (message.author.bot) return
  if (message.channel.type === 'dm') return
  if (message.channel.name == 'to-buy') buy(message)
  if (message.channel.name == 'to-sell') sell(message)
  if (message.channel.name == 'role-assignment') requestroles(message)
  if (message.channel.name == 'showcase') showcase(message)
  if (message.channel.name == 'free-requests') request(message)

  let prefix = process.env.PREFIX
  let messageArray = message.content.split(' ')
  let cmd = messageArray[0]
  if (!cmd.startsWith(prefix)) return
  let args = messageArray.slice(1)
  let commandfile = bot.commands.get(cmd.slice(prefix.length))
  if (commandfile) commandfile.run(bot, message, args)
})

bot.login(process.env.TOKEN)
