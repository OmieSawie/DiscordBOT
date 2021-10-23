// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const _ = require('lodash');

const fetch = require('node-fetch');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

async function content_list()
{	const response = await fetch("https://codeforces.com/api/contest.list?gym=false") ;
                const listReply = await response.json() ;
		console.log("Data fetched") ;
		return listReply ;
}


function unixToIST(i){
        let unix_timestamp = JSON.stringify(listReply.result[i]['startTimeSeconds'],null,2) ;
 
                  // Create a new JavaScript Date object based on the timestamp
                  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                  let date = new Date(unix_timestamp * 1000);
                  // Hours part from the timestamp
                  let hours = date.getHours();
                  // Minutes part from the timestamp
                  let minutes = "0" + date.getMinutes();
                  // Seconds part from the timestamp
                  let seconds = "0" + date.getSeconds();
                  // Will display time in 10:30:23 format
                  let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                    return date ;
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
            console.log(listReply.result.length);
            //contentList.then(data => console.log(data))
            
            //for(let i=0; i<10; i++){
            //    let contestListObject = JSON.stringify(listReply.result[i],null,2)
            //
                let unix_timestamp = JSON.stringify(listReply.result[1]['startTimeSeconds'],null,2) ;
                
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                let date = new Date(unix_timestamp * 1000);
                // Hours part from the timestamp
                let hours = date.getHours();
                // Minutes part from the timestamp
                let minutes = "0" + date.getMinutes();
                // Seconds part from the timestamp
                let seconds = "0" + date.getSeconds();
                // Will display time in 10:30:23 format
                let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
              

        console.log(formattedTime);   
            await interaction.editReply(`The contest list is as follows:\n\n\n ${JSON.stringify(listReply.result[0]['id','name'], null, 2)} \n date: ${unixToIST(0)}    \n\n\n   \n ${JSON.stringify(listReply.result[1]['id','name'], null, 2)} \n date: ${unixToIST(1)}      \n\n\n  \n${JSON.stringify(listReply.result[2]['id','name'], null, 2)} \n date: ${unixToIST(2)}  \n\n\n  \n${JSON.stringify(listReply.result[3]['id','name'], null, 2)} \n date: ${unixToIST(3)}  \n\n\n  \n${JSON.stringify(listReply.result[4]['id','name'], null, 2)} \n date: ${unixToIST(4)}
                `) ;
        }
});

// Login to Discord with your client's token
client.login(token);

