exports.run = (bot, message, args, func) => {

    message.channel.send('Pong!');
}

module.exports.config = {
    command: "ping"
}