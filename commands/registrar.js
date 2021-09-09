const Discord = require('discord.js');
const cargos = require("../cargos.json");

module.exports = {
  name: 'ping',
  author: 'everton',

  run: async (client, message, args) => {

    let cor_da_embed = "GREEN";
    let embed_1 = new Discord.MessageEmbed()
      .setTitle(":closed_lock_with_key: | SEJA PROGRAMADOR")
      .setColor(cor_da_embed)
      .setDescription(`Ganhe o cargo <@&884497986351157258>, e desbloqueie os chats privados reagindo com 🔓!`)
      .setImage("https://anatomia-papel-e-caneta.com/wp-content/uploads/2019/06/programador.gif");

    let embed_2 = new Discord.MessageEmbed()
      .setTitle(":exclamation:  | ERROR")
      .setColor(cor_da_embed)
      .setDescription(`Você não tem cargo para usar esse comando!`);
    // send a message and wait for it to be sent
    if (message.author.id === "883747837958053938" || message.author.id === "288080627901923329") {
      var sentMessage = await message.reply({ embeds: [embed_1] });


      sentMessage.react("🔓");
      // set up the collecrtor with the MAX_REACTIONS
      const collector = sentMessage.createReactionCollector();

      collector.on('collect', (reaction, user) => {
        // in case you want to do something when someone reacts with 👍
        if (reaction.emoji.name == "🔓") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.registrado);
          reaction.message.guild.members.cache.get(user.id).roles.remove(cargos.naoRegistrado);
        }
      });
    } else {
      var sentMessage = await message.reply({ embeds: [embed_2] });
    }
  }
}