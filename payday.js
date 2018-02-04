exports.run = (bot, message, channel, author, member) => {

const ecomony = require('discord-eco')

ecomony.updateBalance(message.author.id, 500).then((i) => {
    message.channel.send(`**You got 500!**\n**New balance:** ${i.money}`);

  })

}

module.exports.config = {
    command: "payday"
}
