const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const config = require("./config.json");
const cargos = require("./cargos.json");


client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == 'EvenusFi') return;
    if (message.content == `<@!${client.user.id}>` || message.content == `<@${client.user.id}>`) {
        return message.channel.send(`:tools: | Olá ${message.author}, veja meus comandos com **!ajuda**`);
    }
});

client.login(config.token);

client.once('ready', async () => {
    let msgStatus = [
        `Peça ajuda com: !ajuda`,
    ]
    count = 0;
    setInterval(() => client.user.setActivity(`${msgStatus[count++ % msgStatus.length]}`, {
        type: "PLAYING"
    }), 1000 * 30);

    //Enviar mensagem no canal com id no get
    client.channels.cache.get("884498491043377213").send("!registrar");
    client.channels.cache.get("885214548251017256").send("!cargos");


    console.log("✅ - Estou online!")



})

client.on('messageCreate', message => {
    if (message.author.bot && message.content !== "!registrar" && message.content !== "!cargos") return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    if (message.channelId === '884498491043377213'
        || message.channelId === '885214548251017256') {
        async function clear() {
            const fetched = await message.channel.messages.fetch({ limit: 100 });
            message.channel.bulkDelete(fetched)
        }
        clear();
    }
    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {

        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);

    } catch (err) {
        console.error('Erro:' + err);
    }
});

client.on("guildMemberAdd", (member) => {
    member.roles.add(cargos.naoRegistrado);
});


//Pegar emoji https://getemoji.com/