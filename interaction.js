const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const { execute } = require("../commands/calculator");

module.exports = {
    name: "InteractionCreate",
    async execute(interaction, client) {
        
    }
}
