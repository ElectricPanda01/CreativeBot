module.exports = function (msg) {
  let files = msg.attachments.array()
  if (msg.member.hasPermission('MANAGE_MESSAGES')) return

  function correctFormat (msg) {
    msg.author.send(`**Your Message**\n\`\`\`\n${msg.content}\n\`\`\``)
    msg.delete()
    msg.author.send('**Showcase Rules**\n\n- We only accept ``.png`` and ``.jpg`` files!\n- If you are responding to someones showcase, do it in the corresponding channel.\n*If you have any questions, contact <244279642092077056> or [Panda]#3431*')
  }
  if (files.length && /\.(png|jpg)$/.test(files[0].filename)) {
  } else {
    correctFormat(msg)
  }
}
