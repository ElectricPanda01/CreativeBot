module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have permission to do that.");
  const sayMessage = args.join(" ");
  message.delete().catch();
  message.channel.send(sayMessage);
}

module.exports.help = {
  name: "say"
}
