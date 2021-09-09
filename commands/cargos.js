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
      .setDescription(`Para desbloquear as salas de bate-papo referente a cada linguem você deve reagir de acordo com cada linguagem! 
        \n 
        🔓 <@&884427721663475752>
        🌐 <@&885174702623051847>
        💻 <@&885223175556849755>
        📱 <@&885182555991719956>
        🐍 <@&885216543099740191>
        🐘 <@&884497675205083147>
        💡 <@&884494832058376234>
        📅 <@&885222661150638111>
        🛠️ <@&884497783543984189>
        🐦 <@&884497587384754206>

        Se inscreva no nosso canal do YouTube: https://www.youtube.com/c/EvenusFI
        `)

    let embed_2 = new Discord.MessageEmbed()
      .setTitle(":exclamation:  | ERROR")
      .setColor(cor_da_embed)
      .setDescription(`Você não tem cargo para usar esse comando!`);


    if (message.author.id === "883747837958053938" || message.author.id === "288080627901923329") {

      // send a message and wait for it to be sent
      var sentMessage = await message.reply({ embeds: [embed_1] });
      sentMessage.react("🔓");//Programador
      sentMessage.react("🌐");//WEB
      sentMessage.react("💻");//DESKTOP
      sentMessage.react("📱");//MOBILE
      sentMessage.react("🐍");//Python
      sentMessage.react("🐘");//PHP
      sentMessage.react("💡");//JS
      sentMessage.react("📅");//SQL
      sentMessage.react("🛠️");//ARDUINO
      sentMessage.react("🐦");//FLUTTER

      // sentMessage.react("<:bat_food_full:786954379223367710>");
      // set up the collecrtor with the MAX_REACTIONS
      const collector = sentMessage.createReactionCollector();

      collector.on('collect', (reaction, user) => {
        // in case you want to do something when someone reacts with 👍
        if (reaction.emoji.name == "🔓") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.programador);
        }
        if (reaction.emoji.name == "🌐") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.web);
        }
        if (reaction.emoji.name == "💻") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.desktop);
        }
        if (reaction.emoji.name == "📱") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.mobile);
        }
        if (reaction.emoji.name == "🐍") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.python);
        }
        if (reaction.emoji.name == "🐘") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.php);
        }
        if (reaction.emoji.name == "💡") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.js);
        }
        if (reaction.emoji.name == "📅") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.sql);
        }
        if (reaction.emoji.name == "🛠️") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.arduino);
        }
        if (reaction.emoji.name == "🐦") {
          reaction.message.guild.members.cache.get(user.id).roles.add(cargos.flutter);
        }
      });
    }else{
      var sentMessage = await message.reply({ embeds: [embed_2] });
    }
  }
}