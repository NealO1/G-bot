exports.run = (bot, message, channel) => {

    const Discord = require('discord.js')
    
    
    let member = message.mentions.members.first()
    if(!member) return message.reply("You need to tag a user.")
    if (message.mentions.users.first().bot) return message.channel.send('```You cannot get the userinfo of a bot.```' +"```\nTo get the bot's info do -botinfo.```");
    const embed = new Discord.RichEmbed()
    .setColor('0f5767')
    .setTitle('Userinfo')
    .addField(`${member.user.username} has been a member since:` , member.joinedAt,)
    .addField(`${member.user.username}'s last message was:`, member.lastMessage == null ? 'No message found' : member.lastMessage)
    .addField(`${member.user.username}'s id is`,`${member.user.id}`)
    
    message.channel.send(embed)
}

module.exports.config = {
    command: "userinfo"
}
