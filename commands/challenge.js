const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
//Challenge Database

    let challengeembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#41e5f4")
    .addField(":military_medal: :military_medal: :military_medal: Challenge :military_medal: :military_medal: :military_medal:",
      "Challenges gives you a way to get out of that creative block that many of us find ourselves in.")
    .addField("Categories",
      "/challenge graphics - Graphics Challenges\n/challenge illustration - Illustration Challenges\n/challenge photography - Photography Challenges")
    .setFooter("If you have any submissions, contact <244279642092077056> or [Panda]#3431");

//Graphics Challenge

    let replies1 = ["#1: Design a minimal logo using 5 triangles.", "#2: Redesign a logo from your neighboring sandwich/pizza shop!", "#3: Design a Logo based around the elements fire and water.", "#4: Design a Logo based on a neighboring nonprofit (or just one that you are familiar with).", "#5: Design a Logo based on the letters 'AWM'.", "#6: Design a Logo based on the first thing you see on Pinterest (or Facebook).", "#7: Create a logo for a cookie company.", "#8: Redesign the current Discord logo. ", "#9: Design/Redesign a logo for a one of your local coffee shops/cafes.", "#10: Make a comedy movie poster only using green and purple (Help: Maybe something revolving around the Joker?).", "#11: Create a new UI for Google.com", "#12: Design a poster advertisement for your favourite film.", "#13: Create a new ESports logo with a Panda mascot! :D", "#14: Create a stream overlay for a YouTuber/Twitcher of your choice.", "#15: Create an album cover for your favourite artist.", "#16: Edit yourself into a country of your choosing (go for realism).", "#17: Imagine your friend, family member, or pet has a YouTube channel. Design their channel a custom logo, banner, overlay, or thumbnail.",
    "#18: Make a thumbnail for a video as if you are facing off against your cousin (or any family member) in a game (extra points for clickbait).", "#19: Create a new User Interface for a music app for mobile devices."];

    let result1 = Math.floor((Math.random() * replies1.length));
    let question1 = args.slice(0).join(" ");

    let graphicschallengeembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#41e5f4")
    .addField("Challenge", replies1[result1])
    .setFooter("If you have any submissions, contact <244279642092077056> or [Panda]#3431");

//Illustration Challenge

    let replies2 = ["#1: Create a cartoonish self portrait of yourself!", "#2: Create a reductive drawing of a bird.", "#3: Favourite cartoon/movie character.", "#4: That one thing that you can't live without.", "#5: Something that you really don't like (specific food? store? person?).", "#6: Something that you miss (friend? family member?).", "#7: Where do you see yourself in the future (10 years in the future? 30 years?).", "#8: What you invision yourself doing right before your death.", "#9: You conquering your greatest fear!", "#10: Draw (and color?) your favourite cartoon character.", "#11: Draw your dream setup (for producing music? Designing? Drawing?).", "#12: Redesign a mascot for your favourite sports team."];

    let result2 = Math.floor((Math.random() * replies2.length));
    let question2 = args.slice(0).join(" ");

    let illustrationchallengeembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#41e5f4")
    .addField("Challenge", replies2[result2])
    .setFooter("If you have any submissions, contact <244279642092077056> or [Panda]#3431");

//Photography Challenges

    let replies3 = ["#1: Use water or a puddle as a reflection.", "#2: Look up 'Steel Wool Photography' and do it!"];

    let result3 = Math.floor((Math.random() * replies3.length));
    let question3 = args.slice(0).join(" ");

    let photographychallengeembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#41e5f4")
    .addField("Challenge", replies3[result3])
    .setFooter("If you have any submissions, contact <244279642092077056> or [Panda]#3431");

//Subcommands

    if(!args[0]) return message.channel.send(challengeembed);
    if(args[0] === "graphics") return message.channel.send(graphicschallengeembed);
    if(args[0] === "illustration") return message.channel.send(illustrationchallengeembed);
    if(args[0] === "photography") return message.channel.send(photographychallengeembed);
}



module.exports.help = {
  name:"challenge"
}
