const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support } = require("../../config.json")



module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`${bot} Help <a:SahanMusic:903182448152678481> `)
    .setImage("https://i.imgur.com/x0f7AZM.gif")
    .setDescription(` Selam **${message.author.username}**, \n\n Komutları görmek için aşağıdan bir kategori seçin  \n\n  Iyi Dinlemeler  `)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setFooter(`${message.author.tag} tarafından talep edildi `)


    const music = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Music <a:SahanMusic:903182448152678481>`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`İşte tüm müzik komutları: : \n\n \`join\`, \`leave\`, \`loop\`, \`nowplaying\`, \`pause\`,  \`play\`,  \`queue\`,  \`remove\`,  \`resume\`,  \`search\`,  \`skip\`,  \`skipall\`,  \`stop\`,  \`volume\``)
    .setFooter(`${message.author.tag} tarafından talep edildi`)



    const info = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Info <a:SahanMusic:903182448152678481>`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`İşte tüm Bilgi komutları: \n\n \`help\`, \`invite\`, \`setprefix\`,  \`setpre\`,  \`removepremium\``)
    .setFooter(`${message.author.tag} tarafından talep edildi`)


    let button1 = new MessageButton()
    .setLabel(`Music`)
    .setID(`music`)
    .setStyle("blurple");
    

    let button2 = new MessageButton()
    .setLabel(`Info`)
    .setID(`info`)
    .setStyle("green");



    let row = new MessageActionRow()
    .addComponents(button1, button2);



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "music") {

            MESSAGE.edit(music, row);
            await b.reply.defer()
            
        }

         if(b.id == "info") {

            MESSAGE.edit(info, row);
            await b.reply.defer()
            
        }


    });


   
}};