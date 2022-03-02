const {
    stringify
} = require("querystring");

module.exports = {
    name: 'delete',
    description: 'delete all voice channels',
    execute(message, args) {

        // message.delete();
        // const fetched = message.channel.fetchMessages({
        //     limit: 99
        // });
        // message.channel.bulkDelete(fetched);
        //return message.channel.send(`Delete Action by ${message.author} !`);

        //message.channel.guild.channels.cache.find((channel) =>
        //      channel.name.toLowerCase() === `logs`);

        let fetched;
        do {
            fetched = channel.fetchMessages({
                limit: 100
            });
            message.channel.bulkDelete(fetched);
        }
        while (fetched.size >= 2);

    }
};