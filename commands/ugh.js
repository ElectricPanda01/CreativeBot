const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to do that.");
  message.delete().catch();
  
  let ughembed = new Discord.RichEmbed()
  .setColor('#42f471')
  .addField("Okay, let me tell you something.",
    "Staff here are very busy and cannot deal with those who cannot be bothered to read the various channels we have set up to ensure that people have tools and knowledge to navigate discord and this server in particular. Please read <#455057511616217138>, <#478022562048376844>, <#406827790030077963>, and <#411271596469387275> BEFORE proceeding.");

  message.channel.send(ughembed);
}

module.exports.help = {
  name:"ugh"
}
