const Discord = require('discord.js');

module.exports ={
    name: 'ping',
    author: 'everton',

    run: async(client, message, args) => {

        let cor_da_embed = "GREEN";

        let ping_do_bot = client.ws.ping;

        let embed_1 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`:ping_pong: Pong!`);

        let embed_2 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`:alarm_clock: Ping da API: ${ping_do_bot}ms`);

        let comando = await message.reply({embeds: [embed_1]}).then(msg => {
            setTimeout(() =>{
                msg.edit({embeds: [embed_2]})
            }, 2000)
        })
    }
}