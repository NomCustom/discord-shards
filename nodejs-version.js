/*

    The following code goes into your main bot file.
    Discord.js official source lib: https://github.com/discordjs/discord.js
    Discord.js official website: https://discord.js.org
    Discord.js official documentation: https://discord.js.org/#/docs/main/master/general/welcome
    Source code: https://anidiots.guide/understanding/sharding

*/

// Include discord.js ShardingManger

const Discord = require("discord.js");
const client = new Discord.client({ shardCount: 'auto' });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.run("Token here");
