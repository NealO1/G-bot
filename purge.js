

exports.run = (bot, message, args , func) => {
    
    
    async function purge() {
        message.delete;


        if (isNaN(args[0])) { 
            message.channel.send('You need to include an amout to delete.\n Usage:  ' + ! + 'purge <amount>');
            return;
        }

        const fetched = await message.channel.fetchMessages({limit: args[0]});
     


        message.channel.bulkDelete(fetched) 

        bot.channels.get('408000861709795348').send( fetched.size + ' messages found and deleted :wastebasket: ' )
        

        
        
        
        
        
        
      

    }


purge();

}
module.exports.config = {
    command: "purge"
}