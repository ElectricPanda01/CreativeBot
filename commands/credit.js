module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let creditembed = new Discord.RichEmbed()
  .setTitle(":handshake: :handshake: :handshake: Credit Database :handshake: :handshake: :handshake:")
  .setDescription("I wasn't created out of thin air! Here are some people who helped get me up and running!")
  .setColor("#15f153")
  .setThumbnail(sicon)
  .addBlankField(true)
  .addField("Owner",
    "<244279642092077056> [Panda]#3431")
  .addField("Developers")
  .addField("Think Tank")
  .addField("Bug Testers",
    "<267295793113858048> Xylonity#5656")
  .addField("Test Dummy",
    "<185194956615319553> Spooner#9658 ");

  message.channel.send(creditembed);
}

module.exports.help = {
  name:"credit"
}
