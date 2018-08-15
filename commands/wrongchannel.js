const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to do that.");
  message.delete().catch();
  
  let wrongembed = new Discord.RichEmbed()
  .setColor('#42f471')
  .addField("Real quick...",
    "Please post in the right channel. We have specific channels for a reason. The channels are pretty self-explanatory.");

  message.channel.send(wrongembed);
}

module.exports.help = {
  name:"wrong"
}
