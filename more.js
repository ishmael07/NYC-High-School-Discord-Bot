const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("@discordjs/builders")
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');


random_words = [
    "hello",
    "bye"
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('more')
        .setDescription('MORE COMMANDS')
        .addSubcommand(c => c
                .setName('bobby')
                .setDescription('RESOURCES BY BOBBY TARIQ'))
        .addSubcommand(c => c
                .setName('members')
                .setDescription('LETS YOU KNOW HOW MANY MEMBERS ARE IN THIS SERVER')
                .addUserOption(option => option.setName('target').setDescription("The user mentioned")))
        .addSubcommand(c => c
                .setName('tyler')
                .setDescription('RESOURCES BY TYLER TUTOR'))
        .addSubcommand(c => c
                .setName('yt')
                .setDescription('Relaxtion music'))
        .addSubcommand(c => c
                .setName('hs')
                .setDescription('Best NYC Public High Schools'))
        .addSubcommand(c => c
                .setName('doe')
                .setDescription('DOE Resources'))
        .addSubcommand(c => c
                .setName('dm')
                .setDescription('Use this command for a special message from the bot!')),

            async execute(interaction, ctx) {
                if (interaction.options.getSubcommand() === "bobby") {
                    const embed = new Discord.MessageEmbed()
                        .setTitle('Bobby Tariq Resources')
                        .setColor('NOT_QUITE_BLACK')
                        .setFields(
                            {
                                name: "YOUTUBE",
                                value: "https://www.youtube.com/c/BobbyTariqTutoringCenter",
                                inline: false
                            },
                            {
                                name: "WEBSITE",
                                value: "https://store.bobbytariq.com/",
                                inline: false
                            }
                        )

                await interaction.reply({
                    embeds: [embed],
                    ephemeral: false
                })
            } else if (interaction.options.getSubcommand() === "members") {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Members')
                    .setDescription(`Member count: ${interaction.guild.memberCount}\nServer name: ${interaction.guild.name}`)
                    .setColor('BLUE')

                await interaction.reply({
                    embeds: [embed],
                    ephemeral: false
                })
            } else if (interaction.options.getSubcommand() === "tyler") {
                const embed = new Discord.MessageEmbed()
                    .setTitle('TylerTutor Resources')
                    .setColor('RANDOM')
                    .setFields(
                        {
                            name: "YOUTUBE",
                            value: 'https://www.youtube.com/c/TylerTutor',
                            inline: false
                        },
                        {
                            name: 'WEBSITE',
                            value: 'https://www.tylertutor.com/',
                            inline: true
                        }
                    )

                interaction.reply({
                    embeds: [embed],
                    ephemeral: false
                })
            } else if (interaction.options.getSubcommand() === "yt") {
                const embed = new Discord.MessageEmbed()
                    .setTitle('music')
                    .setDescription('Some Average Youtube Relaxation Music to help you study or calm down.')
                    .setColor('RANDOM')

                const row = new Discord.MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setURL('https://www.youtube.com/watch?v=_4kHxtiuML0')
                            .setLabel('GREENRED PRODUCTIONS')
                            .setStyle('LINK'),

                        new MessageButton()
                            .setURL('https://www.youtube.com/watch?v=XXGG39bHQi4')
                            .setLabel('MORE MUSIC')
                            .setStyle('LINK')
                    )

                interaction.reply({
                    components: [row],
                    embeds: [embed],
                    ephemeral: true
                })
            } else if (interaction.options.getSubcommand() === "hs") {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Top High Schools NYC")
                        .setDescription("Here are some of the Top Non-Specialized High Schools in NYC!")
                        .setColor('RANDOM')
                        .setFields(
                            {
                                name: "Townsend Harris High School",
                                value: "Townsend is generally regarded as one of the best schools in NY, often competing & ranking amongst specialized & charter high schools. Their curriculum consists of multiple humanities & college courses, as they're partnered with Queens College.",
                                inline: false
                            },
                            {
                                name: "New Explorations into Science, Technology & Math High School (NEST+m)",
                                value: "NEST+m is a K-12 School with an excellent high school section, intensely focusing on STEM Courses, Clubs, & Electives. It ranks amongst specialized & private schools consistently, and it's located in lower Manhattan.",
                                inline: false
                            },
                            {
                                name: "Bard Early College High Schools",
                                value: "Bard High Schools have 2 Campuses, one in Queens & the Other in Manhattan. They are both generally regarded as very good in getting college credits & getting used to college life as it's an early college high school with a focus in the humanities.",
                                inline: false,
                                
                            },
                            {
                                name: "Francis Lewis High School",
                                value: "Located in a residential part of Queens, Francis Lewis offers various courses in STEM & Humanities, including challenging coursework & multiple clubs.",
                                inline: false,
                            }, 
                          {name: "The Baccalaureate School for Global Education", value: "Located in Astoria, BSGE is one of the only high schools that offers an International Baccalaureate (IB) Program & IB Diploma Upon Graduation."},
                          {name: "Eleanor Roosevelt High School", value: "Nicknamed ElRo, is a small but sturdy high school in the Upper East Side, boasting around 500 high schools students. Students get to take AP courses & electives in 11th grade onwards, ranging from STEM to the Humanities."},
                          {name: "Leon M. Goldstein High School", value: "For the Sciences is in it's name, as it indeed offers multiple tech & science electives, as it is a STEM-oriented school located near the shore in Brooklyn."}
                        )

                interaction.reply({
                    embeds: [embed],
                    ephemeral: false
                })
            } else if (interaction.options.getSubcommand() === "doe") {
                const embed = new Discord.MessageEmbed()
                    .setTitle('DOE')
                    .setColor('BLURPLE')

                const row = new Discord.MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setURL('https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/specialized-high-schools')
                            .setLabel('SHSAT WEBSITE')
                            .setStyle('LINK'),

                        new MessageButton()
                            .setURL('https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/high-school?msclkid=0a844f01cede11ec91a70fbc0048b96a')
                            .setLabel('HS WEBSITE')
                            .setStyle('LINK')
                    )

                interaction.reply({
                    embeds: [embed],
                    components: [row],
                    ephemeral: true
                })
            } else if (interaction.options.getSubcommand() === "dm") {
                await interaction.reply({
                    content: "Check Your DMs Shawty ;)",
                    ephemeral: true
                })
                var member = interaction.member
                var msg = [
                    "https://www.schools.nyc.gov/",
                    "https://www.discord.com/",
                    "hello",
                    "hi",
                    "welcome",
                    "goodbye",
                    "bye bye",
                    "hola habibi",
                    "wsg shawty can I getcho email?!",
                    "we getting that 800 on the SHSAT tho?",
                    "have a great day! you slay B)",
                    "Are you a fortnite player though?",
                    "You In A Top 20 HS though?! ;)",
                    "If you got this message, dm the bot devs with a ss for a surprise ;)",
                    "This is your sign to achieve something great today :)",
                  "This is your sign to add me to your server today!"
                ];
                var rnd = Math.floor(Math.random() * msg.length)
                const embed = new Discord.MessageEmbed()
                    .setTitle('RANDOM')
                    .setColor('RANDOM')
                    .setDescription(msg[rnd])
                member.send({
                    embeds: [embed]
                })
  
                  
                }
            }
}
