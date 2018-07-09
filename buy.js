module.exports = function (msg) {
  let lines = msg.content.split('\n')
  if (msg.member.hasPermission('MANAGE_MESSAGES')) return

  function correctFormat (msg) {
    msg.author.send(`**Your Message**\n\`\`\`\n${msg.content}\n\`\`\``)
    msg.delete()
    msg.author.send('**Buy Format**\n\nTo ensure organization and everyone getting a fair chance to find an artist, please follow this format:\n```Name:\nPrice Range:\nDetails:\nContact info:```\n__Please Note:__ "$0" or "Free" does not mean that you are buying anything. Your message will be deleted if you are using those "price ranges"\n\n*If you have any questions, contact <244279642092077056> or [Panda]#3431*')
  }
  if (lines.length === 4) {
    let checks = [
      // Check Format
      lines[0].startsWith('Name: '),
      lines[1].startsWith('Price Range: '),
      lines[2].startsWith('Details: '),
      lines[3].startsWith('Contact info: '),
      // Check Data
      !lines[1].match(/free|\$0|0/i)
    ]
    if (checks.every(e => e)) {
      // do stuff
    } else {
      correctFormat(msg)
    }
  } else {
    correctFormat(msg)
  }}