const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
        .setName('commands')
        .setDescription('Commands for Bot!')
        .addSubcommand(commands => commands
                .setName('nsfw')
                .setDescription('a very interesting command ;)'))
        .addSubcommand(command => command
                .setName('randomshsatscore')
                .setDescription('Gives a Random SHSAT Score!'))
        .addSubcommand(c => c
                .setName('info')
                .setDescription('Information about the NYC High School Discord Server'))
        .addSubcommand(c => c
                .setName('cutoffs')
                .setDescription('2023 Latest Cutoff Scores'))
        .addSubcommand(c => c
                .setName('lastcutoffs')
                .setDescription('2022 Cutoff Scores'))
        .addSubcommand(c => c
                .setName('help')
                .setDescription('All Commands'))
        .addSubcommand(c => c
                .setName('hsinfo')
                .setDescription('Information about NYC High Schools & the SHSAT'))
        .addSubcommand(c => c
                .setName('developers')
                .setDescription('MAK, ISHY, AND HEIST CREATED THIS BOT!'))
        .addSubcommand(c => c
                 .setName('extracurriculars')
                 .setDescription('ExtraCurriculars and Programs for NYC High School Students'))
        .addSubcommand(c => c
                .setName('gif')
                .setDescription('sends you a random gif'))
        .addSubcommand(c => c
                .setName('lunch')
                .setDescription('Whats for Lunch in NYC?'))
        .addSubcommand(c => c
                .setName('countdown')
                .setDescription('yes'))
        .addSubcommand(c => c
                .setName('updates')
                .setDescription("Updates from DOE & Server"))
         
                ,async execute (interaction) {
                if (interaction.options.getSubcommand() === "nsfw") {
                    await interaction.reply({
                        content: "8========================================D",
                        ephemeral: true
                    })
                } else if (interaction.options.getSubcommand() === "randomshsatscore") {
                    const shsat_score = (Math.floor(Math.random() * 710) + 400)
                    const embed = new Discord.MessageEmbed()    
                        .setTitle("SHSAT score prediction")
                        .setDescription(`Your SHSAT score: ${shsat_score}`)
                        .setColor('RANDOM')
                        .setFooter(
                        {text: "This bot is just a guess of what some of your shsat scores can be. Don't get too offended losers!"}
                    )
                        .setAuthor("No one!")


                        await interaction.reply({
                            embeds: [embed],
                            ephemeral: true
                        })
                } else if (interaction.options.getSubcommand() === "info") {
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Info About This Server!")
                    .setDescription("This server was founded in 2020 as a welcoming place for students taking the SHSAT and students in NYC involved in High School Admissions. There are many resources, practice tests, and people here to help you! Feel free to check out the server in depth and we hope you have a good time here!")
                    .setFields(
                        {name: "Bot Developers", value: "Ishmael, Mak, & Heist", inline: true},
                        {name: "Server Owners", value: "yoshimario333 & DJ Sama", inline: true}
                    )
                    .setColor("RANDOM")

                        await interaction.reply({
                            embeds: [embed],
                            ephemeral: false
                        })
                } else if (interaction.options.getSubcommand() === "cutoffs") {
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Cutoffs 2023")
                    .setDescription("Latest Cutoff Scores 2023")
                    .setFields(
                        {name: "Stuyvesant", value: "561", inline: true},
                        {name: "HSMSE", value: "518", inline: true},
                        {name: "Bronx Science", value: "521", inline: true},
                        {name: "HSAS", value: "510", inline: true},
                        {name: "Brookyln Tech", value: "503", inline: true},
                        {name: "Brookyln Latin", value: "493", inline: true},
                        {name: "York", value: "527", inline: true},
                        {name: "SITHS", value: "521", inline: true},
                       {name: "LaGuardia", value: "TBD", inline: true},
                        {name: " ", value: "Scores are according to DOE & AdmissionSquad.org. These may not be official & are estimated number for 2023." }
                    )
                    .setColor('RANDOM')

                    interaction.reply({
                        embeds: [embed],
                        ephemeral: false
                    })
                } else if (interaction.options.getSubcommand() === "lastcutoffs") {
                    const embed = new Discord.MessageEmbed()
                    .setTitle("2022 SHSAT Cutoffs")
                    .setDescription("2022 (Last Year's) Cutoffs for the SHSAT")
                    .setFields(
                        {name: "Stuyvesant", value: "563", inline: true},
                        {name: "Brookyln Tech", value: "506", inline: true},
                        {name: "Bronx Science", value: "524", inline: true},
                        {name: "HSMSE", value: "532", inline: true},
                        {name: "HSAS", value: "516", inline: true},
                        {name: "York", value: "500", inline: true},
                        {name: "Staten Island Tech", value: "525", inline: true},
                        {name: "Brookyln Latin", value: "497", inline: true},
                        {name: "LaGuardia", value: "Based on Audition", inline:true},
                        {name: " ", value: "Scores are based off of DOE & AdmissionSquad.org's data for the 2022 test."}
                    )
                    .setColor('RANDOM')

                    interaction.reply({
                        embeds: [embed],
                        ephemeral: false
                    })
                } else if (interaction.options.getSubcommand() === "hsinfo") {
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Information!")
                    .setDescription("Here is some information about High Schools and Specialized High Schools in NYC.")
                    .setColor('RANDOM')
                    .setFields(
                        {name: "What is the SHSAT?", value: "The SHSAT stands for Specialized High Schools Admissions test. It is a intermediate test used to gain admission to NYC's Specialized High Schools.", inline: false},
                        {name: "What are Specialized High Schools?", value: "Specialized High Schools are some of the best public high schools in New York City. Some examples are Stuyvesant, Brooklyn Tech, etc. These schools major in many things ranging from STEM, ELA, Science, Arts, etc.These high schools are known to be rigourous, leading to better higher education. ", inline: false},
                        {name: "SHSAT Format/Is the SHSAT hard?", value: "The SHSAT is known to be a harder than average test, but it will only be hard to those who don't study and take time to know the format. There are many ways to study for the SHSAT. One common way is to get a tutor, but many people self study. There are many resources and books online to find practice questions, check our resources channel for sample questions and practice tests. Make sure to get a NYCDOE SHS Booklet as it has 2 practice questions with similar questions to those on the SHSAT. ", inline: false},
                        {name: "How is the SHSAT graded?", value: "The SHSAT is scored out of 720 and there are 2 sections, Math and ELA. There are field questions usually not counted, but used for the DOE. There are 114 questions in the test for you to answer, and students are usually given 3 hours to complete the test. Students with an IEP or 504 Plan may recieve extra time. Some questions are worth more than others, based on a score curve and the DOE grading system.", inline: false},
                        {name: "Where do I go to take the SHSAT?", value: "If your school's a testing location, then you will be assigned there. Else, you will be assigned to a nearby testing location either by your residence address or the area of the school you go to.", inline: false},
                        {name: "Do we get any resources on the test?", value: "No, it is up to the student to memorize formulas needed for the exam. You may bring water, snacks, pencils, erasers, and highlighters if needed.", inline: false},
                        {name: "How to Deal with Stress from Admissions and the SHSAT", value: "Many students tend to get stressed from high school admissions and the SHSAT, whether it be peer pressure from parents or fear of not getting in. Many students tend to think that they're a failure if they don't pass the SHSAT. However, this is not true. It's not the end of the world if you dont get into a SHS/Good High School. You can do your best anywhere you go and make the most of it. It is up to you to be a good student anywhere you end up. Take deep breaths, study, and relax. Your going to be okay!", inline: false}
                    )

                    interaction.reply({
                        embeds: [embed],
                        ephemeral: false
                    })
                } else if (interaction.options.getSubcommand() === "developers") {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Developer Logs")
                        .setDescription(' ')
                        .setColor('RANDOM')
                        .setFields(
                          {name: "Bot Developers", value: "Ishmael, Mak & Heist Created This Bot! // @ishmael#1845 // @mak#6770 // @heist#1337"},
                          {name: "Version", value: "NYCHS Discord Bot v1.4.0 (discord.js)"},
                          {name: "Dev Logs", value: "March 2022 - discord.py bot // April 2022 - switched to discord.js // December 2022 - discord.js slash commands // April 2023 - Latest Version [BETA]"}
                        )

                    interaction.reply({
                        embeds: [embed],
                        ephemeral: true
                    })
                } else if (interaction.options.getSubcommand() === "gif") {
                    var member = interaction.member
                var msg = [

                    "https://c.tenor.com/P6-J7jUP-rQAAAAM/monkey-gorilla.gif",
                    "https://c.tenor.com/uCfZ1FT6fRwAAAAM/namneungbnk48-milin.gif",
                    "https://c.tenor.com/vnGnrsug4hMAAAAM/69.gif",
                    "https://c.tenor.com/KTiOVtN01fwAAAAM/we-just-met-the-most-random-person-bonnie-hoellein.gif",
                    "https://c.tenor.com/CaLY7UgN0xUAAAAM/random.gif",
                    "https://c.tenor.com/e0iRmhUhwvcAAAAM/hair-flip-long-hair.gif",
                    "https://c.tenor.com/qj3vwUKiCvYAAAAM/random-funny.gif",
                    "https://c.tenor.com/yN7612R5lOUAAAAM/random.gif"
                ];
                var rnd = Math.floor(Math.random() * msg.length)
                    await interaction.reply({
                        content: (msg[rnd]),
                        ephemeral: true
                    }) 
                } else if (interaction.options.getSubcommand() === "help") {
                    const embed = new Discord.MessageEmbed()
                        .setTitle('Help Portal')
                        .setDescription('To Help with all your needs (THIS BOT USES SLASH COMMANDS!)')
                        .setColor('RANDOM')
                        .setFields(
                          {name: "Commands", value: "calc", inline: false},
                           {name: " ", value: "nsfw", inline: false},
                           {name: " ", value: "randomshsatscore", inline: false},
                           {name: " ", value: "info", inline: false},
                           {name: " ", value: "cutoffs", inline: false},
                           {name: " ", value: "lastcutoffs", inline: false},
                          {name: " ", value: "help", inline: false},
                          {name: " ", value: "hsinfo", inline: false},
                          {name: " ", value: "creator", inline: false},
                          {name: " ", value: "gif", inline: false},
                          {name: "More", value: "bobby", inline: false},
                          {name: " ", value: "members", inline: false},
                          {name: " ", value: "tyler", inline: false},
                          {name: " ", value: "yt", inline: false},
                          {name: " ", value: "hs", inline: false},
                          {name: " ", value: "doe", inline: false},
                          {name: " ", value: "dm", inline: false},
                          {name: " ", value: "8ball", inline: false}

                        )

                    interaction.reply({
                        embeds: [embed],
                        ephemeral: false
                    })
                  } else if (interaction.options.getSubcommand() === "extracurriculars") {
                    const embed = new Discord.MessageEmbed()
                        .setTitle('Extracurriculars/Programs 2023')
                        .setDescription('Extracurriculars & Programs that are most popular amongst the server & NYC High School Students across all 5 Boroughs.')
                        .setColor('RANDOM')
                        .setFields(
                          {name: "CCNY Stem Institute", value: 'https://www.steminstitutenyc.org', inline: false},
                          {name: "CUNY College Now Programs", value: 'https://k16.cuny.edu/collegenow/', inline: false},
                          {name: "Stuy Student Opportunities Bulletin", value: 'https://talos.stuy.edu/cms/pages/document-hub/', inline: false},
                          {name: "NEST+m Student Opportunities", value: 'https://nestmk12.net/student_opportunities', inline: false},
                          {name: "NYC Student Opportunity Database", value: 'https://drive.google.com/file/d/15hTbVNXSxuznFILyHxDc3j3eB1TifZ9y/view', inline: false},
                          {name: "HSMSE Student Opportunities", value: 'https://docs.google.com/document/d/1JXyWsM-7LPk3Bku9WsPud_ohIUUFapbMkBbimCQ8HSY/edit', inline: false}
                        )
                     interaction.reply({
                        embeds: [embed],
                        ephemeral: false
                })  
                }else if 
(interaction.options.getSubcommand() === "lunch") {
                    const embed = new Discord.MessageEmbed()
                    .setTitle('DOE Lunch: April 2023')                            .setImage('https://i.imgur.com/DiYYBL8.png')
  
                    interaction.reply({
                        embeds: [embed],
                        ephemeral: false
                })  
                }else if 
(interaction.options.getSubcommand() === "updates") {
                    const embed = new Discord.MessageEmbed()
                    .setTitle("Updates: April 2023")
                    .setFields(
                      {name: "DOE High School Offers 2023", value: "NYC High School Admissions Results were posted during the first weeks of March. To view your admissions decision, go to 'myschools.nyc' or check your parents' emails."},
                      {name: "DOE Admissions Process Fall 2023", value: "Based on past admissions results & community feedback:                                               Earlier Application Timelines, Earlier Offers. This school year, we are moving the high school application timeline earlier in the fall so that offers can be released in March.  A Centralized Open House Calendar for when high school's are allowing families & prospective students to visit.            Improved Virtual Audition Experience, School Day SHSAT Administration, & A Fairer Process for Screened Schools."},
                      {name: "Server Updates: April 2023", value: "Welcome to the New Server Bot, NYCHS! Use this bot for more info on high schools in NYC, or just for fun commands. Enjoy! - ishmael | Server is on the Road to 1000 Members! Know any high schoolers? Tell them to Join! | Thanks for being an active member in our server!"}
                    )
                    interaction.reply({
                        embeds: [embed],
                        ephemeral: false
                })  
}
                }
}
