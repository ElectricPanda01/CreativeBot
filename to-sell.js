module.exports = function (msg) {
  let lines = msg.content.split('\n')
  if (msg.member.hasPermission('MANAGE_MESSAGES')) return

  function correctFormat (msg) {
    msg.author.send(`**Your Message**\n\`\`\`\n${msg.content}\n\`\`\``)
    msg.delete()
    msg.author.send('**Sell Format**\n\nTo ensure organization and everyone getting a fair chance to find an artist, please follow this format:\n```Name: \nPortfolio: \nType of Work: \nContact Info: \nPrice: \nPayment: ```\n*If you have any questions, contact <244279642092077056> or [Panda]#3431*')
  }
  if (lines.length === 6) {
    let checks = [
      /^Name: ?.+$/i.test(lines[0]),
      /^Portfolio: ?.+$/i.test(lines[1]),
      /^Type of Work: ?.+$/i.test(lines[2]),
      /^Contact Info: ?.+$/i.test(lines[3]),
      /^Price: ?.+$/i.test(lines[4]),
      /^Payment: ?.+$/i.test(lines[5])
    ]
    if (checks.every(e => e)) {
      // do stuff
    } else {
      correctFormat(msg)
    }
  } else {
    correctFormat(msg)
  }
}
