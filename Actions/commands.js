const {
    Client,
    Intents,
    Message
} = require('discord.js');



const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
function sendMessage() {
    try {
        client.on('message', () => {
            client.channels.cache.get('894948820725669969').send('Hello here!')
        });
        
    } catch (e) {
        console.log("error : " + e);
    }
    //message.channel.send('Hi ! I am connected')
}


module.exports = {
    sendMessage
}