exports.run = (bot, message, username,) => {
    const Discord = require('discord.js')
    let member = message.mentions.members.first();
    var messageArray = message.content.split(/\s+/g);
    let args = messageArray.slice(1);

    if (!member) return message.channel.send('Please mention a user to report.')
    if (!args[1]) return message.channel.send('Please add a valid reason.')

    const embed = new Discord.RichEmbed()
    .setTitle(`Report Information`)
    .setColor('0f5767')
    .addField(`User:`, `**${member.user.username}**`)
    .addField(`Report by:` ,`**${message.author.username}**`)
    .addField(`Reason:`, `**${args.slice(1).join(' ')}**`)
    message.channel.send({embed}) 







}
module.exports.config = {
    command: "report"
}