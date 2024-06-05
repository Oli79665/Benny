import { Client, Events, GatewayIntentBits } from "discord.js"

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, (c) => {
    console.log("Ready! Logged in as", c.user.tag)
});

const prefix = Bun.env.PREFIX as string;

client.on(Events.MessageCreate, (msg) => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    switch (msg.content.slice(prefix.length)) {
        case "ping": {
            msg.channel.send("Pong!")
            break;

        }

        case "femboys": {
            msg.channel.send({ files: [{ attachment: "./sex.gif", name: "sex.gif", description: "FUCKEN YES MATE" }] });
            break;
            

        }
        case "help": {
            msg.channel.send("Nah soz mate")
            break;
        }
    }
   
});



client.login(Bun.env.DISCORD_TOKEN);
