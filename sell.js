module.exports = function (msg) {
  let lines = msg.content.split('\n')
  if (msg.member.hasPermission('MANAGE_MESSAGES')) return

  function correctFormat (msg) {
    msg.author.send(`**Your Message**\n\`\`\`\n${msg.content}\n\`\`\``)
    msg.delete()
    msg.author.send('**Sell Format**\n\nTo ensure organization and everyone getting a fair chance to find an artist, please follow this format:\n```Name:\nPortfolio:\nType of work:\nTime Zone and Availability:\nContact info:\nOther:```\n*If you have any questions, contact <244279642092077056> or [Panda]#3431*')
  }
  if (lines.length === 6) {
    let check1 = lines[0].startsWith('Name: ')
    let check2 = lines[1].startsWith('Portfolio: ')
    let check3 = lines[2].startsWith('Type of work: ')
    let check4 = lines[3].startsWith('Time Zone and Availability: ')
    let check5 = lines[4].startsWith('Contact info: ')
    let check6 = lines[5].startsWith('Other: ')
    if (check1 && check2 && check3 && check4 && check5 && check6) {
      // do stuff
    } else {
      correctFormat(msg)
    }
  } else {
    correctFormat(msg)
  }
}
