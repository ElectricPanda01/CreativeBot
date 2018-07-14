module.exports.run = async function (bot, message, args) {
  console.log('a')
  let authorID = message.author.id
  let userID = args[0]
  let cmdFormat = `${process.env.PREFIX}rate <id> <rating> <comment>`
  if (!userID) return message.reply(`\`${cmdFormat}\``)
  if (userID == authorID) return message.reply('You cannot rate yourself!')
  let rating = parseInt(args[1])
  let comment = args.slice(2).join(' ')
  let user = bot.users.get(userID)
  if (user) {
    if (isNaN(rating)) {
      message.reply(`Invalid rating. \`${cmdFormat}\``)
    } else if (0 > rating || rating > 5) {
      message.reply('Your rating must be between zero and five.')
    } else {
      if (comment) {
        this.data.multi()
        .hset(`ratings:${userID}`, authorID, rating)
        .hset(`ratings:${userID}:comments`, authorID, comment)
        .then(() => {
          message.reply(`Thank you for rating${rating?' ':''}${'⭐'.repeat(rating)}!`)
        }).catch(this.redisError)
      } else {
        message.reply(`You must provide a comment. \`${cmdFormat}\``)
      }
    }
  } else {
    message.reply('Could not find user.')
  }
}

module.exports.dm = true
module.exports.help = {
  name: "rate"
}
