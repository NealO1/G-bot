/*const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json')


bot.on('guildMemberRemove' , async member => {
  const channel = member.guild.channels.find('name', 'members-log');
  const channel1 = member.guild.channels.find('name', 'bot-spam');
  const embed = new Discord.RichEmbed()
  .setDescription(`:incoming_envelope: ${member}, has joined the server`)
  .addField(`We now have ${message.guild.memberCount}, members now.`)
  .setColor('RANDOM')
  .setTimestamp()
  .setThumbnail(member.user.displayAvatarURL)
  if (channel) { channel.send(embed);
} else { (channel1.send(embed))
return;
}
})




bot.login(config.token);*/
