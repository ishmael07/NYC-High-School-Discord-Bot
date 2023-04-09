const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('calc')
        .setDescription('beta command')
        .addStringOption(option => option.setName('ela').setRequired(true).setDescription('Enter the total number of ela questions you got correct out of 57 total questions'))
        .addStringOption(option => option.setName('math').setRequired(true).setDescription('Enter the total number of math questions you got correct out of 57 total questions')),

    
    async execute(interaction) {
        let ela = interaction.options.getString('ela');
        let math = interaction.options.getString('math');
        let mathMul = (math / 57)*360
        let elaMul = (ela / 57)*360
        let finalCalc = Math.round((mathMul + elaMul))
        if (!ela) return interaction.reply("`Not working`");
        if (!math) return interaction.reply("`Not working`");
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Your SHSAT Score:')
            .setFooter('Please Remember that this is an approximate estimate of what your score might be, based on your real time questions that youve gotten correct. For each topic, be sure to input a number out of 57, as the score is out of 114.')
            .setDescription(`Your score is: ${finalCalc}`)

        try {
            await interaction.reply({
              embeds: [embed],
              ephemeral: true })
        } catch (error) {
            console.error(error)
        }
    }
}
