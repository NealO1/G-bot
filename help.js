
exports.run = async (bot, message, name, author, username) => {

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
      .setTitle('Here is a list all of available commands')
      .setColor('0f5767')
      .setFooter('Sent by Rob the Rocket', 'https://i.imgur.com/3nWK2iv.png')
      .setTimestamp()
      .setThumbnail()
      .addField('-Messages', 'Shows how many messages youve sent and your level.')
      .addField('-Balance', 'shows your current balance.')
      .addField('-Payday', 'pays you $500')
      .addField('-Pafine', 'pays your  $500 fine')
      .addField('-Ping', 'Returnes PONG!')
      .addField('-Report', 'Reports a user must include a reason. ')
      .addField('-Help', 'Give a list of all available commands', true)
      .addField('-userinfo', 'Info about a user must tag a member')
      .addField('-botinfo', 'Info about a tagged bot if there is more than one bot')
      .addField('\u200b', '\u200b', true)


    message.channel.send({ embed });

}

module.exports.config = {
  command: "help"
}
