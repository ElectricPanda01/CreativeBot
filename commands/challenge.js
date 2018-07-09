const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
//Challenge Database

    let challengeembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#41e5f4")
    .addField(":military_medal: :military_medal: :military_medal: Challenge :military_medal: :military_medal: :military_medal:",
      "Challenges gives you a way to get out of that creative block that many of us find ourselves in.")
    .addField("Categories",
      "/challenge logo - Logo Challenges\n/challenge illustration - Illustration Challenges\n/challenge icon - Icon Challenges")
    .setFooter("If you have any submissions, contact <244279642092077056> or [Panda]#3431");

//Logo Challenge

    let replies1 = ["#1: Design a minimal logo using 5 triangles.", "#2: Redesign a logo from your neighboring sandwich/pizza shop!", "#3: Design a Logo based around the elements fire and water.", "#4: Design a Logo based on a neighboring nonprofit (or just one that you are familiar with).", "#5: Design a Logo based on the letters 'AWM'.", "#6: Design a Logo based on the first thing you see on Pinterest (or Facebook)."];

    let result1 = Math.floor((Math.random() * replies1.length));
    let question1 = args.slice(0).join(" ");

    let logochallengeembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#41e5f4")
    .addField("Challenge", replies1[result1])
    .setFooter("If you have any submissions, contact <244279642092077056> or [Panda]#3431");

//Illustration Challenge

    let replies2 = ["#1: Create a cartoonish self portrait of yourself!", "#2: Create a reductive drawing of a bird.", "#3: Favourite cartoon/movie character.", "#4: That one thing that you can't live without.", "#5: Something that you really don't like (specific food? store? person?).", "#6: Something that you miss (friend? family member?).", "#7: Where do you see yourself in the future (10 years in the future? 30 years?).", "#8: What you invision yourself doing right before your death.", "#9: You conquering your greatest fear!"];

    let result2 = Math.floor((Math.random() * replies2.length));
    let question2 = args.slice(0).join(" ");

    let illustrationchallengeembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#41e5f4")
    .addField("Challenge", replies2[result2])
    .setFooter("If you have any submissions, contact <244279642092077056> or [Panda]#3431");

//Icon Challenges

    let replies3 = ["No submissions yet. Please feel free to submit ideas!"];

    let result3 = Math.floor((Math.random() * replies3.length));
    let question3 = args.slice(0).join(" ");

    let iconchallengeembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#41e5f4")
    .addField("Challenge", replies3[result3])
    .setFooter("If you have any submissions, contact <244279642092077056> or [Panda]#3431");

//Subcommands

    if(!args[0]) return message.channel.send(challengeembed);
    if(args[0] === "logo") return message.channel.send(logochallengeembed);
    if(args[0] === "illustration") return message.channel.send(illustrationchallengeembed);
    if(args[0] === "icon") return message.channel.send(iconchallengeembed);
}



module.exports.help = {
  name:"challenge"
}
