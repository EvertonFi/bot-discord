const Discord = require('discord.js');

module.exports ={
    name: 'ping',
    author: 'everton',

    run: async(client, message, args) => {

        let cor_da_embed = "YELLOW";

        let ping_do_bot = client.ws.ping;

        let embed = new Discord.MessageEmbed()
        .setAuthor(`Teste de Titulo`)
        .setTitle(`h2`)
        .setColor(cor_da_embed)
        .setDescription(`:alarm_clock: Ping da API: ${ping_do_bot}ms`)
        .setFooter(`TEste de fundo`)
        // .setImage(``)
        

        let comando = await message.reply({embeds: [embed]});
    }
}