const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let rulesembed = new Discord.RichEmbed()
  .setTitle(":tools: :tools: :tools: Rules :tools: :tools: :tools:")
  .setDescription("> Be respectful to everyone.\n> Refrain from spamming.\n> No NSFW and harmful links.\n> Plagiarism is **not** allowed.\n> Use the appropriate channels for their designated topic.\n> Read #guidelines before posting in any market channels.\n> Advertise in #self-advertisement only.\n> If drama comes up, go into a direct message and sort it out.\n> Do not post someone's personal information without their permission.\n> Only contact people for art if they have already posted a request in #to-sell.\n> Do not advertise other Discord groups or servers.\n\nContact our staff if there are any suspicious acts or transactions.")
  .setColor("#15f153")
  .setThumbnail(sicon)

  message.channel.send(rulesembed);
}

module.exports.help = {
  name:"rules"
}
