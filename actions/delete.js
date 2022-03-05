const { MessageFlags } = require("discord.js");
const {
    stringify
} = require("querystring");

module.exports = {
    name: 'delete_ messages',
    description: 'delete all messages',
    execute(message, args, client) {

        return message.channel.send("delete messages !");

    }
};