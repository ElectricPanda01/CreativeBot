const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Created By",
      "Art Bot was created by <244279642092077056> ([Panda]#3431) so that art driven servers are able to have most of their commands in one place.");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
