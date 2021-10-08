const fs = require('fs');
const Discord = require('discord.js');
const {
  token,
  prefix
} = require("./config.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Actions').filter(file => file.endsWith('.js'));
// 'interactionCreate' event not compatible with v12 of Discord.js / Discord.js not compatible < node v16 (dev)

for (const file of commandFiles) {
  const command = require(`./Actions/${file}`);
  client.commands.set(command.name, command);
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();


  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

client.login(token);