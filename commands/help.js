const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("You do not have permission to do that.");
  let bicon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setTitle(":gear: :gear: :gear: Help Database :gear: :gear: :gear: ")
  .setDescription("Having trouble with a command? You're in the right place!")
  .setColor("#15f153")
  .setThumbnail(bicon)
  .addBlankField(true)
  .addField("Fun",
    "/8ball\n/challenge")
  .addField("Utility",
    "/botinfo\n/serverinfo\n/rules\n/report [player] [reason]");

//Help Mod

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to do that.");
  
  let helpmodembed = new Discord.RichEmbed()
  .setTitle(":gear: :gear: :gear: [Moderator] Help Database :gear: :gear: :gear: ")
  .setDescription("Hello Moderators! Issue with a command? Hope this helps.")
  .setColor("#15f153")
  .setThumbnail(bicon)
  .addBlankField(true)
  .addField("Moderation",
    "/tempmute [user] [time][s,m,h]\n/warnings [user]\n/warn [user]\n/kick [user]\n/ban [user] [reason]\n/clear [# of messages]")
  .addField("Utility",
    "/addrole [role]\n/removerole [role]\n/say [message]\n/sayembed [message]\n/ugh -- for people asking dumb questions.\n/wrong -- for people posting in the wrong channel.\n/help mod");

//Subcommands

  if(!args[0]) return message.channel.send(helpembed);
  if(args[0] === "mod") return message.channel.send(helpmodembed);
}

module.exports.help = {
  name:"help"
}
