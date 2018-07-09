module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let changeembed = new Discord.RichEmbed()
    .setTitle("Changelogs")
    .setDescription("I will try to keep the 5 most recent changes up on this command. I can't promise that I will update it every single change, but I will do my best to do it daily!")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addBlankField(true)
    .addField("June 8th, 2018",
      "- #showcase restriction to only ``.jpg`` and ``.png`` (prevents discussion)\n- Seperated ``/help`` commands (``/help`` and ``/help mod``) so everyone knows what commands they can do.");

    message.channel.send(changeembed);
}

module.exports.help = {
  name:"changelog"
}
