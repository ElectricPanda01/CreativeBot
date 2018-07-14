const Discord = require('discord.js')

let grad = [0xf44336, 0xff5722, 0xff9800, 0xffeb3b, 0x8bc34a, 0x4caf50]

module.exports.run = async function (bot, message, args) {
  let authorID = message.author.id
  let memberID = args[0]
  let member = this.server.members.get(memberID)
  if (member) {
    this.data.multi()
    .hgetall(`ratings:${memberID}`)
    .hgetall(`ratings:${memberID}:comments`)
    .then(([ratings, comments]) => {
      console.log(ratings)
      console.log(comments)
      let members = Object.keys(ratings).map(id => this.server.members.get(id) || {id})
      let embed = new Discord.RichEmbed()
      let rating = Object.keys(ratings).map(k => +ratings[k]).reduce((a,b)=>a+b,0)
      rating /= Object.keys(ratings).length
      embed.setAuthor(`${member.user.username}#${member.user.discriminator}`, member.user.displayAvatarURL)
      embed.setColor(grad[Math.round(rating)])
      embed.setDescription(`${'⭐'.repeat(Math.round(rating))} **${+rating.toFixed(1)}/5**`)
      for (let member of members) {
        let name = member.user
          ? `${member.user.username}#${member.user.discriminator}`
          : `[user left server]`
        if (![process.env.DEV, member.id].includes(authorID))
          name = '[user hidden]'
        name += ` - ${ratings[member.id]}`
        let comment = comments[member.id]
        if (comment.length > 150) comment = comment.slice(0, 147) + '...'
        embed.addField(name, comment, true)
      }
      if (comments.length > 5)
        embed.addField(`${comments.length - 5} other comments`)
      message.reply({ embed: embed })
    }).catch(this.redisError)
  } else {
    message.reply(`Could not find member in **${this.server.name}**`)
  }
}

module.exports.dm = true
module.exports.help = {
  name: "ratings"
}

