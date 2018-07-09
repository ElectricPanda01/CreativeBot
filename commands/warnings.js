const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("I couldn't find that user.");
  let warnings = warns[wUser.id].warns;

  message.channel.send(`<${wUser.id}> has ${warnings} warnings.`);
}

module.exports.help = {
  name: "warnings"
}
