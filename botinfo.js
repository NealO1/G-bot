exports.run = (bot, message, channel) => {

const Discord = require('discord.js')
let member = message.mentions.members.first()
const embed = new Discord.RichEmbed()
.setColor('0f5767')
.setDescription('G- bot is a multipurpose discord bot')
.setTitle('G- bot was deveolped by @NealO#2446')
.addField('G- was added to this server at:' , member.joinedAt,)
.addField('G- bots id is',`377217772725207051`)
if (message.mentions.users.first().bot) message.channel.send(embed)
if(!message.mentions.users.first().bot) return message.channel.send('You must tag a bot.')



}
module.exports.config = {
    command: "botinfo"
}