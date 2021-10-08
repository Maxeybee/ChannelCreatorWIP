function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        return mention;
    }
}

module.exports = {
    name: 'move',
    description: 'Information about the arguments provided.',
    execute(message, args) {
        //let concatenateElements = ' '
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else {
            /**Check if channel exist */
            let verifChannel = message.channel.guild.channels.cache.find((channel) =>
                channel.name.toLowerCase() === `salons temporaires`);
            //console.log("value verif channel : " + verifChannel)
            if (!verifChannel) {
                // is channel == null 
                message.guild.channels.create('SALONS TEMPORAIRES', { //Create a channel
                    type: 'category', //Make sure the channel is a text channel
                    permissionOverwrites: [{ //Set permission overwrites
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    }]
                });

            } else {
                console.log("Channel Already existing ! => " + verifChannel);
            }
            //console.log(JSON.stringify(message.guild));


            /**Arguments handling (user args)  */
            args.forEach(element => {
                // get user id formated
                //console.log(getUserFromMention(element));
                return message.channel.send(element);

            });
            //return message.channel.send('args : ' + concatenateElements);
        }
    },
};