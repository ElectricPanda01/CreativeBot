module.exports = function (msg) {
  let lines = msg.content.split('\n')
  if (msg.member.hasPermission('MANAGE_MESSAGES')) return

  function correctFormat (msg) {
    msg.author.send(`**Your Message**\n\`\`\`\n${msg.content}\n\`\`\``)
    msg.delete()
    msg.author.send('**Requesting Art Format**\n\nTo ensure organization and everyone getting a fair chance to find an artist, please follow this format:\n```Name:\nDetails:\nContact info:```\n*If you have any questions, contact <244279642092077056> or [Panda]#3431*')
  }
  if (lines.length === 3) {
    let checks = [
      /^Name: /i.test(lines[0]),
      /^Details: /i.test(lines[1]),
      /^Contact info: /i.test(lines[2])
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
