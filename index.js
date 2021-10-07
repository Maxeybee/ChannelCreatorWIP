const {  Client,  Intents} = require('discord.js');
const commands = require('./Actions/commands');
const t = require("./config.json");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  commands.startBOT(client);
});

// 'interactionCreate' event not compatible with v12 of Discord.js / Discord.js not compatible < node v16 (dev)
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(t.token);