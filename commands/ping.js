module.exports.run = async (bot, message, args) => {
  const m = await message.channel.send("Ping?");
  m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  message.delete().catch();
}

module.exports.help = {
  name: "ping"
}
