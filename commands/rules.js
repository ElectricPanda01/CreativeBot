const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let rulesembed = new Discord.RichEmbed()
  .setTitle(":tools: :tools: :tools: Rules :tools: :tools: :tools:")
  .setDescription("- Be respectful towards everyone.\n- Listen to all staff members.\n- Don't insult anyone.\n- Do not advertise other Discord groups or servers.\n- Talk in the correct channels.\n- Have fun!")
  .setColor("#15f153")
  .setThumbnail(sicon)

  message.channel.send(rulesembed);
}

module.exports.help = {
  name:"rules"
}
