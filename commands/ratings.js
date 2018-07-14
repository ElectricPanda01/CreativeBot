const Discord = require('discord.js')

let grad = [0xf44336, 0xff5722, 0xff9800, 0xffeb3b, 0x8bc34a, 0x4caf50]

module.exports.run = async function (bot, message, args) {
  let authorID = message.author.id
  let userID = args[0]
  let user = bot.users.get(userID)
  if (user) {
    this.data.multi()
    .hgetall(`ratings:${userID}`)
    .hgetall(`ratings:${userID}:comments`)
    .then(([ratings, comments]) => {
      let embed = new Discord.RichEmbed()
      embed.setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL)
      if (!ratings || !comments) {
        embed.setDescription('This user has no ratings')
      } else {
        let users = Object.keys(ratings).map(id => bot.users.get(id) || {id})
        let rating = Object.keys(ratings).map(k => +ratings[k]).reduce((a,b)=>a+b,0)
        rating /= Object.keys(ratings).length
        embed.setColor(grad[Math.round(rating)])
        embed.setDescription(`${'⭐'.repeat(Math.round(rating))} **${+rating.toFixed(1)}/5**`)
        for (let user of users) {
          let name = `${user.username}#${user.discriminator}`
          if (![process.env.DEV, user.id].includes(authorID))
            name = '[user hidden]'
          name += ` - ${ratings[user.id]}`
          let comment = comments[user.id] || '[no comment]'
          if (comment.length > 150) comment = comment.slice(0, 147) + '...'
          embed.addField(name, comment, true)
        }
        if (comments.length > 5)
          embed.addField(`${comments.length - 5} other comments`)
      }
      message.reply({ embed: embed })
    }).catch(this.redisError)
  } else {
    message.reply('Could not find user.')
  }
}

module.exports.dm = true
module.exports.help = {
  name: "ratings"
}

