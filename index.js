const commando = require('discord.js-commando');
const bot = new commando.Client();
const TOKEN = "NDM5MjQ4Mzk2NDYxNjcwNDAx.DcQZfw.5TEDoCipgvbc2J7iEMo9Ia47g44"

bot.on("ready", function(){
    console.log("Ready");
});

bot.registry.registerGroup('random','Random'); //registers the randonm
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(TOKEN);

/*TODO: Make the config Files https://discordjs.guide/#/creating-your-bot/configuration-files

Discord.JS docs https://discord.js.org/#/docs/main/stable/general/welcome
*/