const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(21);
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("You do not have permission to do that.");
  if(kUser.hasPermission("MANAGE_SERVER")) return message.channel.send("That person can't be kicked!");
  message.delete().catch();

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#fc4b10")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Tiime", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "incidents");
  if(!kickChannel) return message.channel.send("Can't find incidents channel.");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
