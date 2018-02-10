exports.run = (bot, message, channel) => {

const Discord = require('discord.js')
const embed= new Discord.RichEmbed()
.setColor('ffffff')
.setDescription(':game_die: You rolled a ' + Math.floor(Math.random() *6)); 
  message.channel.send(embed)

}
