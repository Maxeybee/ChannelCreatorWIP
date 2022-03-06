const fs = require("fs");
const Discord = require("discord.js");
const config = require("./config.json");
const { stringify } = require("querystring");

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./actions")
  .filter((file) => file.endsWith(".js"));

// 'interactionCreate' event not compatible with v12 of Discord.js

// retrieve commands from actions folder
for (const file of commandFiles) {
  const command = require(`./actions/${file}`);
  client.commands.set(command.name, command);
}
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args, client);
    //console.log(JSON.stringify(client));
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

client.login(config.token);
