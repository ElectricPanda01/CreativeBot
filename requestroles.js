module.exports = function (msg) {
  let lines = msg.content.split('\n')
  if (msg.member.hasPermission('MANAGE_MESSAGES')) return

  function correctFormat (msg) {
    msg.author.send(`**Your Message**\n\`\`\`\n${msg.content}\n\`\`\``)
    msg.delete()
    msg.author.send('**Role Assignent Format**\n\nTo ensure organization and everyone getting a fair chance to find an artist, please follow this format:\n```Role:\nPortfolio:```\n\n*If you have any questions, contact <244279642092077056> or [Panda]#3431*')
  }
  if (lines.length === 2) {
    let checks = [
      // Check Format
      /^Role: ?.+$/i.test(lines[0]),
      /^Portfolio: ?.+$/i.test(lines[1])
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
