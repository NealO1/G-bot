exports.run = async (bot, message, author, channel ) => {
const ecomony = require('discord-eco')

ecomony.fetchBalance(message.author.id).then((i) => {
  message.channel.send(`**Balance:** ${i.money}`);

  })
}
module.exports.config = {
  command: "help"
}
