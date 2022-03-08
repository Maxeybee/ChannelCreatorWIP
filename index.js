const fs = require("fs");
const { Client, Intents } = require("discord.js");
const config = require("./config.json");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const commands = new Map(client.commands);

const commandFiles = fs
  .readdirSync("./actions")
  .filter((file) => file.endsWith(".js"));

// retrieve commands from actions folder
console.log("Commands available =>");
for (const file of commandFiles) {
  const command = require(`./actions/${file}`);
  try {
    commands.set(command.name, command);
    console.log(command.name + " / " + command.options);
  } catch (commandFileError) {
    console.log(commandFileError);
  }
}
const getApp = (guildId) => {
  const app = client.api.applications(client.user.id);
  if (guildId) {
    app.guilds(guildId);
  }
  return app;
};

client.on("ready", async () => {
  debugger;
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(commands.keys());
  commands.forEach((cmd) => {
    try {
      getApp(config.guildId).commands.post({
        data: {
          name: cmd.name,
          description: cmd.description,
          options: cmd.options,
        },
      });
    } catch (errorReady) {
      console.log("ready error => " + errorReady);
    }
  });
})

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commands.get(commandName)) {
    console.log(commandName);
    await interaction.reply("Pong!");
    console.log(interaction.options);
  }
})

client.login(config.token)




//console.log(JSON.stringify(interaction));

  //const args = interaction.content.slice(config.prefix.length).trim().split(/ +/);
  //const commandz = args.shift().toLowerCase();

  //console.log(args);
  //  console.log(commandz);

// client.on("messageCreate", async (message) => {
//   if (!message.content.startsWith(config.prefix) || message.author.bot) return;

//   const args = message.content.slice(config.prefix.length).trim().split(/ +/);
//   const command = args.shift().toLowerCase();

//   if (!commands.has(command)) return;

//   try {
//     commands.get(command).execute(message, args, client);
//     //console.log(JSON.stringify(client));
//   } catch (error) {
//     console.error(error);
//     message.reply("there was an error trying to execute that command!");
//   }
// });