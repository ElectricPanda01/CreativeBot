const Discord = require('discord.js')
const fs = require('fs')
const bot = new Discord.Client({disableEveryone: true})
const buy = require('./buy.js')
const sell = require('./sell.js')
const requestroles = require('./requestroles.js')
const showcase = require('./showcase.js')
const request = require('./request.js')
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
  'thic': "Yeah. With three C's",
  'oof': "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start."
  'lmao': "Fuck you."
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
  if (message.channel.name == 'request') request(message)

  let prefix = process.env.PREFIX
  let messageArray = message.content.split(' ')
  let cmd = messageArray[0]
  if (!cmd.startsWith(prefix)) return
  let args = messageArray.slice(1)
  let commandfile = bot.commands.get(cmd.slice(prefix.length))
  if (commandfile) commandfile.run(bot, message, args)
})

bot.login(process.env.TOKEN)
