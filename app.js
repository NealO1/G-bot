// Calling Packages
const Discord = require('discord.js');
const bot = new Discord.Client();

const db = require('quick.db');
const config = require('./config.json');

require('./join.js');
require('./leave.js');
// Listener Event
bot.on('message', message => {

  bot.user.setUsername('G-')

  if (message.author.bot) return;

  // Global Settings
  db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {

      if (i.text) {
        prefix = i.text;
      } else {
        prefix = '-';
      }

      // Variables
      let msg = message.content.toUpperCase();
      let sender = message.author;
      let args = message.content.slice(prefix.length).trim().split(' ');
      let cmd = args.shift().toLowerCase();
      var member = message.mentions.members.first();

      // Command Handler
      if (!message.content.startsWith('-')) return;

      try {
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, message, args, );
      } catch (e) {
  console.log(e.message);

       
}

// Listener Event

bot.on('ready', () => {

    console.log('All commands loaded successfully..');

    bot.user.setGame('G_Bot');
    bot.user.setStatus('dnd');
  })
});
//Join
bot.on('guildMemberAdd', async member => {

    let guild = member.guild;
    const channel = member.guild.channels.find('name', 'members-log');
    const channel1 = member.guild.channels.find('name', 'bot-spam');

    const embed = new Discord.RichEmbed()
    .setDescription(`:incoming_envelope: ${member} has joined the server`)
    .addField(`We now have ${guild.memberCount} members now.`, '\u200b')
    .setColor('0f5767')
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL);
    if (channel) { channel.send(embed);
    } else {
      (channel1.send(embed));
      return;
    }
  
    const embed1 = new Discord.RichEmbed()
    .setTitle('	__**Here is a list all of available commands**__')
    .setColor('0f5767')
    .setFooter('Sent by Rob the Rocket', 'https://i.imgur.com/3nWK2iv.png')
    .setTimestamp()
    .setThumbnail()
    .addField('-Messages', "Shows how many messages you've sent and your level.")
    .addField('-Balance', 'shows your current balance.')
    .addField('-Payday', 'pays you $500')
    .addField('-Pafine', 'pays your  $500 fine')
    .addField('-Ping', 'Returnes PONG!')
    .addField('-Report', 'Reports a user must include a reason. ')
    .addField('-Help', 'Give a list of all available commands', true)
    .addField('\u200b', '\u200b', true);
    member.send(embed1);
  })
});
//Leave
bot.on('guildMemberRemove', async member  => {
  let guild = member.guild;
  const channel = member.guild.channels.find('name', 'members-log');
  const channel1 = member.guild.channels.find('name', 'bot-spam');
  const embed = new Discord.RichEmbed()
  .setDescription(`:incoming_envelope: ${member} has left the server`)
  .addField(`We are down to ${guild.memberCount} members now.`, '\u200b')
  .setColor('0f5767')
  .setTimestamp()
  .setThumbnail(member.user.displayAvatarURL);
  if (channel) { channel.send(embed);
  } else {
    (channel1.send(embed));
    return;
  }
});

//Auto Role
bot.on('guildMemberAdd', async member => {
  let guild = member.guild;
  let MembersRole = guild.roles.find('name', 'Members');
  member.addRole(MembersRole.id);
});

bot.login(config.token);
