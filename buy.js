module.exports = function (msg) {
  let lines = msg.content.split('\n')
  if (msg.member.hasPermission('MANAGE_MESSAGES')) return

  function correctFormat (msg) {
    msg.author.send(`**Your Message**\n\`\`\`\n${msg.content}\n\`\`\``)
    msg.delete()
    msg.author.send('**Buy Format**\n\nTo ensure organization and everyone getting a fair chance to find an artist, please follow this format:\n```Name:\nPrice range:\nDetails:\nContact info:```\n__Please Note:__ "$0" or "Free" does not mean that you are buying anything. Your message will be deleted if you are using those "price ranges"\n\n*If you have any questions, contact <244279642092077056> or [Panda]#3431*')
  }
  if (lines.length === 4) {
    let checks = [
      // Check Format
      /^Name: ?.+$/i.test(lines[0]),
      /^Price range: [$¥€£]?[1-9]\d*$/i.test(lines[1]),
      /^Details: ?.+$/i.test(lines[2]),
      /^Contact info: ?.+$/i.test(lines[3])
    ]
    if (checks.every(e => e)) {
      // do stuff
    } else {
      correctFormat(msg)
    }
  } else {
    correctFormat(msg)
  }}
