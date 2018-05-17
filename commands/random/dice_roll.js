const commando = require('discord.js-commando');

//commando class
class DiceRollCommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die'
        }); //tells command is being created
    }

    async run(message, args){
        var roll = Math.floor(Math.random() * 6) + 1; //floor cuts off the decimal, multiplyign by 6 make it 0 - 5
        message.reply("You rolled a " + roll);
    }//called when somebody calls the command (node --harmony .)
}

module.exports = DiceRollCommand; //makes sure command is exported and bot will import it properly