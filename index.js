// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');


const fetch = require('node-fetch');
const { delay } = require('lodash');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

async function content_list()
{	const response = await fetch("https://kontests.net/api/v1/all") ;
                const JSONlistReply = await response.json() ;
		console.log("Data fetched") ;

        var datetime = new Date();
        const listReply = {};
        console.log(datetime) ;

        var timeNow = new Date()
        timeNow = timeNow.toDateString()
        
                console.log(`\n Time Now: ${timeNow}`)
        
                const trialTime = '2021-08-19T04:00:00.000Z'
        
                dayNow = Number(trialTime.substr(8,2)) 
                monthNow = Number(trialTime.substr(5,2))
                yearNow = Number(trialTime.substr(0,4))

        console.log(`length of array= ${listReply.length}`) ;

        
        // var duration = contestTime.diff(timeNow);
        // console.log(`Time difference= ${duration}`)

        // while(JSONlistReply[i].start_time.diff(datetime).hours() <= 96){

        // for()
        
		return JSONlistReply ;
}



client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
	else if (commandName === 'beep') {
		await interaction.reply('Boop!');
	}
	else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	}
	else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
	else if (commandName === 'contest_list') {
            await interaction.deferReply();
		listReply = await content_list() ;
            //console.log(listReply.result.length);
  
        
        const reply = listReply[1] ;
       console.log("your reply",reply) ;
       const bds=reply;
       for(keys in reply) console.log("keys",keys)
       console.log("ok",bds)
       var datetime = new Date();
        // await interaction.editReply(`your reply is : ${JSON.stringify(bds,['name', 'start_time', 'duration', 'site', 'url'],2)}  \n also, ${reply.start_time.diff(datetime).hours()}`) ;

        var contestTime = (reply.start_time) ;
        console.log(`ContestTime = ${contestTime}`)

        reply.start_time[10] = ' ' ;
        console.log(reply.start_time[10]) ;

        var timeInMss = Date.now()
        console.log(`\n Time diff: ${timeInMss}`)

    

        String.prototype.replaceAt = function(index, replacement) {
            return this.substr(0, index) + replacement + this.substr(index + replacement.length);
        }

        

        await interaction.editReply(`Contest Nsme: ${(bds.name)}  \n\n  URL: ${(bds.url)}  \n\n  Start Time : ${JSON.stringify(reply.start_time).replaceAt(11,' ')}`) ;
     
        }
});

// Login to Discord with your client's token
client.login(token);

