exports.run = (bot, message, args, username, mute,users) => {


    const ms = require("ms");

    let member = message.mentions.members.first() || message.author
    if(!member) return message.reply("You need to tag a user.")
    let muteRole = message.guild.roles.find("name", "Muted");
    if(!muteRole) return messsage.reply("You havent got a role by the name of muted")
    let params = message.content.split(" ").slice(1);
    let time = params[1];
    if(!time) return message.reply("You need to specify a time for the user to be muted for.")
    member.addRole(muteRole.id);
    const Discord = require('discord.js')
    const embed1 = new Discord.RichEmbed()


      .setTitle('Mute information ')
      .setAuthor(`${member.user.username}'s`)
      .setColor('0f5767')
      .setDescription(`${member.user.username} has been muted`)
      .setFooter('Sent by Rob the Rocket', 'https://i.imgur.com/3nWK2iv.png')
      .setTimestamp()
      .addField(`${member.user.username} will be unmuted in`,`${ms(ms(time), {long: true})}`)


      bot.channels.get('393855195089469440').send(embed1)



    setTimeout(function() {
        member.removeRole(muteRole.id);
        const embed1 = new Discord.RichEmbed()
        .setTitle('Unmute information ')
        .setAuthor(`${member.user.username}'s`)
        .setDescription(`${member.user.username} has been unmuted`)
        .setColor('0f5767')
        .setFooter('Sent by Rob the Rocket', 'https://i.imgur.com/3nWK2iv.png')
        .setTimestamp()
        .addField(`${member.user.username}'s mute lasted for`,`${ms(ms(time), {long: true})}`)


    bot.channels.get('393855195089469440').send(embed1)

    }, ms(time));
    }


    module.exports.config = {
        command: "mute"
    }
