
const db = require('quick.db'); 

exports.run = (bot, message, args, func) => {

    db.fetchObject(message.author.id + message.guild.id).then(i => { 
        db.fetchObject(`userLevel_${message.author.id + message.guild.id}`).then(o => { 
            message.channel.send('Your message information has been sent to you.')
            message.author.send('Server name: ' + message.guild.name + '\n' + 'Messages sent: ' + (i.value + 1) + '\n'  + 'Level: ' + o.value + '');
        })
    })

}
module.exports.config = {
    command: "messages"
}