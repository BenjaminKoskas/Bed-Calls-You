const discord = require("discord.js");
const client = new discord.Client({
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES,
        discord.Intents.FLAGS.DIRECT_MESSAGES,
        discord.Intents.FLAGS.GUILD_MEMBERS,
        discord.Intents.FLAGS.GUILD_PRESENCES
    ]
});
let date;
let hour;
let min;
let sec;

client.login("OTEyMDYzMzc3OTE0ODU1NTE0.YZqfNg.N8b09dRCNDvbYzevaPJReU0N3JY");

client.once("ready", () => {
    console.log("Botaaa initialized");
    const guild = client.guilds.cache.get("688756207661613095");
    const channel = guild.channels.cache.get("688788915964084332");
    const user = guild.members.cache.get("658007339860885525");
    let interval = setInterval(() => {
        date = new Date();
        hour = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();
        if (hour === 22 && min === 50 && sec === 0)     
            channel.send(`${user.toString()} Dans 10 min au lit !`);
        else if (hour === 22 && min === 55 && sec === 0)     
            channel.send(`${user.toString()} Dans 5 min au lit !`);
        else if (hour === 23 && min === 0 && sec === 0)     
            channel.send(`${user.toString()} Allez hop au lit !`);
    }, 1000);
});