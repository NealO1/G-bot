exports.run = (bot, message, channel, author) => {

const ecomony = require('discord-eco')

ecomony.updateBalance(message.author.id, -500).then((i) => {
    message.channel.send(`**You paid your fine of 500!**\n**New balance:** ${i.money}`);


 })

}


module.exports.config = {
    command: "payfine"
}
