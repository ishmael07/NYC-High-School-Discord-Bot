const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('node:fs');
const token = 'token';

const clientID = 'id';
const guildID = "id";

const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('I am Online')
});
app.listen(3000, () => {
  console.log('connected to server');
});

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new Discord.Collection();


for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
  console.log("mak is gay")

  const rest = new REST({ version: '9' }).setToken(token);

  (async () => {
    try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(
        Routes.applicationGuildCommands(clientID, guildID), // Error is at guildID, as it is not getting the actual guilds ID, just the one I set for testing.
        { body: commands },
      );

      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();

})


client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    if (error)
      console.error(error)

    await interaction.reply({
      content: "An error has occured executing this command"
    });
  }
});


const snipes = new Discord.Collection();

client.on("messageDelete", msg => {
  snipes.set(msg.channel.id, msg)
})

client.on('message', msg => {
  if (msg.content === "$snipe") {
    let snipe = snipes.get(msg.channel.id)
    if (!snipe) return msg.channel.send("There is nothing deleted!")

    const snipeEmbed = new Discord.MessageEmbed()
      .setAuthor(`Message by ${snipe.author.tag}`)
      .setColor('RANDOM')
      .setDescription(snipe.content)

    msg.reply({
      embeds: [snipeEmbed]
    })
  }
  if (msg.content === "bye") {
    msg.reply("bye!!")
  } else if (msg.content === "hello") {
    msg.reply("hello there!")
  } else if (msg.content === "gm") {
    msg.reply("good morning!")
  } else if (msg.content === "bot") {

    msg.reply("Indeed I am a bot, a very cool one. 😎")

  } else if(msg.content === "habibi") {
    msg.reply('https://tenor.com/view/habibi-wildin-meme-funny-arab-gif-19979166')
  } else if(msg.content === "mashallah") {
    msg.reply('https://tenor.com/view/mashallah-drake-dance-gif-21343078')
  }

})





const Events = fs.readdirSync('./Events').filter(file => file.endsWith('.js'));

for (const file of Events) {
  const c = require(`./Events/${file}`);
  client.on(c.name, (...args) => c.execute(...args, client))
}

let prefix = "$";
client.on("messageCreate", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(`${prefix}easteregg`)) {
    message.channel.send("congrats! u found da easter egg");
  } else

    if (message.content.startsWith(`${prefix}foo`)) {
      message.channel.send("bar!");
    }

  if (message.content.startsWith(`${prefix}help`)) {



  }
});




client.login('token'); //put your token here
