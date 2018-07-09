const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply("You do not have permission to do that.");
 
  const embedMessage = args.join(" ");
  message.delete().catch((err) => {});
  const embed = new Discord.RichEmbed()
    .setDescription(embedMessage);

  message.channel.send(embed);
}

module.exports.help = {
  name: "sayembed"
}
